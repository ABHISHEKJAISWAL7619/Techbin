"use client";

import { getallcourse } from "@/redux/slice/course-slice";
import { craetelesson } from "@/redux/slice/lesson-slice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Alllessons = ({ courseId, onSubmit }) => {
  const dispatch = useDispatch();
  const [error, seterror] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");

    if (!formData.course) {
      seterror("Please select a course");
      return;
    }
    if (!formData.title) {
      seterror("Please enter title");
      return;
    }
    if (!formData.content) {
      seterror("Please enter content");
      return;
    }
    if (!formData.videoUrl) {
      seterror("Please enter video url");
      return;
    }
    if (!formData.duration) {
      seterror("Please enter duration");
      return;
    }

    const res = await dispatch(craetelesson(formData));
    toast.success(res.message || "Lesson created successfully");
    setFormData({
      course: "",
      title: "",
      content: "",
      videoUrl: "",
      duration: "",
    });
    console.log(res.payload);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl text-black mx-auto p-4 bg-white shadow rounded-lg space-y-4"
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

      {/* ✅ Error message red color me dikhega */}
      {error && (
        <p className="text-red-600 text-sm font-medium -mt-2">{error}</p>
      )}

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
