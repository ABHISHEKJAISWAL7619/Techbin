// "use client";

// import { useEffect, useState } from "react";
// import FileUploader from "../common/FileUploader"; // Same component as course thumbnail uploader
// import { useDispatch } from "react-redux";
// import {
//   createcategory,
//   getallcategory,
//   deletecategory,
// } from "@/redux/slice/category-slice";
// import toast from "react-hot-toast";

// const Category = () => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     name: "",
//     thumbnail: "",
//   });

//   const [error, setError] = useState("");
//   const [categories, setCategories] = useState([]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async () => {
//     if (!formData.name || !formData.thumbnail) {
//       setError("Please fill all required fields including thumbnail.");
//       return;
//     }

//     setError("");

//     const res = await dispatch(createcategory(formData));
//     console.log(res.payload);
//     toast.success("Category created successfully!");

//     setFormData({ name: "", thumbnail: "" });
//     getcategory(); // Refresh category list
//   };

//   const getcategory = async () => {
//     const res = await dispatch(getallcategory());
//     if (res.payload?.data) {
//       setCategories(res.payload.data);
//     }
//   };

//   const handleDelete = async (id) => {
//     await dispatch(deletecategory(id));
//     toast.success("Category deleted successfully!");
//     getcategory(); // Refresh after delete
//   };

//   useEffect(() => {
//     getcategory();
//   }, [dispatch]);

//   return (
//     <div className="w-full px-4 py-6">
//       <div className="max-w-2xl mx-auto space-y-5">
//         {/* Header */}
//         <div className="bg-blue-800 h-14 w-full rounded-2xl flex items-center gap-3 text-white px-6">
//           <i className="ri-arrow-left-line text-xl"></i>
//           <span className="text-base">Add New Category</span>
//         </div>

//         {/* Upload Thumbnail */}
//         <div className="space-y-2 h-44 w-44">
//           <p className="text-sm font-medium text-gray-700">Upload Image</p>
//           <FileUploader
//             onSuccess={(fileData) =>
//               setFormData((prev) => ({
//                 ...prev,
//                 thumbnail: fileData.image,
//               }))
//             }
//             onDelete={() =>
//               setFormData((prev) => ({
//                 ...prev,
//                 thumbnail: "",
//               }))
//             }
//           />
//         </div>

//         {/* Category Name */}
//         <div>
//           <input
//             type="text"
//             name="name"
//             placeholder="Category Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full bg-gray-300 px-4 py-2 rounded"
//           />
//         </div>

//         {/* Error Message */}
//         {error && <p className="text-red-500 text-center">{error}</p>}

//         {/* Submit Button */}
//         <div className="flex justify-center items-center">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-800 h-9 w-32 text-white rounded-3xl"
//           >
//             Add
//           </button>
//         </div>
//       </div>

//       {/* Category Table */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold mb-4">All Categories</h2>
//         <div className="overflow-x-auto rounded-lg shadow">
//           <table className="min-w-full divide-y divide-gray-200 bg-white">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Thumbnail
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {categories.map((cat) => (
//                 <tr key={cat._id}>
//                   <td className="px-6 py-4">
//                     <img
//                       src={cat.thumbnail}
//                       alt={cat.name}
//                       className="h-12 w-12 object-cover rounded-md"
//                     />
//                   </td>
//                   <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                     {cat.name}
//                   </td>
//                   <td className="px-6 py-4">
//                     <i
//                       className="ri-delete-bin-6-line text-red-600 text-xl cursor-pointer"
//                       onClick={() => handleDelete(cat._id)}
//                     ></i>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;
"use client";

import { useEffect, useState } from "react";
import FileUploader from "../common/FileUploader"; // Same component as course thumbnail uploader
import { useDispatch } from "react-redux";
import {
  createcategory,
  getallcategory,
  deletecategory,
} from "@/redux/slice/category-slice";
import toast from "react-hot-toast";

const Category = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    thumbnail: "",
  });

  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 3;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.thumbnail) {
      setError("Please fill all required fields including thumbnail.");
      return;
    }

    setError("");

    const res = await dispatch(createcategory(formData));
    console.log(res.payload);
    toast.success("Category created successfully!");

    setFormData({ name: "", thumbnail: "" });
    getcategory();
    setCurrentPage(1); // reset to first page after adding new category
  };

  const getcategory = async () => {
    const res = await dispatch(getallcategory());
    if (res.payload?.data) {
      setCategories(res.payload.data);
    }
  };

  const handleDelete = async (id) => {
    await dispatch(deletecategory(id));
    toast.success("Category deleted successfully!");
    getcategory();

    // Reset page if current page becomes empty after delete
    const lastPage = Math.ceil((categories.length - 1) / categoriesPerPage);
    if (currentPage > lastPage && currentPage !== 1) {
      setCurrentPage(lastPage);
    }
  };

  useEffect(() => {
    getcategory();
  }, [dispatch]);

  // Pagination calculations
  const totalPages = Math.ceil(categories.length / categoriesPerPage);
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-2xl mx-auto space-y-5">
        {/* Header */}
        <div className="bg-blue-800 h-14 w-full rounded-2xl flex items-center gap-3 text-white px-6">
          <i className="ri-arrow-left-line text-xl"></i>
          <span className="text-base">Add New Category</span>
        </div>

        {/* Upload Thumbnail */}
        <div className="space-y-2 h-44 w-44">
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

        {/* Category Name */}
        <div className="text-black">
          <input
            type="text"
            name="name"
            placeholder="Category Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-300 px-4 py-2 rounded"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-800 h-9 w-32 text-white rounded-3xl"
          >
            Add
          </button>
        </div>
      </div>

      {/* Category Table */}
      <div className="mt-10">
        <h2 className="text-xl text-black font-semibold mb-4">
          All Categories
        </h2>
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">
                  Thumbnail
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentCategories.map((cat) => (
                <tr key={cat._id}>
                  <td className="px-6 py-4">
                    <img
                      src={cat.thumbnail}
                      alt={cat.name}
                      className="h-12 w-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {cat.name}
                  </td>
                  <td className="px-6 py-4">
                    <i
                      className="ri-delete-bin-6-line text-red-600 text-xl cursor-pointer"
                      onClick={() => handleDelete(cat._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-3 mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border border-gray-400 ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          <span className="px-4 py-1 border border-gray-400 rounded font-semibold text-gray-700">
            {currentPage}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`px-3 py-1 rounded border border-gray-400 ${
              currentPage === totalPages || totalPages === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
