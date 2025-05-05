const Table = () => {
  return <div  >
<div className="w-full p-5 rounded-2xl ">
  <table className="w-full border border-gray-300 text-sm rounded-full ">
    <thead className="bg-gray-200 md:table-header-group hidden  ">
      <tr className="h-14 p-10 " >
        <th className="px-4 py-2 text-left font-semibold text-gray-700">User Name</th>
        <th className="px-4 py-2 text-left font-semibold text-gray-700">Email ID</th>
        <th className="px-4 py-2 text-left font-semibold text-gray-700">Phone Number</th>
        <th className="px-4 py-2 text-left font-semibold text-gray-700">Buying Courses</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      
      
      <tr className="h-14 block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">User Name: </span>
          Vedant
        </td>
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Email ID: </span>
          vedant63@gmail.com
        </td>
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Phone Number: </span>
          +919847738947
        </td>
        <td class="px-17 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Buying Courses: </span>
          7
        </td>
      </tr>

     
      <tr className="h-14 block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">User Name: </span>
          Vedant
        </td>
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Email ID: </span>
          vedant63@gmail.com
        </td>
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Phone Number: </span>
          +919847738947
        </td>
        <td class="px-17 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Buying Courses: </span>
          6
        </td>
      </tr>

      <tr className="h-14 block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0">
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">User Name: </span>
          Vedant
        </td>
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Email ID: </span>
          vedant63@gmail.com
        </td>
        <td class="px-4 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Phone Number: </span>
          +919847738947
        </td>
        <td class="px-17 py-2 md:table-cell block">
          <span class="md:hidden font-semibold text-gray-700">Buying Courses: </span>
          5
        </td>
      </tr>

    </tbody>
  </table>
</div>

  </div>;
};

export default Table;
