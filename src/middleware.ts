import { NextResponse,NextRequest } from "next/server";
export {default} from "next-auth/middleware"
import { getToken } from "next-auth/jwt";


interface CustomNextRequest extends NextRequest {
  userId?: number;
}

export async function middleware(req: CustomNextRequest) {
  const token = await getToken({ req });
  const url = req.nextUrl;
  console.log("middleware hit");
  console.log(url.pathname);
  console.log(token);

  if (
    token &&
    (url.pathname.startsWith("/sign-in"))
  ) {
    return NextResponse.redirect("/");
  }
}

export const config = {
  matcher: [
    "/api/auth/[...nextauth]",
    "/api/user",
  ],
};
