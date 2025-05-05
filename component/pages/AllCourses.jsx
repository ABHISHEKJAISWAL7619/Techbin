import Link from 'next/link';

import CourseCard from "../molecules/card/CourseCard";

const AllCourses = () => {
  return (
    <div className="p-4 space-y-4  ">
      
      <div className="bg-blue-600 rounded-2xl p-4 pl-16 flex flex-col sm:flex-row justify-between items-center text-white h-32 
       ">
        <div className="flex items-center gap-20 mb-3 sm:mb-0">
          <img
            className="h-16 w-14 object-cover rounded-md"
            src="https://i.pinimg.com/736x/5d/a2/03/5da2031d7438838fb298c597d1b97cfd.jpg"
            alt="Add Course"
          />
          <div>
            <p className="font-semibold text-3xl">Add New Courses</p>
            <p className="text-2xl">Add, edit and view courses</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
         <Link  href="/all-courses/add" ><i className="ri-arrow-right-s-line ri-2x text-white"></i></Link> 
        </div>
      </div>

      {/* 2 Cards per row only */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default AllCourses;
