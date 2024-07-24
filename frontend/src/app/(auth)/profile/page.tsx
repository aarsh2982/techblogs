"use client";

import React, { useState } from "react";
import Header from "../../../components/Header";
import avatar from "../../../assets/back.jpg";
import Posts from "@/components/Profile/Posts";

const Profile: React.FC = () => {
  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle the edit button click
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Function to handle the cancel button click
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row justify-center items-start p-6 space-y-6 md:space-y-0 md:space-x-6 mt-20">
        {/* Profile Card */}
        <div className="w-full md:w-2/12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 flex flex-col items-center">
            <img
              src={avatar.src}
              alt="avatar"
              className="rounded-full h-32 w-32 object-cover mb-4"
            />
            <h1 className="text-xl font-semibold">Hello</h1>
            <p className="text-gray-500">World</p>
          </div>
          <div className="bg-gray-100 p-4 text-center">
            <input type="file" hidden id="upload" />
            <label
              htmlFor="upload"
              className="text-purple-600 font-medium cursor-pointer"
            >
              Upload Picture
            </label>
          </div>
        </div>

        {/* Profile Details Form */}
        <div className="w-full md:w-2/4 shadow-lg rounded-lg">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold">Profile</h1>
              {!isEditing && (
                <button
                  onClick={handleEditClick}
                  className="bg-purple-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
          <div className="p-4">
            <form>
              <div className="mb-4 grid grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="admin_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Name:
                  </label>
                  <input
                    id="admin_name"
                    name="admin_name"
                    type="text"
                    disabled={!isEditing}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="admin_email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email:
                  </label>
                  <input
                    id="admin_email"
                    name="admin_email"
                    type="email"
                    disabled={!isEditing}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="admin_phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password:
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    disabled={!isEditing}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="admin_address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password:
                  </label>
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="text"
                    disabled={!isEditing}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
              {isEditing && (
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="button"
                    onClick={handleCancelClick}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                  >
                    Update
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Posts />
      </div>
    </>
  );
};

export default Profile;
