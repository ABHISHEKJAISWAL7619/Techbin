"use client";
import TableAllusers from "../molecules/card/TableAllusers";

const AllUsers = () => {
  return (
    <div className="bg-white rounded-2xl border-white w-full max-w-screen overflow-hidden px-2 md:px-4 py-4">
      {/* Top Bar with Search and Filter */}
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

      {/* Table Section with scroll on small screens only if needed */}
      <div className="overflow-x-auto">
        <TableAllusers />
      </div>
    </div>
  );
};

export default AllUsers;
