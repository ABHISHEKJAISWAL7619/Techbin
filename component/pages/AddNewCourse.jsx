// "use client";

// import { useEffect, useState } from "react";
// import Input from "../atom/Input";
// import { useDispatch } from "react-redux";
// import { getallcategory } from "@/redux/slice/category-slice";

// const AddNewCourse = () => {
//   const dispatch = useDispatch();
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     categoryId: "",
//     courseName: "",
//     timePeriod: "",
//     noOfLessons: "",
//     level: "",
//     price: "",
//   });

//   const getcategory = async () => {
//     const res = await dispatch(getallcategory());
//     console.log("Fetched Categories:", res.payload);
//     setCategories(res.payload.data || []);
//   };

//   useEffect(() => {
//     getcategory();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     console.log("Final Form Data:", formData);
//   };

//   return (
//     <div className="w-full px-4 py-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="bg-blue-800 h-14 w-full rounded-2xl flex items-center gap-3 text-white mb-4 px-6">
//           <i className="ri-arrow-left-line text-xl"></i>
//           <span className="text-base">Add new recorded courses</span>
//         </div>

//         {/* Thumbnail */}
//         <div className="flex justify-between">
//           <div className="bg-gray-300 rounded-lg h-32 w-40 flex justify-center items-center mb-5">
//             <i className="ri-export-fill ri-4x"></i>
//           </div>
//         </div>

//         {/* Input Fields */}
//         <div className="space-y-4">
//           <div className="flex flex-col md:flex-row gap-4">
//             <Input
//               type="text"
//               placeholder="Course Name"
//               name="courseName"
//               value={formData.courseName}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               placeholder="Time Period"
//               name="timePeriod"
//               value={formData.timePeriod}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <Input
//               type="text"
//               placeholder="No of Lessons"
//               name="noOfLessons"
//               value={formData.noOfLessons}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               placeholder="Level"
//               name="level"
//               value={formData.level}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <Input
//               type="text"
//               placeholder="Price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//             />
//             <select
//               name="categoryId"
//               value={formData.categoryId}
//               onChange={handleChange}
//               className="border bg-gray-300 px-4 py-2 rounded-md w-full"
//             >
//               <option value="">Select Category</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat._id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="flex justify-center items-center mt-6">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-800 h-9 w-32 text-white rounded-3xl"
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNewCourse;
// "use client";

// import { useEffect, useState } from "react";
// import Input from "../atom/Input";
// import { useDispatch } from "react-redux";
// import { getallcategory } from "@/redux/slice/category-slice";

// const AddNewCourse = () => {
//   const dispatch = useDispatch();
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     categoryId: "",
//     courseName: "",
//     timePeriod: "",
//     noOfLessons: "",
//     level: "",
//     price: "",
//     videoUrl: "",
//   });

//   const getcategory = async () => {
//     const res = await dispatch(getallcategory());
//     console.log("Fetched Categories:", res.payload);
//     setCategories(res.payload.data || []);
//   };

//   useEffect(() => {
//     getcategory();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     console.log("Final Form Data:", formData);
//   };

//   return (
//     <div className="w-full px-4 py-6">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="bg-blue-800 h-14 w-full rounded-2xl flex items-center gap-3 text-white mb-4 px-6">
//           <i className="ri-arrow-left-line text-xl"></i>
//           <span className="text-base">Add new recorded courses</span>
//         </div>

//         {/* Thumbnail */}
//         <div className="flex justify-between">
//           <div className="bg-gray-300 rounded-lg h-32 w-40 flex justify-center items-center mb-5">
//             <i className="ri-export-fill ri-4x"></i>
//           </div>
//         </div>

