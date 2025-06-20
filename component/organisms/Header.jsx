"use client";

import { getauthprofile } from "@/redux/slice/auth-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";

const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  const getProfile = async () => {
    try {
      const res = await dispatch(getauthprofile());
      if (res.payload && res.payload.user) {
        setUser(res.payload.user);
      } else {
        setUser("Guest");
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      setUser("Guest");
    }
  };

  useEffect(() => {
    getProfile();
  }, [dispatch]);
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
            {user.name}
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
          <div className="flex w-2/3 flex-row items-center justify-end gap-2">
            <Link href="/profile">
              <div className="flex flex-col justify-center text-xs text-gray-400 mr-6 cursor-pointer">
                <img
                  className="w-[55px] h-[53px]"
                  src={
                    user.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="profile"
                />
              </div>
            </Link>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
