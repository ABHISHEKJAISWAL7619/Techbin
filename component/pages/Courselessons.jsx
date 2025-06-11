// "use client";
// import { getauthprofile } from "@/redux/slice/auth-slice";
// import {
//   deletelessonsbyId,
//   getlessonsbycourseId,
// } from "@/redux/slice/lesson-slice";
// import React, { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import OverlayModal from "../common/OverlayModal";

// const Courselessons = ({ courseId }) => {
//   const dispatch = useDispatch();
//   const [lessons, setLessons] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isAssessor, setIsAssessor] = useState(false);

//   const fetchlessonsbyid = async () => {
//     setLoading(true);
//     const res = await dispatch(getlessonsbycourseId(courseId));
//     if (res.payload && Array.isArray(res.payload.data)) {
//       setLessons(res.payload.data);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchlessonsbyid();
//   }, [dispatch]);

//   const handledelete = async (lessonId) => {
//     console.log(lessonId);
//     let res = await dispatch(deletelessonsbyId(lessonId));
//     toast.success(res.message || "Lesson deleted successfully");
//     fetchlessonsbyid();
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl text-black font-bold mb-4">Course Lessons</h2>

//       {loading ? (
//         <p>Loading lessons...</p>
//       ) : lessons.length === 0 ? (
//         <p className="text-gray-500">No lessons found for this course.</p>
//       ) : (
//         <table className="w-full border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border text-black px-4 py-2">Title</th>
//               <th className="border text-black px-4 py-2">Content</th>
//               <th className="border text-black px-4 py-2">Video URL</th>
//               <th className="border text-black px-4 py-2">Duration (min)</th>
//               <th className="border text-black px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-gray-500">
//             {lessons.map((lesson) => (
//               <tr key={lesson._id}>
//                 <td className="border  text-white  px-4 py-2">
//                   {lesson.title}
//                 </td>
//                 <td className="border  text-white px-4 py-2">
//                   {lesson.content}
//                 </td>
//                 <td className="border  text-white px-4 py-2">
//                   <a
//                     href={lesson.videoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 underline"
//                   >
//                     Watch Video
//                   </a>
//                 </td>
//                 <td className="border px-4 py-2">{lesson.duration}</td>
//                 <td className="border px-4 py-2">
//                   <span
//                     onClick={() => {
//                       handledelete(lesson._id), setIsAssessor(true);
//                     }}
//                     className="cursor-pointer text-red-500 hover:text-red-700"
//                   >
//                     <i className="ri-delete-bin-6-line ri-xl"></i>
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//        {isAssessor && (
//         <OverlayModal
//           content={<AddAssessor onClose={() => setIsAssessor(false)} />}
//         />
//       )}
//     </div>
//   );
// };

// export default Courselessons;
"use client";
// import { getauthprofile } from "@/redux/slice/auth-slice";
import {
  deletelessonsbyId,
  getlessonsbycourseId,
} from "@/redux/slice/lesson-slice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import OverlayModal from "../common/OverlayModal";

const Courselessons = ({ courseId }) => {
  const dispatch = useDispatch();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState(null);

  const fetchlessonsbyid = async () => {
    setLoading(true);
    const res = await dispatch(getlessonsbycourseId(courseId));
    if (res.payload && Array.isArray(res.payload.data)) {
      setLessons(res.payload.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchlessonsbyid();
  }, [dispatch]);

  const handledelete = async () => {
    if (deleteTargetId) {
      const res = await dispatch(deletelessonsbyId(deleteTargetId));
      toast.success(res.message || "Lesson deleted successfully");
      fetchlessonsbyid();
      setShowModal(false);
      setDeleteTargetId(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl text-black font-bold mb-4">Course Lessons</h2>

      {loading ? (
        <p>Loading lessons...</p>
      ) : lessons.length === 0 ? (
        <p className="text-gray-500">No lessons found for this course.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border text-black px-4 py-2">Title</th>
              <th className="border text-black px-4 py-2">Content</th>
              <th className="border text-black px-4 py-2">Video URL</th>
              <th className="border text-black px-4 py-2">Duration (min)</th>
              <th className="border text-black px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-500">
            {lessons.map((lesson) => (
              <tr key={lesson._id}>
                <td className="border text-white px-4 py-2">{lesson.title}</td>
                <td className="border text-white px-4 py-2">
                  {lesson.content}
                </td>
                <td className="border text-white px-4 py-2">
                  <a
                    href={lesson.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Watch Video
                  </a>
                </td>
                <td className="border px-4 py-2 text-white">
                  {lesson.duration}
                </td>
                <td className="border px-4 py-2">
                  <span
                    onClick={() => {
                      setDeleteTargetId(lesson._id);
                      setShowModal(true);
                    }}
                    className="cursor-pointer text-red-500 hover:text-red-700"
                  >
                    <i className="ri-delete-bin-6-line ri-xl"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* 🔴 Delete Confirmation Modal */}
      {showModal && (
        <OverlayModal
          content={
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Confirm Deletion
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this lesson? This action cannot
                be undone.
              </p>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-black"
                >
                  Cancel
                </button>
                <button
                  onClick={handledelete}
                  className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          }
        />
      )}
    </div>
  );
};

export default Courselessons;
