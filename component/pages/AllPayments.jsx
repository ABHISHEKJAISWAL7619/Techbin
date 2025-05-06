"use client";
import React from 'react';

const users = [
  {
    Username: 'Vedant',
    CourseName: 'Digital Marketing',
    TransactionDate: '04 Sep 2019',
    Amount: '500 INR',
  },
  {
    Username: 'Vedant',
    CourseName: 'Digital Marketing',
    TransactionDate: '04 Sep 2019',
    Amount: '500 INR',
  },
  {
    Username: 'Vedant',
    CourseName: 'Digital Marketing',
    TransactionDate: '04 Sep 2019',
    Amount: '500 INR',
  },
  {
    Username: 'Vedant',
    CourseName: 'Digital Marketing',
    TransactionDate: '04 Sep 2019',
    Amount: '500 INR',
  },
];

const AllPayments = () => {
  return (
    <div className="w-full p-4 bg-white">
       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <div className="relative w-full md:max-w-xs">
          <span className="absolute inset-y-0 left-3 flex items-center text-[#202224]">🔍</span>
          <input
            type="search"
            placeholder="Search here..."
            className="w-full border border-gray-500 rounded-3xl pl-10 pr-4 py-2 focus:outline-none"
          />
        </div>

        <div className="text-sm text-[#202224] flex items-center gap-1 cursor-pointer">
          <i className="ri-filter-fill"></i>
          <span>Filter</span>
        </div>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-gray-300">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-gray-200 hidden md:table-header-group">
            <tr className="h-16">
              <th className="px-4 py-2 text-left font-semibold text-[#202224]">User Name</th>
              <th className="px-4 py-2 text-left font-semibold text-[#202224]">Course Name</th>
              <th className="px-4 py-2 text-left font-semibold text-[#202224]">Transaction Date</th>
              <th className="px-4 py-2 text-left font-semibold text-[#202224]">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-[#202224]">
            {users.map((user, index) => (
              <tr
                key={index}
                className="block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0 h-auto md:h-16"
              >
                <td className="px-4 py-2 block md:table-cell">
                  <span className="md:hidden font-semibold text-[#202224]">User Name: </span>
                  {user.Username}
                </td>
                <td className="px-4 py-2 block md:table-cell">
                  <span className="md:hidden font-semibold text-[#202224]">Course Name: </span>
                  {user.CourseName}
                </td>
                <td className="px-4 py-2 block md:table-cell">
                  <span className="md:hidden font-semibold text-[#202224]">Transaction Date: </span>
                  {user.TransactionDate}
                </td>
                <td className="px-4 py-2 block md:table-cell">
                  <span className="md:hidden font-semibold text-[#202224]">Amount: </span>
                  {user.Amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPayments;
