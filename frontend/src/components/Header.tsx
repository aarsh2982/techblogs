// components/Header.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Header: React.FC = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState();
  return (
    <header className={`shadow`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-semibold text-2xl">
            <Link href="/">
              Tech<span className="text-purple-800">Blogs</span>
            </Link>
          </div>

          <nav className="hidden md:flex flex-grow justify-end space-x-4 text-base mr-8 font-semibold">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <span className={`hover:text-red-600 font-semibold `}>Login</span>
            </Link>
            <Link href="/signup">
              <span className="bg-purple-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800">
                SignUp
              </span>
            </Link>
          </nav>

          <div className="md:hidden">
            <button type="button">
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/blog">
              <span
                className={`block px-3 py-2 text-center rounded-md text-base font-medium `}
              >
                Blog
              </span>
            </Link>
            <Link href="/about">
              <span
                className={`block px-3 py-2 text-center rounded-md text-base font-medium `}
              >
                About
              </span>
            </Link>
            <Link href="/contact">
              <span
                className={`block px-3 py-2 text-center rounded-md text-base font-medium `}
              >
                Contact
              </span>
            </Link>
            <Link href="/login">
              <span
                className={`block px-3 py-2 text-center rounded-md text-base font-medium `}
              >
                Login
              </span>
            </Link>
            <Link href="/signup">
              <span className="block px-3 py-2 text-center rounded-md text-base font-medium text-white bg-purple-800 hover:bg-purple-900">
                SignUp
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
