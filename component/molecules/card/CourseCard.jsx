"use client";

import Link from "next/link";

// import { Link } from "lucide-react";

const CourseCard = ({ course }) => {
  console.log(course._id);

  return (
    <div className="flex flex-col sm:flex-row gap-4 rounded-xl border border-gray-300 w-full max-w-md mx-auto">
      {/* Image Section */}
      <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
        <Link href={`/all-courses/lessons/${course._id}`}>
          <img
            className="h-44 w-44 max-w-[160px] object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
            src={course.thumbnail}
            alt={course.title}
          />
        </Link>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between p-4 w-full">
        <div>
          <div className="flex justify-between items-center">
            <span className="text-yellow-400 font-poppins">
              {course.category?.name}
            </span>
            <Link href={`/all-courses/add/${course._id}`}>
              <i className=" w-18 ri-pencil-line"></i>
            </Link>
          </div>
          <h1 className="font-bold text-2xl mt-1">{course.title}</h1>
          <p className="text-sm text-[#202224] mt-3">
            <i className="ri-star-fill text-yellow-400"></i> {course.rating} |{" "}
            {course.totalHours} Hrs
          </p>
        </div>
        <div className="mt-2">
          <del className="text-[#202224]">{course.price * 2.1}</del>
          <span className="text-green-500 font-poppins">₹{course.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
