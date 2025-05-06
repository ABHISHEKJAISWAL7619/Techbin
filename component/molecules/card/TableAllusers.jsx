import React from 'react';

const users = [
  { name: 'Vedant', email: 'vedant63@gmail.com', phone: '+919847738947', courses: 7 },
  { name: 'Vedant', email: 'vedant63@gmail.com', phone: '+919847738947', courses: 6 },
  { name: 'Vedant', email: 'vedant63@gmail.com', phone: '+919847738947', courses: 6 },
  { name: 'Vedant', email: 'vedant63@gmail.com', phone: '+919847738947', courses: 6 },
];

const TableAllusers = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-sm border-collapse">
        <thead className="bg-gray-200 hidden md:table-header-group">
          <tr className="h-14">
            <th className="px-4 py-2 text-left font-semibold text-[#202224]">User Name</th>
            <th className="px-4 py-2 text-left font-semibold text-[#202224]">Email ID</th>
            <th className="px-4 py-2 text-left font-semibold text-[#202224]">Phone Number</th>
            <th className="px-4 py-2 text-left font-semibold text-[#202224]">Buying Courses</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr
              key={index}
              className="h-14 md:table-row flex flex-col md:flex-row md:border-none border border-gray-200 rounded-lg mb-4 md:mb-0"
            >
              <td className="px-4 py-2 flex md:table-cell">
                <span className="md:hidden font-semibold text-[#202224] w-32">User Name: </span>
                {user.name}
              </td>
              <td className="px-4 py-2 flex md:table-cell">
                <span className="md:hidden font-semibold text-[#202224] w-32">Email ID: </span>
                {user.email}
              </td>
              <td className="px-4 py-2 flex md:table-cell">
                <span className="md:hidden font-semibold text-[#202224] w-32">Phone Number: </span>
                {user.phone}
              </td>
              <td className="px-4 py-2 flex md:table-cell">
                <span className="md:hidden font-semibold text-[#202224] w-32">Buying Courses: </span>
                {user.courses}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAllusers;
