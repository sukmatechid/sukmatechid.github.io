import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

function Layout() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white">
      <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-200 p-4 lg:p-6 flex flex-row lg:flex-col justify-between items-center lg:items-start fixed left-0 top-0 lg:h-screen bg-white z-10">
        <div className="flex flex-row lg:flex-col items-center lg:items-start w-full lg:w-auto">
          <div className="mb-0 lg:mb-10 mr-auto lg:mr-0">
            <Link
              to="/"
              className="font-semibold text-lg hover:text-gray-700 transition-colors"
            >
              Sukma Tech
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex flex-row lg:flex-col lg:space-y-4 space-x-4 lg:space-x-0 text-base text-gray-700 md:ml-6 lg:ml-0">
            <Link
              className={`block font-medium hover:text-gray-900 transition-colors relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname === "/" ? "after:w-full" : "after:w-0"
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`block font-medium hover:text-gray-900 transition-colors relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname.startsWith("/portfolio")
                  ? "after:w-full"
                  : "after:w-0"
              }`}
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className={`block font-medium hover:text-gray-900 transition-colors relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname.startsWith("/about")
                  ? "after:w-full"
                  : "after:w-0"
              }`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`block font-medium hover:text-gray-900 transition-colors relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full ${
                location.pathname.startsWith("/contact")
                  ? "after:w-full"
                  : "after:w-0"
              }`}
              to="/contact"
            >
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="hidden lg:flex flex-col lg:space-y-2 text-sm text-gray-500 lg:text-gray-500">
          <p className="hidden lg:block text-xs text-gray-400 pt-4">
            © {new Date().getFullYear()} Sukma Tech Indonesia
          </p>
        </div>
      </aside>

      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-10">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              className={`block font-medium hover:text-gray-900 transition-colors py-2 ${
                location.pathname === "/" ? "text-gray-900" : "text-gray-700"
              }`}
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={`block font-medium hover:text-gray-900 transition-colors py-2 ${
                location.pathname.startsWith("/portfolio")
                  ? "text-gray-900"
                  : "text-gray-700"
              }`}
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              className={`block font-medium hover:text-gray-900 transition-colors py-2 ${
                location.pathname.startsWith("/about")
                  ? "text-gray-900"
                  : "text-gray-700"
              }`}
              to="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="block font-medium hover:text-gray-900 transition-colors py-2 text-gray-700 border-t border-gray-200 mt-2 pt-4"
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1 lg:ml-64 lg:mt-0 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
