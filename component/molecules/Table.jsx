const Table = () => {
  return (
    <div className="w-full p-5">
      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200 md:table-header-group hidden">
            <tr className="h-14">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">User Name</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Email ID</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Phone Number</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Buying Courses</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {[7, 6, 5].map((course, index) => (
              <tr
                key={index}
                className="block md:table-row border border-gray-200 rounded-md md:rounded-none mb-4 md:mb-0 p-4 md:p-0"
              >
                <td className="px-4 py-2 md:table-cell block">
                  <span className="md:hidden font-semibold text-gray-700">User Name: </span>
                  Vedant
                </td>
                <td className="px-4 py-2 md:table-cell block">
                  <span className="md:hidden font-semibold text-gray-700">Email ID: </span>
                  vedant63@gmail.com
                </td>
                <td className="px-4 py-2 md:table-cell block">
                  <span className="md:hidden font-semibold text-gray-700">Phone Number: </span>
                  +919847738947
                </td>
                <td className="px-4 py-2 md:table-cell block">
                  <span className="md:hidden font-semibold text-gray-700">Buying Courses: </span>
                  {course}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
