import React from 'react';
import { FaRegUser } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-4xl mt-8">
      <div className="flex items-center space-x-6 mb-6">
       <FaRegUser/>
        <div>
          <h2 className="text-3xl font-bold">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Personal Info */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Full Name:</span>
              <span>John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>johndoe@example.com</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone:</span>
              <span>+1234567890</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Address:</span>
              <span>123 Main St, City, Country</span>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        {/* <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Account Settings</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Change Password:</span>
              <button className="text-blue-600 hover:underline">Update</button>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Manage Addresses:</span>
              <button className="text-blue-600 hover:underline">Edit</button>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Payment Methods:</span>
              <button className="text-blue-600 hover:underline">Manage</button>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Order History:</span>
              <button className="text-blue-600 hover:underline">View</button>
            </div>
          </div>
        </div> */}

        {/* Preferences */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Preferences</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Language:</span>
              <span>English</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Currency:</span>
              <span>USD</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Newsletter:</span>
              <span>Subscribed</span>
            </div>
          </div>
        </div>
      </div>
      <a href='/' className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-1 rounded-md">
                        Home
                    </a>
    </div>
  );
};

export default Profile;
