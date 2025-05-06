// // import Card from "../molecules/card/Card";
// // import CourseChart from "../molecules/card/Chart";
// // import Chart from "../molecules/card/Chart";
// // import Table from "../molecules/Table";

// // const HomePage = () => {
// //   return (
// //     <div className=" space-y-6 ml-7 mr-10">
// //       <div className="flex flex-wrap gap-2 md:gap-4 md:p-4 p-0 justify-center bg-white w-max rounded-xl  ">
// //         <div className="bg-[#A6F7E2]   w-[195.79px] h-[140.86px] rounded-[8.57px]    sm:w-[47%] md:w-[240px] pt-3 pl-4 mr-4 ">
// //           <div className="flex gap-1 t-[17.14px] l-[17.14px] l-[17.14px]   ">
// //             <i className="ri-file-user-line ri-2x"></i>
// //             <span className="mt-3 mb-2 font-poppins text-2xl ">
// //               Total Users
// //             </span>
// //           </div>
// //           <p className="text-[15px] ml-1 text-[#202224]">Current Value</p>
// //           <h1 className="ml-1 mt-2 font-bold">203</h1>
// //         </div>

// //         <div className="bg-[#B79BFF]   w-[195.79px] h-[140.86px] rounded-[8.57px]    sm:w-[47%] md:w-[240px] pt-3 pl-4 mr-4 ">
// //           <div className="flex gap-1 t-[17.14px] l-[17.14px] l-[17.14px]   ">
// //             <i className="ri-file-user-line ri-2x"></i>
// //             <span className="mt-3 mb-2 font-poppins text-2xl ">
// //               Total Users
// //             </span>
// //           </div>
// //           <p className="text-[15px] ml-1 text-gray-500">Current Value</p>
// //           <h1 className="ml-1 mt-2 font-bold">203</h1>
// //         </div>

// //         <div className="bg-[#FFE5A5]   w-[195.79px] h-[140.86px] rounded-[8.57px]    sm:w-[47%] md:w-[240px] pt-3 pl-4 mr-4 ">
// //           <div className="flex gap-1 t-[17.14px] l-[17.14px] l-[17.14px]   ">
// //             <i className="ri-file-user-line ri-2x"></i>
// //             <span className="mt-3 mb-2 font-poppins text-2xl ">
// //               Total Users
// //             </span>
// //           </div>
// //           <p className="text-[15px] ml-1 text-[#202224]">Current Value</p>
// //           <h1 className="ml-1 mt-2 font-bold">203</h1>
// //         </div>

// //         <div className="bg-[#C7FFA5]   w-[195.79px] h-[140.86px] rounded-[8.57px]    sm:w-[47%] md:w-[240px] pt-3 pl-4 ">
// //           <div className="flex gap-1 t-[17.14px] l-[17.14px] l-[17.14px]   ">
// //             <i className="ri-file-user-line ri-2x"></i>
// //             <span className="mt-3 mb-2 font-poppins text-2xl ">
// //               Total Users
// //             </span>
// //           </div>
// //           <p className="text-[15px] ml-1 text-gray-500">Current Value</p>
// //           <h1 className="ml-1 mt-2 font-bold">203</h1>
// //         </div>
// //       </div>

// //       <div className=" bg-white">
// //         <Table />
// //       </div>
// //       <div className="flex  pl-8">
// //         <div className=" h-62 w-62 ">
// //           <div className="h-auto mt-5" >
// //             <h5 className="bg-[#843ED4] h-14 w-[376px]  font-poppins rounded- pl-6 pt-2 font-bold rounded-t-[12] " >Total No. of Courses till Purchases</h5>

// //             <CourseChart />
// //           </div>
// //         </div>
// //         <Card />
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomePage;
// import Card from "../molecules/card/Card";
// import CourseChart from "../molecules/card/Chart";
// import Table from "../molecules/Table";

// const HomePage = () => {
//   return (
//     <div className="space-y-6 ml-7 mr-10">
//       {/* Stats Section */}
//       <div className="flex flex-wrap gap-2 md:gap-4 md:p-4 p-0 justify-center bg-white w-max rounded-xl">
//         {/* Each card inside flex container */}
//         <div className="bg-[#A6F7E2] w-[195.79px] h-[140.86px] rounded-[8.57px] sm:w-[47%] md:w-[240px] pt-3 pl-4 mr-5 ml-5">
//           <div className="flex gap-1">
//             <i className="ri-file-user-line ri-2x"></i>
//             <span className="mt-3 mb-2 font-poppins text-2xl">Total Users</span>
//           </div>
//           <p className="text-[15px] ml-1 text-[#202224]">Current Value</p>
//           <h1 className="ml-1 mt-2 font-bold">203</h1>
//         </div>

