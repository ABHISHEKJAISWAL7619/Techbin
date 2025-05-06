// const CourseCard = () => {
//   return (
//     <div className="w-full px-4 py-4">
//       <div className="flex flex-col sm:flex-row gap-4 rounded-xl border border-gray-300 w-full max-w-md mx-auto">
//         <div className="w-full sm:w-1/3 flex justify-center">
//           <img
//             className="h-44 max-w-[160px] object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
//             src="https://img.freepik.com/free-photo/education-students-happy-asian-woman-holding-notebooks-laughing-smiling-camera-enjoys-goi_1258-167794.jpg?semt=ais_hybrid&w=740"
//             alt="Course"
//           />
//         </div>
//         <div className="flex flex-col justify-between p-4 w-full">
//           <div>
//             <div className="flex justify-between items-center">
//               <span className="text-yellow-400 font-poppins">Digital Marketing</span>
//               <span>
//                 <i className="ri-arrow-up-circle-line text-xl"></i>
//               </span>
//             </div>
//             <h1 className="font-bold text-2xl mt-1">Course Name</h1>
//             <p className="text-sm text-[#202224] mt-3">
//               <i className="ri-star-fill text-yellow-400"></i> 4.2 | 4 Hrs 05 Mins
//             </p>
//           </div>
//           <div className="mt-2">
//             <del className="text-[#202224]">₹5000</del>{' '}
//             <span className="text-green-500 font-poppins">₹1000</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
const CourseCard = () => {
  return (
    <div className="w-full px-4 py-4">
      <div className="flex flex-col sm:flex-row gap-4 rounded-xl border border-gray-300 w-full max-w-md mx-auto">
        {/* Image Section */}
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
          <img
            className="h-44 w-full max-w-[160px] object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
            src="https://img.freepik.com/free-photo/education-students-happy-asian-woman-holding-notebooks-laughing-smiling-camera-enjoys-goi_1258-167794.jpg?semt=ais_hybrid&w=740"
            alt="Course"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between p-4 w-full">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400 font-poppins">Digital Marketing</span>
              <span>
                <i className="ri-arrow-up-circle-line text-xl"></i>
              </span>
            </div>
            <h1 className="font-bold text-2xl mt-1">Course Name</h1>
            <p className="text-sm text-[#202224] mt-3">
              <i className="ri-star-fill text-yellow-400"></i> 4.2 | 4 Hrs 05 Mins
            </p>
          </div>
          <div className="mt-2">
            <del className="text-[#202224]">₹5000</del>{' '}
            <span className="text-green-500 font-poppins">₹1000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
