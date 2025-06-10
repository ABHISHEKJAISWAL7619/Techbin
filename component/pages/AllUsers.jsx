"use client";

import ExportExcel from "@/lib/xlxs";
import { getallusers } from "@/redux/slice/user-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const AllUsers = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getalluser = async () => {
    const res = await dispatch(getallusers());
    const allUsers = res.payload?.data || [];

    // Remove users with role === "Admin"
    const nonAdminUsers = allUsers.filter((user) => user.role !== "Admin");

    setUsers(nonAdminUsers);
  };

  useEffect(() => {
    getalluser();
  }, [dispatch]);

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full px-4 py-6">
      <div className="overflow-x-auto max-w-full mx-auto rounded">
        <div className="p-4 rounded border border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="relative w-full md:max-w-xs">
              <span className="absolute inset-y-0 left-3 flex items-center text-[#202224]">
                🔍
              </span>
              <input
                type="search"
                placeholder="Search by email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-500 rounded-3xl pl-10 pr-4 py-2 focus:outline-none"
              />
            </div>

            <div className="text-sm text-[#202224] flex items-center gap-1 cursor-pointer">
              <ExportExcel data={filteredUsers} />
            </div>
          </div>

          {/* Desktop Table */}
          <table className="hidden md:table w-full text-sm min-w-[600px]">
            <thead className="bg-[#F1F4F9]">
              <tr className="h-14">
                <th className="px-4 py-2 text-left font-poppins text-[#202224]">
                  User Name
                </th>
                <th className="px-4 py-2 text-left font-poppins text-[#202224]">
                  Email ID
                </th>
                <th className="px-4 py-2 text-left font-poppins text-[#202224]">
                  Phone Number
                </th>
                <th className="px-4 py-2 text-left font-poppins text-[#202224]">
                  Buying Courses
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user, index) => (
                <tr key={index} className="h-14 Nunito Sans">
                  <td className="px-4 py-2 text-[#202224]">{user.name}</td>
                  <td className="px-4 py-2 text-[#202224]">{user.email}</td>
                  <td className="px-4 py-2 text-[#202224]">
                    {user.mobile || "N/A"}
                  </td>
                  <td className="px-4 py-2 text-[#202224]">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-4 shadow-sm"
              >
                <div className="mb-2">
                  <span className="block text-sm font-semibold text-gray-600">
                    User Name:
                  </span>
                  <span className="text-[#202224] font-poppins">
                    {user.name}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold text-gray-600">
                    Email ID:
                  </span>
                  <span className="text-[#202224] font-poppins">
                    {user.email}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold text-gray-600">
                    Phone Number:
                  </span>
                  <span className="text-[#202224] font-poppins">
                    {user.mobile || "N/A"}
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-600">
                    Buying Courses:
                  </span>
                  <span className="text-[#202224] font-poppins">
                    {user.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
