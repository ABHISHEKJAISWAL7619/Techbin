import Input from "../atom/Input";

const AddNewCourse = () => {
  return <div>
     <div className="p-4">
      
      <div className="bg-blue-800 h-14 w-full rounded-2xl flex items-center gap-3 text-white mb-4">
        <i className="ri-arrow-left-line ml-6"></i>
        <span>Add new recorded courses</span>
      </div>

    
      <div className="bg-gray-300 rounded-lg h-32 w-40 flex justify-center items-center ml-4 mb-5">
        <i className="ri-export-fill ri-4x"></i>
      </div>

     
      <div className="space-y-4 px-4">
       
        <div className="flex flex-col md:flex-row gap-4">
         <Input type="text" placeholder="Category" />
         <Input type="text" placeholder="Course Name" />
        </div>

       
        <div className="flex flex-col md:flex-row gap-4">
        <Input type="text" placeholder="Time Period" />
        <Input type="text" placeholder="No of Lessons" />
        </div>

      
        <div className="flex flex-col md:flex-row gap-4">
        <Input type="text" placeholder="Level" />
        <Input type="text" placeholder="price" />
        </div>
      </div>

   
      <div className="bg-gray-300 h-44 border border-dotted border-gray-400 mt-5 mx-4 p-4">
        <span className="text-sm text-gray-700">Add Courses video</span>
        <div className="h-28 w-32 bg-gray-400 flex items-center justify-center mt-2">
          <i className="ri-export-fill ri-3x"></i>
        </div>
      </div>

     
      <div className="flex justify-center items-center m-4">
        <button className="bg-blue-800 h-9 w-32 text-white rounded-3xl">Add</button>
      </div>
    </div>
  </div>;
};

export default AddNewCourse;
