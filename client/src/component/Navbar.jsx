import logo from "../assets/SpamLogo.png";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path) => {
    return (
      location.pathname === path ||
      location.pathname === `/spam-react-app${path}`
    );
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-12" alt="Spam Logo" />
          <span className="hidden xsm:inline self-center text-base md:text-lg lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
            {" "}
            School Press Advisers'{" "}
            <span className="block xsm:inline">Movement, Inc.</span>{" "}
          </span>
          <span className="xsm:hidden self-center text-base md:text-lg lg:text-2xl font-semibold whitespace-nowrap dark:text-white">
            SPAM
          </span>
        </NavLink>
        <button
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg msd:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full msd:block msd:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 mt-4 md:mt-0 bg-gray-50 md:bg-transparent rounded-lg border border-gray-100 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {["/", "/about", "/blog", "/contact"].map((path) => (
              <li key={path} className="transition duration-300 ease-in-out">
                <NavLink
                  to={path}
                  className={`block py-2 px-4 rounded ${
                    isActive(path)
                      ? "text-white bg-customRed md:bg-transparent md:text-customRed"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-customRed dark:text-white dark:hover:bg-gray-700"
                  }`}
                  aria-current={isActive(path) ? "page" : undefined}
                >
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
