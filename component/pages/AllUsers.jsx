import TableAllusers from "../molecules/card/TableAllusers";


const AllUsers = () => {
  return <div>
  <div className="flex justify-between p-2 pr-16 " >
  <div className="relative w-full max-w-xs">
  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
    🔍
  </span>
  <input
    type="search"
    placeholder="Search here..."
    className="w-full border border-gray-500 rounded-3xl pl-10 pr-4 py-2 focus:outline-none"
  />
</div>
<div> 
    <span className="text-sm text-gray-600"> <i class="ri-filter-fill"></i> Filter</span>
</div>
  </div>

  <TableAllusers/>


  </div>;
};

export default AllUsers;
