import React from 'react';

const users = [
  { name: 'Vedant', email: 'vedant63@gmail.com', phone: '+919847738947', courses: 7 },
  { name: 'Vedant', email: 'vedant63@gmail.com', phone: '+919847738947', courses: 6 },
  { name: 'Vedant', email: 'vedant63@gmail.com', phone: '+919847738947', courses: 6 },
  { name: 'Vedant', email: 'vedant63@gmail.com', phone: '+919847738947', courses: 6 },
];

const TableAllusers = () => {
  return (
    <div className="w-full p-4">
      <div className="overflow-x-auto rounded-2xl border border-gray-300">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 md:table-header-group hidden">
            <tr className="h-16">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">User Name</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Email ID</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Phone Number</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Buying Courses</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr
                key={index}
                className="block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0"
              >
                <td className="px-4 py-2 md:table-cell block">
                  <span className="md:hidden font-semibold text-gray-700">User Name: </span>
                  {user.name}
                </td>
                <td className="px-4 py-2 md:table-cell block">
                  <span className="md:hidden font-semibold text-gray-700">Email ID: </span>
                  {user.email}
                </td>
                <td className="px-4 py-2 md:table-cell block">
                  <span className="md:hidden font-semibold text-gray-700">Phone Number: </span>
                  {user.phone}
                </td>
                <td className="px-4 py-2 md:table-cell block">
                  <span className="md:hidden font-semibold text-gray-700">Buying Courses: </span>
                  {user.courses}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAllusers;
