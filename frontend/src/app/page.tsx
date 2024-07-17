"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// Dummy blog data
const dummyBlogs = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    content: "Learn how to use React hooks for state and side effects.",
    author: "Aarsh Shukla",
    date: "12-07-24",
  },
  {
    id: 2,
    title: "Introduction to Tailwind CSS",
    content: "Discover the benefits and basics of Tailwind CSS.",
    author: "Bhargav Thakar",
    date: "10-07-24",
  },
  {
    id: 3,
    title: "Building Scalable Web Apps with Next.js",
    content:
      "Explore how Next.js can help you build scalable web applications.",
    author: "Vimal Sonara",
    date: "09-07-24",
  },
  {
    id: 4,
    title: "Deep Dive into TypeScript",
    content: "Learn TypeScript fundamentals and advanced features.",
    author: "Mitesh Bro",
    date: "08-07-24",
  },
  {
    id: 5,
    title: "Managing State with Redux",
    content: "Master Redux for state management in React applications.",
    author: "Vimal Sonara",
    date: "07-07-24",
  },
  {
    id: 6,
    title: "GraphQL: The Modern API for Frontend Development",
    content: "Introduction to GraphQL and its advantages over REST APIs.",
    author: "Aarsh Shukla",
    date: "06-07-24",
  },
  {
    id: 7,
    title: "Securing Your React Applications",
    content:
      "Best practices for securing React applications from common vulnerabilities.",
    author: "Bhargav Thakar",
    date: "05-07-24",
  },
  {
    id: 8,
    title: "Optimizing Performance in React",
    content:
      "Techniques and tools to optimize performance in React applications.",
    author: "Manish Vankani",
    date: "04-07-24",
  },
  {
    id: 9,
    title: "CI/CD Pipelines with GitHub Actions",
    content:
      "Implement CI/CD pipelines using GitHub Actions for automated workflows.",
    author: "Parvez Belim",
    date: "03-07-24",
  },
  {
    id: 10,
    title: "Serverless Functions with AWS Lambda",
    content:
      "Introduction to serverless architecture using AWS Lambda for backend operations.",
    author: "Nikunj Vadher",
    date: "02-07-24",
  },
];

const Home: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const shareToWhatsApp = () => {
    console.log("Sharing to WhatsApp...");
  };

  const copyLink = () => {
    console.log("Copying link...");
  };

  const shareToTelegram = () => {
    console.log("Sharing to Telegram...");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`bg-${theme === "light" ? "gray-100" : "gray-900"} text-${
        theme === "light" ? "text-black" : "text-black"
      }`}
    >
      <header className={`bg-${theme === "light" ? "white" : "black"} shadow`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-semibold text-2xl">
              <Link href="/">
                Tech<span className="text-purple-800">Blogs</span>
              </Link>
            </div>

            <nav className="hidden md:flex flex-grow justify-end space-x-4 text-base mr-8 font-semibold">
              <Link href="/blog">Blog</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <nav className="hidden md:flex items-center space-x-4">
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-moon"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </button>
              <Link href="/login">
                <span
                  className={`text-${
                    theme === "light" ? "text-white" : "text-black"
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
                <span className="block px-3 py-2 text-center rounded-md text-base font-medium text-white bg-purple-800 hover:bg-purple-900">
                  SignUp
                </span>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {dummyBlogs.map((blog) => (
            <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700">{blog.content}</p>
              <div className="flex flex-row items-center justify-end align-center">
                <div className="flex  justify-end flex-row items-center ">
                  <span className="font-medium p-2">
                    {blog.author}
                    <span className="text-xs pl-1">{blog.date}</span>
                  </span>
                  <button
                    onClick={toggleModal}
                    className="text-black px-1 py-1 rounded-sm "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-share"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-md max-w-md w-full relative"
          >
            <h2 className="text-2xl font-bold mb-4">Share this blog</h2>
            <div className="flex space-x-4">
              <button
                onClick={copyLink}
                className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600"
              >
                Copy Link
              </button>
            </div>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
