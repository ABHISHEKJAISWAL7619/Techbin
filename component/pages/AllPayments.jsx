// const AllPayments = () => {
//   return <div>
//      <div className="flex justify-between p-2 pr-16" >
//   <div className="relative w-full max-w-xs">
//   <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
//     🔍
//   </span>
//   <input
//     type="search"
//     placeholder="Search here..."
//     className="w-full border border-gray-500 rounded-3xl pl-10 pr-4 py-2 focus:outline-none"
//   />
// </div>
// <div> 
//     <span className="text-sm text-gray-600"> <i class="ri-filter-fill"></i> Filter</span>
// </div>
//   </div>
//   <div class="w-full p-5 rounded-2xl ">
// <table class="w-full border border-gray-300 text-sm rounded-full ">
// <thead class="bg-gray-200 md:table-header-group hidden">
// <tr className='h-16' >
//   <th class="px-4 py-2 text-left font-semibold text-gray-700">User Name</th>
//   <th class="px-4 py-2 text-left font-semibold text-gray-700">Course Name</th>
//   <th class="px-4 py-2 text-left font-semibold text-gray-700">Transaction Date</th>
//   <th class="px-4 py-2 text-left font-semibold text-gray-700">Amount</th>
// </tr>
// </thead>
// <tbody class="divide-y divide-gray-200">


// <tr  className='h-16' class="block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">User Name: </span>
//     Vedant
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Course Name: </span>
//     Digital Marketting
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Transaction Date: </span>
//     04 Sep 2019
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Amount: </span>
//     500 INR
//   </td>
// </tr>


// <tr  className='h-16' class="block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">User Name: </span>
//     Vedant
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Course Name: </span>
//     Digital Marketting
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Transaction Date: </span>
//     04 Sep 2019
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Amount: </span>
//     500 INR
//   </td>
// </tr>

// <tr  className='h-16' class="block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">User Name: </span>
//     Vedant
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Course Name: </span>
//     Digital Marketting
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Transaction Date: </span>
//     04 Sep 2019
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Amount: </span>
//     500 INR
//   </td>
// </tr>
// <tr  className='h-16' class="block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">User Name: </span>
//     Vedant
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Course Name: </span>
//     Digital Marketting
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Transaction Date: </span>
//     04 Sep 2019
//   </td>
//   <td class="px-4 py-2 md:table-cell block">
//     <span class="md:hidden font-semibold text-gray-700">Amount: </span>
//     500 INR
//   </td>
// </tr>

// </tbody>
// </table>
// </div>

// </div>
// };

// export default AllPayments;
const AllPayments = () => {
  return (
    <div>
      <div className="flex justify-between p-2 pr-16">
        <div className="relative w-full max-w-xs">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">🔍</span>
          <input
            type="search"
            placeholder="Search here..."
            className="w-full border border-gray-500 rounded-3xl pl-10 pr-4 py-2 focus:outline-none"
          />
        </div>
        <div>
          <span className="text-sm text-gray-600">
            <i className="ri-filter-fill"></i> Filter
          </span>
        </div>
      </div>

      <div className="w-full p-5 rounded-2xl">
        <table className="w-full border border-gray-300 text-sm rounded-full">
          <thead className="bg-gray-200 md:table-header-group hidden">
            <tr className="h-16">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">User Name</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Course Name</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Transaction Date</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">

            <tr className="h-16 block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">User Name: </span>
                Vedant
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Course Name: </span>
                Digital Marketting
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Transaction Date: </span>
                04 Sep 2019
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Amount: </span>
                500 INR
              </td>
            </tr>

            <tr className="h-16 block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">User Name: </span>
                Vedant
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Course Name: </span>
                Digital Marketting
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Transaction Date: </span>
                04 Sep 2019
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Amount: </span>
                500 INR
              </td>
            </tr>

            <tr className="h-16 block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">User Name: </span>
                Vedant
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Course Name: </span>
                Digital Marketting
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Transaction Date: </span>
                04 Sep 2019
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Amount: </span>
                500 INR
              </td>
            </tr>

            <tr className="h-16 block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">User Name: </span>
                Vedant
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Course Name: </span>
                Digital Marketting
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Transaction Date: </span>
                04 Sep 2019
              </td>
              <td className="px-4 py-2 md:table-cell block">
                <span className="md:hidden font-semibold text-gray-700">Amount: </span>
                500 INR
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPayments;

