"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "../../../components/Header";

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

const Home: React.FC<{ params: { id: number } }> = ({}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          <span className="text-xl font-bold ">Recent Blogs</span>
          {dummyBlogs.map((blog) => (
            <Link href={`/${blog.id}`}>
              <div key={blog.id} className={`p-6 rounded-lg shadow-md`}>
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className={`mb-4 `}>{blog.content}</p>
                <div className="flex flex-row justify-end">
                  <span className={`font-medium `}>
                    {blog.author}
                    <span className="text-xs pl-1">{blog.date}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
