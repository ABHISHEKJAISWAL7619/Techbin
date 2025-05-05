// const Card = () => {
//   return (
//     <div className="p-4 w-full sm:w-80 md:w-96 mx-auto">
//       <div className="w-full rounded-2xl bg-white shadow-md">
//         <div className="bg-amber-500 h-14 p-3 rounded-t-2xl text-white">
//           <p className="text-base font-semibold">All Users</p>
//           <p className="text-sm">(All new users)</p>
//         </div>

//         {[1, 2, 3, 4].map((_, index) => (
//           <div
//             key={index}
//             className="flex gap-4 pt-4 px-4 items-center"
//           >
//             <img
//               className="h-12 w-12 object-cover rounded-full"
//               src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
//               alt="User"
//             />
//             <div>
//               <p className="font-bold">Vedant Tidke</p>
//               <p className="text-sm break-all">vedant6447@gmail.com</p>
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-center items-center text-sm text-blue-600 p-4">
//           <button className="hover:underline">View All</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
const Card = () => {
  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <div className="w-full rounded-2xl bg-white shadow-md">
        <div className="bg-amber-500 h-14 p-3 rounded-t-2xl text-white">
          <p className="text-base font-semibold">All Users</p>
          <p className="text-sm">(All new users)</p>
        </div>

        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="flex gap-4 pt-4 px-4 items-center">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="User"
            />
            <div>
              <p className="font-bold">Vedant Tidke</p>
              <p className="text-sm break-all">vedant6447@gmail.com</p>
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center text-sm text-blue-600 p-4">
          <button className="hover:underline">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
