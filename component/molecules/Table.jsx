// const Table = () => {
//   return (
//     <div className="w-full px-4 py-6">
//       <div className="overflow-x-auto max-w-6xl mx-auto rounded">
//         <div className="p-4 rounded border border-gray-300">
//           <table className="w-full text-sm min-w-[600px]">
//             <thead className="bg-[#F1F4F9] md:table-header-group hidden">
//               <tr className="h-14">
//                 <th className="px-4 py-2 text-left font-semibold text-[#202224]">
//                   User Name
//                 </th>
//                 <th className="px-4 py-2 text-left font-semibold text-[#202224]">
//                   Email ID
//                 </th>
//                 <th className="px-4 py-2 text-left font-semibold text-[#202224]">
//                   Phone Number
//                 </th>
//                 <th className="px-4 py-2 text-left font-semibold text-[#202224]">
//                   Buying Courses
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {[7, 6, 5].map((course, index) => (
//                 <tr
//                   key={index}
//                   className="block md:table-row h-14 border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0"
//                 >
//                   <td className="px-4 py-2 md:table-cell text-[#202224] block">
//                     <span className="md:hidden font-semibold block mb-1">
//                       User Name:
//                     </span>
//                     Vedant
//                   </td>
//                   <td className="px-4 py-2 md:table-cell text-[#202224] block">
//                     <span className="md:hidden font-semibold block mb-1">
//                       Email ID:
//                     </span>
//                     vedant63@gmail.com
//                   </td>
//                   <td className="px-4 py-2 md:table-cell text-[#202224] block">
//                     <span className="md:hidden font-semibold block mb-1">
//                       Phone Number:
//                     </span>
//                     +919847738947
//                   </td>
//                   <td className="px-4 py-2 md:table-cell text-[#202224] block">
//                     <span className="md:hidden font-semibold block mb-1">
//                       Buying Courses:
//                     </span>
//                     {course}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Table;
const Table = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="overflow-x-auto max-w-full mx-auto rounded">
        <div className="p-4 rounded border border-gray-300">
          <table className="w-full text-sm min-w-[320px] md:min-w-[600px]">
            <thead className="bg-[#F1F4F9]">
              <tr className="h-14">
                <th className="px-4 py-2 text-left font-semibold text-[#202224]">User Name</th>
                <th className="px-4 py-2 text-left font-semibold text-[#202224]">Email ID</th>
                <th className="px-4 py-2 text-left font-semibold text-[#202224]">Phone Number</th>
                <th className="px-4 py-2 text-left font-semibold text-[#202224]">Buying Courses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[7, 6, 5].map((course, index) => (
                <tr key={index} className="block md:table-row h-14 border border-gray-200 rounded-md mb-4 md:mb-0 p-4 md:p-0">
                  <td className="px-4 py-2 md:table-cell text-[#202224] block">
                    <span className="md:hidden font-semibold block mb-1">User Name:</span>
                    Vedant
                  </td>
                  <td className="px-4 py-2 md:table-cell text-[#202224] block">
                    <span className="md:hidden font-semibold block mb-1">Email ID:</span>
                    vedant63@gmail.com
                  </td>
                  <td className="px-4 py-2 md:table-cell text-[#202224] block">
                    <span className="md:hidden font-semibold block mb-1">Phone Number:</span>
                    +919847738947
                  </td>
                  <td className="px-4 py-2 md:table-cell text-[#202224] block">
                    <span className="md:hidden font-semibold block mb-1">Buying Courses:</span>
                    {course}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;



