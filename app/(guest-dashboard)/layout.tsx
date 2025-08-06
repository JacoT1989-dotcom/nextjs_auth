// app\(guest-dashboard)\layout.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserRole, hasPermission } from "@/lib/roleUtils";

export default function GuestDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading

    if (!session) {
      router.push("/signin");
      return;
    }

    if (!hasPermission(session.user.role, UserRole.GUEST)) {
      router.push("/signin?error=insufficient_permissions");
      return;
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session || !hasPermission(session.user.role, UserRole.GUEST)) {
    return null; // Will redirect
  }

  return <div className="min-h-screen bg-gray-100">{children}</div>;
}
