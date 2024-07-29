// pages/profile.js
import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {/* Sidebar */}
      <aside className="col-span-1 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold">Profile Details</h2>
        <p className="mt-4">Profile info goes here...</p>
      </aside>

      {/* Main Content */}
      <div className="col-span-3 grid grid-rows-2 gap-4">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4">
            <h3 className="text-lg font-semibold">Upper Left Section</h3>
            <p>Content for upper left section.</p>
          </div>
          <div className="bg-gray-300 p-4">
            <h3 className="text-lg font-semibold">Upper Right Section</h3>
            <p>Content for upper right section.</p>
          </div>
        </div>

        {/* Lower Section */}
        <div className="bg-gray-400 p-4 col-span-1 md:col-span-2">
          <h3 className="text-lg font-semibold">Lower Section</h3>
          <p>Content for lower section.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
