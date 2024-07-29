import "next-auth";

declare module "next-auth" {
  interface User{
    user: {
      id: string;
      email: string;
    };
  }
}
