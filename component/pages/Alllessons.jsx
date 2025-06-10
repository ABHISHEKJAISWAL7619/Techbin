"use client";

import { getallcourse } from "@/redux/slice/course-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Alllessons = ({ courseId, onSubmit }) => {
  const dispatch = useDispatch();

  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    videoUrl: "",
    duration: "",
    course: courseId || "",
  });

  const fetchCourses = async () => {
    const res = await dispatch(getallcourse());
    if (res.payload?.data) {
      setCourses(res.payload.data);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-4 bg-white shadow rounded-lg space-y-4"
    >
      <h2 className="text-xl font-bold">Add New Lesson</h2>

      <div>
        <label className="block font-medium">Select Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">-- Select Course --</option>
          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-medium">Title</label>
        <input
          type="text"
          name="title"
          className="w-full p-2 border rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block font-medium">Content</label>
        <textarea
          name="content"
          className="w-full p-2 border rounded"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block font-medium">Video URL</label>
        <input
          type="url"
          name="videoUrl"
          className="w-full p-2 border rounded"
          value={formData.videoUrl}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block font-medium">Duration (minutes)</label>
        <input
          type="number"
          name="duration"
          className="w-full p-2 border rounded"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Alllessons;
