"use client";

import { getallusers } from "@/redux/slice/user-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const USERS_PER_PAGE = 5;

const Table = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getalluser = async () => {
    const res = await dispatch(getallusers());
    const allUsers = res.payload.data || [];

    // Filter out Admins
    const nonAdminUsers = allUsers.filter((user) => user.role !== "Admin");
    setUsers(nonAdminUsers);
  };

  useEffect(() => {
    getalluser();
  }, [dispatch]);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const paginatedUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="overflow-x-auto max-w-full mx-auto rounded">
        <div className="p-4 rounded border border-gray-300">
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
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedUsers.map((user, index) => (
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
            {paginatedUsers.map((user, index) => (
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
                    Status:
                  </span>
                  <span className="text-[#202224] font-poppins">
                    {user.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-end items-center mt-4 space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-3 py-1 text-sm font-semibold border rounded bg-gray-100">
              {currentPage}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
