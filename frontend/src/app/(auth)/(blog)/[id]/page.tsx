"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../../../components/Header";

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
];

const BlogPost: React.FC<{ params: { id: number } }> = ({ params }) => {
  const blog = dummyBlogs.find((blog) => blog.id === Number(params.id));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const copyLink = () => {
    console.log("Copying link...");
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
  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className={`min-h-screen `}>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <article className={`p-6 rounded-lg shadow-md `}>
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

          <div className={`mb-4 `}>{blog.content}</div>

          <div className="flex flex-row gap-2 text-end items-end justify-end">
            <div>
              <span className={`font-medium `}>{blog.author}</span>
              <span className="text-xs pl-1">{blog.date}</span>
            </div>
            <button
              onClick={toggleModal}
              className="text-black dark:text-white px-1 py-1 rounded-sm "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </button>
          </div>
        </article>
      </main>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div
            ref={modalRef}
            className={`p-6 rounded-lg shadow-md max-w-md w-full relative`}
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
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-600"
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

export default BlogPost;