//         <div className="bg-[#B79BFF] w-[195.79px] h-[140.86px] rounded-[8.57px] sm:w-[47%] md:w-[240px] pt-3 pl-4 mr-4">
//           <div className="flex gap-1">
//             <i className="ri-file-user-line ri-2x"></i>
//             <span className="mt-3 mb-2 font-poppins text-2xl">Total Users</span>
//           </div>
//           <p className="text-[15px] ml-1 font-poppins text-[#202224]">Current Value</p>
//           <h1 className="ml-1 mt-2 font-poppins">203</h1>
//         </div>

//         <div className="bg-[#FFE5A5] w-[195.79px] h-[140.86px] rounded-[8.57px] sm:w-[47%] md:w-[240px] pt-3 pl-4 mr-4">
//           <div className="flex gap-1">
//             <i className="ri-file-user-line ri-2x"></i>
//             <span className="mt-3 mb-2 font-poppins text-2xl">Total Users</span>
//           </div>
//           <p className="text-[15px] ml-1 text-[#202224]">Current Value</p>
//           <h1 className="ml-1 mt-2 font-poppins">203</h1>
//         </div>

//         <div className="bg-[#C7FFA5] w-[195.79px] h-[140.86px] rounded-[8.57px] sm:w-[47%] md:w-[240px] pt-3 pl-4">
//           <div className="flex gap-1">
//             <i className="ri-file-user-line ri-2x"></i>
//             <span className="mt-3 mb-2 font-poppins text-2xl">Total Users</span>
//           </div>
//           <p className="text-[15px] ml-1 text-[#202224]">Current Value</p>
//           <h1 className="ml-1 mt-2 font-poppins">203</h1>
//         </div>
//       </div>

    
//       <div className="bg-white">
//         <Table />
//       </div>

      
//       <div className="flex flex-col-reverse md:flex-row pl-8 gap-4">
//         <div className="h-auto md:w-1/2">
//           <h5 className="bg-[#843ED4] h-14 w-full font-poppins rounded-t-[12px] mt-5  pl-6 pt-2  text-white">
//             Total No. of Courses till Purchases
//           </h5>
//           <CourseChart />
//         </div>
//         <div className="md:w-1/2">
//           <Card />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import Card from "../molecules/card/Card";
import CourseChart from "../molecules/card/Chart";
import Table from "../molecules/Table";

// Card data and reusable component
const cardData = [
  {
    title: "Total Users",
    value: "203",
    color: "#A6F7E2",
    icon: "ri-file-user-line",
  },
  {
    title: "New Signups",
    value: "145",
    color: "#B79BFF",
    icon: "ri-user-add-line",
  },
  {
    title: "Active Users",
    value: "87",
    color: "#FFE5A5",
    icon: "ri-bar-chart-box-line",
  },
  {
    title: "Total Purchase",
    value: "321",
    color: "#C7FFA5",
    icon: "ri-book-mark-line",
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-4 gap-4 p-2  bg-white rounded-xl">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="rounded-[8.57px] p-4 text-black  "
          style={{ backgroundColor: card.color }}
        >
          <div className="flex gap-2 items-center">
            <i className={`${card.icon} ri-2x`}></i>
            <span className="font-poppins text-2xl">{card.title}</span>
          </div>
          <p className="text-[15px] mt-2 text-[#202224]">Current Value</p>
          <h1 className="mt-2 font-bold text-xl">{card.value}</h1>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="space-y-6 px-4 md:px-10">
      {/* Responsive Dashboard Cards */}
      <DashboardCards />

      {/* Table Section */}
      <div className="bg-white rounded-xl p-4 mt-[-40] ml-[-40] ">
        <Table />
      </div>

      {/* Responsive Chart + Card */}
      <div className="flex flex-col-reverse md:flex-row gap-4 mt-[-60] ">
        <div className="w-full md:w-1/2  ">
          <h5 className="bg-[#843ED4] h-14 w-full font-poppins rounded-t-[12px] mt-5 pl-6 pt-2 text-white font-semibold">
            Total No. of Courses till Purchases
          </h5>
          <CourseChart />
        </div>
        <div className="w-full md:w-1/2">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

