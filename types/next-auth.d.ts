/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import { UserRole } from "@/lib/roleUtils";
import { VerificationStatus } from "../app/generated/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: UserRole;
      isVerifiedUser: VerificationStatus;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role: UserRole;
    isVerifiedUser: VerificationStatus;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
    isVerifiedUser: VerificationStatus;
  }
}
