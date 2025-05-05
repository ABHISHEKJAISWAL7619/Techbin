import CourseCard from "../molecules/card/CourseCard";

const AllCourses = () => {

  return <div className="p-1" >
    <div className="h-22 w-full bg-blue-600 rounded-4xl pt-4 pl-10  pr-5 pb-5 flex justify-between " >
       <div className="flex gap-10 text-white " >
       <img className="h-16 w-14 "  src="https://i.pinimg.com/736x/5d/a2/03/5da2031d7438838fb298c597d1b97cfd.jpg" alt="" />
        <div>
            <p>Add New Courses</p>
            <p>Add,edit and view courses</p>
        </div>
       </div>
       <div className="flex justify-center items-center  " >
       <i className="ri-arrow-right-s-line ri-2x text-white"></i>
       </div>
       

    </div>
    <div className="flex " >
    <div>
   <CourseCard/> <CourseCard/>
   </div> <div>
   <CourseCard/> <CourseCard/>
   </div>
    </div>






  </div>;
};

export default AllCourses;
