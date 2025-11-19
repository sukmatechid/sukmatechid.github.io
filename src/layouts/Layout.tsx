import { Link, Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full flex bg-white">
      <aside className="w-64 border-r border-gray-200 p-6 flex flex-col justify-between fixed left-0 top-0 h-screen">
        <div>
          <div className="mb-10">
            <span className="font-semibold text-lg">Sukma Tech</span>
          </div>
          <nav className="space-y-4 text-base text-gray-700">
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
          </nav>
        </div>
        <div className="space-y-2 text-sm text-gray-500">
          <Link
            className="block font-medium hover:text-gray-900 transition-colors"
            to="/contact"
          >
            Contact Us
          </Link>
          <p className="text-xs text-gray-400 pt-4">
            © {new Date().getFullYear()} Sukma Tech Indonesia
          </p>
        </div>
      </aside>

      <main className="flex-1 ml-64 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
