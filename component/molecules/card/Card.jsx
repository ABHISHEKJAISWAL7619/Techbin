// "use client";

// import { getallusers } from "@/redux/slice/user-slice";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";

// const Card = () => {
//   const dispatch = useDispatch();
//   const [allUsers, setAllUsers] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   const getalluser = async () => {
//     const res = await dispatch(getallusers());
//     if (res.payload?.data) {
//       // Filter out Admin users
//       const filtered = res.payload.data.filter((user) => user.role !== "Admin");
//       setAllUsers(filtered);
//     }
//   };

//   useEffect(() => {
//     getalluser();
//   }, [dispatch]);

//   const displayedUsers = showAll ? allUsers : allUsers.slice(0, 5);

//   return (
//     <div className="p-4 w-full max-w-md mx-auto">
//       <div className="w-72 rounded-2xl ml-5 bg-white shadow-md">
//         <div className="bg-amber-500 w-72 h-14 p-3 rounded-t-2xl text-white">
//           <p className="text-base font-semibold">All Users</p>
//           <p className="text-sm">(All new users)</p>
//         </div>

//         {displayedUsers.map((ele, index) => (
//           <div key={index} className="flex gap-4 pt-4 px-4 items-center">
//             <img
//               className="h-12 w-12 object-cover rounded-full"
//               src={
//                 ele.avatar ||
//                 "https://cdn-icons-png.flaticon.com/512/149/149071.png"
//               }
//               alt="User"
//             />
//             <div>
//               <p className="text-[#2F3038]">{ele.name}</p>
//               <p className="text-sm text-[#7D7D7D] break-all">{ele.email}</p>
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-center items-center text-sm text-blue-600 p-4">
//           <button
//             className="hover:underline"
//             onClick={() => setShowAll((prev) => !prev)}
//           >
//             {showAll ? "View Less" : "View All"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
"use client";

import { getallusers } from "@/redux/slice/user-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"; // ✅ add router

const Card = () => {
  const dispatch = useDispatch();
  const router = useRouter(); // ✅ use router

  const [allUsers, setAllUsers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const getalluser = async () => {
    const res = await dispatch(getallusers());
    if (res.payload?.data) {
      const filtered = res.payload.data.filter((user) => user.role !== "Admin");
      setAllUsers(filtered);
    }
  };

  useEffect(() => {
    getalluser();
  }, [dispatch]);

  const displayedUsers = showAll ? allUsers : allUsers.slice(0, 5);

  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <div className="w-72 rounded-2xl ml-5 bg-white shadow-md">
        <div className="bg-amber-500 w-72 h-14 p-3 rounded-t-2xl text-white">
          <p className="text-base font-semibold">All Users</p>
          <p className="text-sm">(All new users)</p>
        </div>

        {displayedUsers.map((ele, index) => (
          <div key={index} className="flex gap-4 pt-4 px-4 items-center">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src={
                ele.avatar ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="User"
            />
            <div>
              <p className="text-[#2F3038]">{ele.name}</p>
              <p className="text-sm text-[#7D7D7D] break-all">{ele.email}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center text-sm text-blue-600 p-4">
          <button
            className="hover:underline"
            onClick={() => {
              if (!showAll) {
                router.push("/all-users"); // ✅ navigate to route
              } else {
                setShowAll(false); // reset to less
              }
            }}
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
