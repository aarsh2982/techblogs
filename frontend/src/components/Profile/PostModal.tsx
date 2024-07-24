import React, { useState } from "react";

interface PostModalProps {
  show: boolean;
  onHide: () => void;
  onSave: (newPost: {
    title: string;
    author: string;
    content: string;
    category: string;
    image?: File | null; // Optional image field
  }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ show, onHide, onSave }) => {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    content: "",
    category: "",
    image: null as File | null, // Initialize as null
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setNewPost((prevPost) => ({
        ...prevPost,
        image: e.target.files[0],
      }));
    }
  };

  const handleSavePost = () => {
    onSave({
      title: newPost.title,
      author: newPost.author,
      content: newPost.content,
      category: newPost.category,
      image: newPost.image, // Include the image file
    });
    setNewPost({
      title: "",
      author: "",
      content: "",
      category: "",
      image: null,
    }); // Clear the form
  };

  if (!show) return null; // Do not render anything if the modal is not visible

  return (
    <>
      <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg w-full h-full md:w-3/4 md:h-3/4 relative">
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            onClick={onHide}
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter post title"
                value={newPost.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                placeholder="Enter author name"
                value={newPost.author}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="content"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows={4}
                placeholder="Enter post content"
                value={newPost.content}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter post category"
                value={newPost.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Upload Image (optional)
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                onClick={onHide}
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleSavePost}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostModal;
