"use client";

import { getauthprofile } from "@/redux/slice/auth-slice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Userprofilepage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const getProfile = async () => {
    try {
      const res = await dispatch(getauthprofile());
      if (res.payload && res.payload.user) {
        setUser(res.payload.user);
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, [dispatch]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-500">Loading user profile...</p>
      </div>
    );
  }

  console.log(user.avatar);

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-3xl shadow-xl border border-gray-200">
      {/* Profile Image */}
      <div className="flex justify-center mb-10">
        <img
          src={user?.avatar}
          alt={user.name}
          className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        />
      </div>

      {/* User Details Form */}
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Role */}
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              value={user.role}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-700 capitalize"
            />
          </div>

          {/* Status */}
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <input
              type="text"
              id="status"
              value={user.status}
              readOnly
              className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                user.status === "online"
                  ? "border-green-500 bg-green-100 text-green-700 ring-green-500"
                  : "border-red-500 bg-red-100 text-red-700 ring-red-500"
              }`}
            />
          </div>

          {/* Account Created */}
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="createdAt"
            >
              Account Created
            </label>
            <input
              type="text"
              id="createdAt"
              value={new Date(user.createdAt).toLocaleString()}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Last Updated */}
          <div>
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="updatedAt"
            >
              Last Updated
            </label>
            <input
              type="text"
              id="updatedAt"
              value={new Date(user.updatedAt).toLocaleString()}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-700"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Userprofilepage;
