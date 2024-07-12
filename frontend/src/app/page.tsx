"use client";

import Link from "next/link";
import { useState } from "react";

const Home: React.FC = () => {
  // State for theme
  const [theme, setTheme] = useState<"dark" | "light">("light");

  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-${theme === "light" ? "gray-100" : "gray-900"} text-${
        theme === "light" ? "text-black" : "text-black"
      }`}
    >
      <header className={`bg-${theme === "light" ? "white" : "black"} shadow`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-semibold text-2xl">
              <Link href="/">
                Tech<span className="text-purple-800">Blogs</span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex flex-grow justify-end space-x-4 text-base mr-8 font-semibold">
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            {/* Login and Signup Links */}
            <nav className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className={`p-2 rounded-full text-${
                  theme === "light" ? "gray-600" : "gray-400"
                } bg-white shadow-md hover:text-${
                  theme === "light" ? "text-black" : "text-black"
                } focus:outline-none z-10`}
              >
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-sun"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-moon"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>
              <Link href="/login">
                <span
                  className={`text-${
                    theme === "light" ? "text-black" : "text-black"
                  } hover:text-[#DC143C] font-semibold`}
                >
                  Login
                </span>
              </Link>
              <Link href="/signup">
                <span
                  className={`bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800 hover:text-white`}
                >
                  SignUp
                </span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/blog">
                <span className="block px-3 py-2 text-center rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-800">
                  Blog
                </span>
              </Link>
              <Link href="/about">
                <span className="block px-3 py-2 text-center rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-800">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="block px-3 py-2 text-center rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-800">
                  Contact
                </span>
              </Link>
              <Link href="/login">
                <span className="block px-3 py-2 text-center rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-800">
                  Login
                </span>
              </Link>
              <Link href="/signup">
                <span className="block px-3 py-2 text-center rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-purple-800">
                  SignUp
                </span>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mb-16">
        <div
          className={`px-4 py-6 sm:px-0 ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          <h1 className="text-xl font-bold">Hello, This is Tech-Blogs</h1>
          <p className="mt-4 text-lg">
            Your ultimate source for tech news and insights.
          </p>
        </div>
      </main>

      {/* Footer (optional) */}
      <footer
        className={`bg-${
          theme === "light" ? "white" : "gray-900"
        } border-t border-gray-200`}
      >
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p
            className={`text-center text-${
              theme === "light" ? "gray-500" : "text-black"
            } text-sm`}
          >
            &copy; 2024 TechBlogs. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
