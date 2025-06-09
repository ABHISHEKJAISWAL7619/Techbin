"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallcourse } from "@/redux/slice/course-slice";
import CourseCard from "../molecules/card/CourseCard";

const AllCourses = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await dispatch(getallcourse());
    if (res.payload?.data) {
      setCourses(res.payload.data);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [dispatch]);

  return (
    <div className="p-4 space-y-4 ml-10 mr-5 bg-white">
      <div className="bg-blue-600 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row justify-between items-center text-white gap-4 sm:gap-8 lg:gap-20">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-20 w-full sm:w-auto">
          <img
            className="h-16 w-14 object-cover rounded-md"
            src="https://i.pinimg.com/736x/5d/a2/03/5da2031d7438838fb298c597d1b97cfd.jpg"
            alt="Add Course"
          />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-xl sm:text-2xl lg:text-3xl">
              Add New Courses
            </p>
            <p className="text-sm sm:text-lg lg:text-2xl">
              Add, edit and view courses
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link href="/all-courses/add">
            <i className="ri-arrow-right-s-line ri-2x mr-5 text-white"></i>
          </Link>
        </div>
      </div>

      <div className="grid mt-15 grid-cols-1 sm:grid-cols-2 gap-8">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
