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
    title: "Total Courses",
    value: "145",
    color: "#B79BFF",
    icon: "ri-user-add-line",
  },
  {
    title: "Live Courses",
    value: "87",
    color: "#FFE5A5",
    icon: "ri-bar-chart-box-line",
  },
  {
    title: "Total Purchase",
    value: "321",
    color: "#C7FFA5",
    icon: "ri-user-add-line",
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
          <p className="text-[15px] mt-2 text-[#838383]">Current Value</p>
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

