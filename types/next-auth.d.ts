/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import { UserRole } from "@/lib/roleUtils";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: UserRole;
      isVerifiedUser: boolean;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role: UserRole;
    isVerifiedUser: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
    isVerifiedUser: boolean;
  }
}
