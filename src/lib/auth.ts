import CredentialsProvider from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { JWTPayload, SignJWT, importJWK } from "jose";
import { NextAuthOptions } from "next-auth";
import prisma from "./prisma";

const generateJWT = async (payload: JWTPayload): Promise<string> => {
  const secret = process.env.JWT_SECRET || "";

  const jwk = await importJWK({ k: secret, alg: "HS256", kty: "oct" });

  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("365d")
    .sign(jwk);

  return jwt;
};

export const NEXT_AUTH: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any): Promise<any> {
        const email = credentials.email;
        const password = credentials.password;

        try {
          const userDb = await prisma.user.findFirst({
            where: {
                email: email,
            },
            select: {
              id: true,
              email: true,
              passwordHash: true,
            },
          });
          console.log("userDb", userDb);

          if (
            userDb &&
            password &&
            (await bcrypt.compare(credentials.password, userDb.passwordHash))
          ) {
            const jwt = await generateJWT({ id: userDb.id });

            await prisma.user.update({
              where: {
                id: userDb.id,
              },
              data: {
                token: jwt,
              },
            });

            return {
              id: userDb.id,
              email: userDb.email,
              token: jwt,
            };
          }

          const hashedPassword = await bcrypt.hash(password, 10);

          const user = await prisma.user.create({
            data: {
              email: email,
              passwordHash: hashedPassword,
            },
            select: {
              id: true,
              email: true,
            },
          });

          if (!user) return null;

          const jwt = await generateJWT({ id: user.id });

          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              token: jwt,
            },
          });

          return {
            id: user.id,
            email: user.email,
            token: jwt,
          };
        } catch (e) {
          console.error("Database error:", e);
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "",
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },

    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider == "google") {
        console.log(user);
        try {
          const userDb = await prisma.user.upsert({
            where: {
              email: user.email,
            },
            update: {
              //@ts-ignore
              email: user.email,
              passwordHash: "",
            },
            create: {
              email: user.email,
              //@ts-ignore
              passwordHash: "",
            },
            select: {
              id: true,
              email: true,
            },
          });
          console.log(userDb, "from ggoollgle");
          return true;
        } catch (e) {
          console.error("Database error:", e);
          return false;
        }
      }
      return true;
    },
  },
};
