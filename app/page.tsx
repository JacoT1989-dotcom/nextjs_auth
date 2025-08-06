import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">NextAuth System</div>
          <div className="flex space-x-4">
            <Link
              href="/signin"
              className="px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        {/* Big Lock Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-16 h-16 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v3h6V6a3 3 0 0 0-3-3zm0 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
          </div>
        </div>

        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 text-center mb-6">
          Next.js 15.4.5
          <br />
          <span className="text-indigo-600">NextAuth System</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-600 text-center max-w-2xl mb-12 leading-relaxed">
          Secure, role-based authentication system built with the latest Next.js
          technology. Features 9-tier user roles, automatic dashboard routing,
          and enterprise-grade security.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/signin"
            className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 font-semibold transition-all duration-200 text-center shadow-md"
          >
            Sign In to Dashboard
          </Link>
          <Link
            href="/signup"
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold transition-all duration-200 text-center shadow-md"
          >
            Create Account
          </Link>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Secure Authentication
            </h3>
            <p className="text-gray-600">
              Enterprise-grade security with encrypted passwords and JWT tokens.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.987 2.987 0 0 0 17.14 7H14.8c-.8 0-1.54.5-1.85 1.26l-1.92 5.77A2 2 0 0 0 13 16.5V22h2v-5h3v5h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 16v-5H9v-4.5c0-.8-.34-1.56-.9-2.1L6.5 9l1.41-1.41L9.5 9.17c.39.39.9.59 1.41.83H12v2H9.5l-1.32 1.32A2.99 2.99 0 0 0 7 15.5V22h2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Role-Based Access
            </h3>
            <p className="text-gray-600">
              9-tier role system with granular permissions and access control.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Smart Dashboards
            </h3>
            <p className="text-gray-600">
              Automatic routing to role-specific dashboards with tailored
              features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
