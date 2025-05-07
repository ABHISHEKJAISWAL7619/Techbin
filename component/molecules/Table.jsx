


const Table = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="overflow-x-auto max-w-full mx-auto rounded">
        <div className="p-4 rounded border border-gray-300">
          <table className="hidden md:table w-full text-sm min-w-[600px]">
            <thead className="bg-[#F1F4F9]">
              <tr className="h-14">
                <th className="px-4 py-2 text-left font-poppins text-[#202224]">User Name</th>
                <th className="px-4 py-2 text-left font-poppins text-[#202224]">Email ID</th>
                <th className="px-4 py-2 text-left font-poppins text-[#202224]">Phone Number</th>
                <th className="px-4 py-2 text-left font-poppins text-[#202224]">Buying Courses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[7, 6, 5].map((course, index) => (
                <tr key={index} className="h-14 Nunito Sans ">
                  <td className="px-4 py-2 text-[#202224]">Vedant</td>
                  <td className="px-4 py-2 text-[#202224]">vedant63@gmail.com</td>
                  <td className="px-4 py-2 text-[#202224]">+919847738947</td>
                  <td className="px-4 py-2 text-[#202224]">{course}</td>
                </tr>
              ))}
            </tbody>
          </table>

          
          <div className="md:hidden space-y-4">
            {[7, 6, 5].map((course, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-md p-4 shadow-sm"
              >
                <div className="mb-2">
                  <span className="block text-sm font-semibold text-gray-600">
                    User Name:
                  </span>
                  <span className="text-[#202224] font-poppins">Vedant</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold text-gray-600">
                    Email ID:
                  </span>
                  <span className="text-[#202224] font-poppins">
                    vedant63@gmail.com
                  </span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold text-gray-600">
                    Phone Number:
                  </span>
                  <span className="text-[#202224] font-poppins">
                    +919847738947
                  </span>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-gray-600">
                    Buying Courses:
                  </span>
                  <span className="text-[#202224] font-poppins">{course}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;




