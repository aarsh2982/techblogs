import React, { useState } from "react";
import PostModal from "./PostModal"; // Adjust the import path as necessary

const Posts: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSavePost = (newPost: {
    title: string;
    author: string;
    content: string;
    category: string;
  }) => {
    // Add logic to save the new post
    console.log("New Post Data:", newPost);
    handleCloseModal();
  };

  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
    // Add more posts here
  ];

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-lg relative w-full md:w-2/3 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Your Blogs</h2>
        <button
          onClick={handleShowModal}
          className="absolute top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Post New Blog
        </button>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition-colors"
            >
              {post.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Fullscreen Modal */}
      <PostModal
        show={showModal}
        onHide={handleCloseModal}
        onSave={handleSavePost}
      />
    </>
  );
};

export default Posts;
