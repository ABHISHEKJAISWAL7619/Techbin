// import Link from "next/link";

// const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
//   return (
//     <header className="sticky top-0 z-10 flex items-center h-30 justify-between bg-white px-5 py-3 shadow-sm md:px-8">
//       <div className="flex items-center gap- sm:gap-0">
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="outline-none md:hidden"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//         <Link href="#" className="text-gray-800">
//           <h1 className="text-sm font-medium text-nowrap capitalize">
//             {pageTitle}
//           </h1>
//         </Link>
//       </div>

//       <div className="flex w-2/3 flex-row items-center justify-end gap-2">
//       <div>
      
//       </div>
//         {
//           <div className="flex flex-row gap-3">
           
//             <Link href="/profile">
//               <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-500">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   strokeWidth="0"
//                   viewBox="0 0 448 512"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128l0 64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9l0-64c0-16.8-12.9-30.5-29.3-31.9zM336 144l0 16c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-16c0-26.5 21.5-48 48-48l128 0c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512l98.3 0 0-64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64 98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16l0 48 32 0 0-48c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"></path>
//                 </svg>
//               </div>
//             </Link>
//             <div className="flex flex-col justify-center text-xs text-gray-400">
//               <p className="text-base font-bold text-black">Admin</p>
//               <p className="text-medium">Super Admin</p>
//             </div>
//           </div>
//         }
//       </div>
//     </header>
//   );
// };

// export default Header;
import Link from "next/link";

const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center h-30 justify-between bg-white px-5 py-3 shadow-sm md:px-8">
      <div className="flex items-center gap- sm:gap-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

       
        <div className="flex items-center space-x-1 sm:space-x-2">
  <span className="font-bold text-base sm:text-xl md:text-2xl lg:text-4xl">Hi</span>
  <span className="font-bold text-base sm:text-xl md:text-2xl lg:text-4xl">Vedant</span>
  <span className="text-base sm:text-xl md:text-2xl lg:text-4xl">👋</span>
</div>




        <Link href="#" className="text-gray-800">
          <h1 className="text-sm font-medium text-nowrap capitalize">
            {pageTitle}
          </h1>
        </Link>
      </div>

      <div className="flex w-2/3 flex-row items-center justify-end gap-2">
        <div></div>
        {
          <div className="flex flex-row gap-3">
            <Link href="/profile">
              <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128l0 64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9l0-64c0-16.8-12.9-30.5-29.3-31.9zM336 144l0 16c0 53-43 96-96 96l-32 0c-53 0-96-43-96-96l0-16c0-26.5 21.5-48 48-48l128 0c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512l98.3 0 0-64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 64 98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16l0 48 32 0 0-48c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"></path>
                </svg>
              </div>
            </Link>
            <div className="flex flex-col justify-center text-xs text-gray-400">
              <p className="text-base font-bold text-black">Admin</p>
              <p className="text-medium">Super Admin</p>
            </div>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
