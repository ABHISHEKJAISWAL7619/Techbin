import Card from "../molecules/card/Card";
import Table from "../molecules/Table";

const HomePage = () => {
  return (
    <div className=" bg-white  ">
      <div className="flex flex-wrap gap-2 md:gap-4 md:p-4 p-0 justify-center bg-white ">
        <div className="bg-cyan-200 w-full sm:w-[47%] md:w-[22%] p-2 h-33 rounded-md">
          <div className="flex gap-1">
            <i className="ri-file-user-line ri-2x"></i>
            <span className="mt-3 text-2xl ">Total Users</span>
          </div>
          <p className="text-[11px] ml-1 text-gray-500">Current Value</p>
          <h1 className="ml-1">203</h1>
        </div>

        <div className="bg-indigo-300 w-full sm:w-[47%] md:w-[22%] p-2 h-33 rounded-md">
          <div className="flex gap-1">
            <i className="ri-file-user-line ri-2x"></i>
            <span className="mt-3 text-2xl ">Total Courses</span>
          </div>
          <p className="text-[11px] ml-1 text-gray-500">Current Value</p>
          <h1 className="ml-1">203</h1>
        </div>

        <div className="bg-orange-200 w-full sm:w-[47%] md:w-[22%] p-2 h-33 rounded-md">
          <div className="flex gap-1">
            <i className="ri-file-user-line ri-2x"></i>
            <span className="mt-3 text-2xl">Live Courses</span>
          </div>
          <p className="text-[11px] ml-1 text-gray-500">Current Value</p>
          <h1 className="ml-1">203</h1>
        </div>

        <div className="bg-emerald-300 w-full sm:w-[47%] md:w-[22%] p-2 h-33 rounded-md">
          <div className="flex gap-1">
            <i className="ri-file-user-line ri-2x"></i>
            <span className="mt-3 text-2xl ">Total Purchase</span>
          </div>
          <p className="text-[11px] ml-1 text-gray-500">Current Value</p>
          <h1 className="ml-1">203</h1>
        </div>
      </div>
     
<Table/>
<div className="flex  pl-8">
  <div className=" h-62 w-62 ">
<span>Total number course till purchase graph</span>
  </div>
 <Card/>

</div>




    </div>
  );
};

export default HomePage;


