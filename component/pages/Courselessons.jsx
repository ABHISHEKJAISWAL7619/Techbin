"use client";
import { getauthprofile } from "@/redux/slice/auth-slice";
import { getlessonsbycourseId } from "@/redux/slice/lesson-slice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Courselessons = ({ courseId }) => {
  const dispatch = useDispatch();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

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

  

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Course Lessons</h2>

      {loading ? (
        <p>Loading lessons...</p>
      ) : lessons.length === 0 ? (
        <p className="text-gray-500">No lessons found for this course.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Content</th>
              <th className="border px-4 py-2">Video URL</th>
              <th className="border px-4 py-2">Duration (min)</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson) => (
              <tr key={lesson._id}>
                <td className="border px-4 py-2">{lesson.title}</td>
                <td className="border px-4 py-2">{lesson.content}</td>
                <td className="border px-4 py-2">
                  <a
                    href={lesson.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Watch Video
                  </a>
                </td>
                <td className="border px-4 py-2">{lesson.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Courselessons;
