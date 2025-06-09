import Link from "next/link";
import { useSelector } from "react-redux";

const Header = ({ isSidebarOpen, setIsSidebarOpen, userName, pageTitle }) => {

  return (
    <header className="sticky top-0 z-10 flex items-center h-30 justify-between bg-[#F9FAFB] px-5 py-3 md:px-8">
      <div className="flex items-center gap- sm:gap-0  ">
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

        <div className="flex text-[#202224] items-center space-x-1 sm:space-x-2 pl-5 pb-9 pt-10 ">
          <span className="font-bold text-base sm:text-xl md:text-2xl lg:text-4xl">
            Hi
          </span>
          <span className="font-bold text-base sm:text-xl md:text-2xl lg:text-4xl">
          User
          </span>
          <span className="text-base sm:text-xl md:text-2xl lg:text-4xl">
            👋
          </span>
        </div>

        <Link href="#" className="text-gray-800">
          <h1 className="text-sm font-medium text-nowrap capitalize">
            {pageTitle}
          </h1>
        </Link>
      </div>

      <div className="flex w-2/3 flex-row items-center justify-end gap-2">
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
                ></svg>
                <span className="h-10 w-10 mt-7 ">
                  {" "}
                  <i className="ri-notification-4-fill"></i>
                </span>
              </div>
            </Link>
            <div
              className="flex flex-col justify-center text-xs text-gray-400 mr-6
             "
            >
              <img
                className="  w-[55px] h-[53px] "
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
              />
            </div>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
