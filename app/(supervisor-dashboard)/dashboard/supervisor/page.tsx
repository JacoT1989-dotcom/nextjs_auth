// app\(supervisor-dashboard)\dashboard\page.tsx
"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { UserRole, roleDescriptions } from "@/lib/roleUtils";

export default function SuperVisorDashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                SuperVisor Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                {roleDescriptions[UserRole.SUPERVISOR]}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {session?.user?.name}
                </p>
                <p className="text-xs text-gray-600">{session?.user?.email}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Supervisor
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              User Management
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Create Users
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Manage User Roles
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                User Reports
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Access Control
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              System Reports
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Active Users: <span className="font-medium">456</span>
              </p>
              <p className="text-sm text-gray-600">
                New Registrations: <span className="font-medium">23</span>
              </p>
              <p className="text-sm text-gray-600">
                Content Items: <span className="font-medium">8,901</span>
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View Detailed Reports
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Content Management
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Review Flagged Content
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Manage Categories
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Content Analytics
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Moderation Queue
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Send System Notice
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                Export User Data
              </button>
              <button className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm">
                System Maintenance
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-2">
              <p className="text-xs text-gray-600">
                User johndoe registered 2 hours ago
              </p>
              <p className="text-xs text-gray-600">
                Content flagged for review
              </p>
              <p className="text-xs text-gray-600">System backup completed</p>
              <p className="text-xs text-gray-600">5 new support tickets</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              System Health
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Server Status:{" "}
                <span className="font-medium text-green-600">Online</span>
              </p>
              <p className="text-sm text-gray-600">
                Database:{" "}
                <span className="font-medium text-green-600">Healthy</span>
              </p>
              <p className="text-sm text-gray-600">
                Response Time: <span className="font-medium">120ms</span>
              </p>
              <p className="text-sm text-gray-600">
                Error Rate: <span className="font-medium">0.02%</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
