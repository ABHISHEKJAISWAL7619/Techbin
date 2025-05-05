// import TableAllusers from "../molecules/card/TableAllusers";


// const AllUsers = () => {
//   return <div className=" bg-white" >
//   <div className="flex justify-between p-2 pr-16 " >
//   <div className="relative w-full max-w-xs">
//   <span className="absolute inset-y-0 left-3 flex items-center text-[#202224]">
//     🔍
//   </span>
//   <input
//     type="search"
//     placeholder="Search here..."
//     className="w-full border border-gray-500 rounded-3xl pl-10 pr-4 py-2 focus:outline-none"
//   />
// </div>
// <div> 
//     <span className="text-sm text-[#202224]"> <i class="ri-filter-fill"></i> Filter</span>
// </div>
//   </div>

//   <TableAllusers/>


//   </div>;
// };

// export default AllUsers;
"use client";
import TableAllusers from "../molecules/card/TableAllusers";

const AllUsers = () => {
  return (
    <div className="bg-white w-full">
      {/* Top Bar with Search and Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
        <div className="relative w-full md:max-w-xs">
          <span className="absolute inset-y-0 left-3 flex items-center text-[#202224]">🔍</span>
          <input
            type="search"
            placeholder="Search here..."
            className="w-full border border-gray-500 rounded-3xl pl-10 pr-4 py-2 focus:outline-none"
          />
        </div>

        <div className="text-sm text-[#202224] flex items-center gap-1">
          <i className="ri-filter-fill"></i>
          <span>Filter</span>
        </div>
      </div>

      {/* Table Section */}
      <TableAllusers />
    </div>
  );
};

export default AllUsers;

