// app/(auth)/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-full">
        {/* Left side - Branding/Info */}
        <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center bg-indigo-600">
          <div className="max-w-md text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Welcome to Our App
            </h1>
            <p className="text-indigo-200 text-lg">
              Join thousands of users who trust us with their authentication
              needs.
            </p>
          </div>
        </div>

        {/* Right side - Auth Forms */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