//         {/* Input Fields */}
//         <div className="space-y-4">
//           <div className="flex flex-col md:flex-row gap-4">
//             <Input
//               type="text"
//               placeholder="Course Name"
//               name="courseName"
//               value={formData.courseName}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               placeholder="Time Period"
//               name="timePeriod"
//               value={formData.timePeriod}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <Input
//               type="text"
//               placeholder="No of Lessons"
//               name="noOfLessons"
//               value={formData.noOfLessons}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               placeholder="Level"
//               name="level"
//               value={formData.level}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <Input
//               type="text"
//               placeholder="Price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//             />
//             <Input
//               type="text"
//               placeholder="Video URL"
//               name="videoUrl"
//               value={formData.videoUrl}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="w-full">
//             <select
//               name="categoryId"
//               value={formData.categoryId}
//               onChange={handleChange}
//               className="border bg-gray-300 px-4 py-2 rounded-md w-full"
//             >
//               <option value="">Select Category</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat._id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="flex justify-center items-center mt-6">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-800 h-9 w-32 text-white rounded-3xl"
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNewCourse;
"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getallcategory } from "@/redux/slice/category-slice";
import FileUploader from "../common/FileUploader";
import toast from "react-hot-toast";
import { craeteCourse } from "@/redux/slice/course-slice";

const AddNewCourse = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    price: "",
    totalHours: "",
    level: "",
    access: "",
    thumbnail: "",
  });

  const getcategory = async () => {
    const res = await dispatch(getallcategory());
    setCategories(res.payload.data || []);
  };

  useEffect(() => {
    getcategory();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.thumbnail ||
      !formData.category ||
      !formData.type ||
      !formData.access
    ) {
      setError(
        "Please fill all required fields including thumbnail, type, and access."
      );
      return;
    }
    setError("");
    // console.log("Final Form Data:", formData);
    let res = await dispatch(craeteCourse(formData));
    console.log(res.payload);
    toast.success("Course created successfully!");
    setFormData({
      title: "",
      description: "",
      category: "",
      type: "",
      price: "",
      totalHours: "",
      level: "",
      access: "",
      thumbnail: "",
    });
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-blue-800 h-14 w-full rounded-2xl flex items-center gap-3 text-white mb-4 px-6">
          <i className="ri-arrow-left-line text-xl"></i>
          <span className="text-base">Add new recorded courses</span>
        </div>

        {/* Thumbnail */}
        <div className="flex justify-between mb-6">
          <div className="lg:w-[38%] space-y-2">
            <p className="text-sm font-medium text-gray-700">Upload Image</p>
            <FileUploader
              onSuccess={(fileData) =>
                setFormData((prev) => ({
                  ...prev,
                  thumbnail: fileData.image,
                }))
              }
              onDelete={() =>
                setFormData((prev) => ({
                  ...prev,
                  thumbnail: "",
                }))
              }
            />
          </div>
        </div>

        {/* Title and Price in one row */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Course Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="flex-1 bg-gray-300 px-4 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="flex-1 bg-gray-300 px-4 py-2 rounded"
          />
        </div>

        {/* Description textarea */}
        <textarea
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded p-2 w-full h-24 mt-4 bg-gray-300 px-4 py-2"
        />

        {/* Category select with label */}
        <label
          className="block text-gray-700 font-medium mt-4 mb-1"
          htmlFor="categoryId"
        >
          Select Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border bg-gray-300 px-4 py-2 rounded w-full"
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* Type and Access selects side by side */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex flex-col flex-1">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="type"
            >
              Select Course type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full bg-gray-300"
            >
              <option value="" disabled>
                Select Course type
              </option>
              <option value="live">Live</option>
              <option value="recorded">Recorded</option>
            </select>
          </div>

          <div className="flex flex-col flex-1">
            <label
              className="block text-gray-700 font-medium mb-1"
              htmlFor="access"
            >
              Select Course Access
            </label>
            <select
              id="access"
              name="access"
              value={formData.access}
              onChange={handleChange}
              className="border rounded px-4 py-2 w-full bg-gray-300"
            >
              <option value="" disabled>
                Select Course Access
              </option>
              <option value="lifetime">Lifetime</option>
              <option value="limited">Limited</option>
            </select>
          </div>
        </div>

        {/* TotalHours and Level */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <input
            type="number"
            placeholder="Total Hours"
            name="totalHours"
            value={formData.totalHours}
            onChange={handleChange}
            className="flex-1 bg-gray-300 px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="flex-1 bg-gray-300 px-4 py-2 rounded"
          />
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <div className="flex justify-center items-center mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-800 h-9 w-32 text-white rounded-3xl"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewCourse;
