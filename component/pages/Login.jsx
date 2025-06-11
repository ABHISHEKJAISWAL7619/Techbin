// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { loginuser } from "@/redux/slice/auth-slice";
// import Cookies from "js-cookie";
// import toast from "react-hot-toast";

// const Login = () => {
//   const [error, seterror] = useState();
//   const [formData, setFormData] = useState({
//     email: "rishav00015@gmail.com",
//     password: "123456",
//   });
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { email, password } = formData;

//     if (email && password) {
//       let res = await dispatch(loginuser(formData));
//       console.log(res.payload.message);
//       toast.success(res.payload.message);

//       router.push("/");
//     } else {
//       seterror("Please enter both email and password.");
//     }
//   };

//   // useEffect(() => {
//   //   handleLogin();
//   // });
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>
//         <p>{error}</p>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginuser } from "@/redux/slice/auth-slice";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Login = () => {
  const [error, seterror] = useState();
  const [formData, setFormData] = useState({
    email: "rishav00015@gmail.com",
    password: "123456",
  });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email && password) {
      let res = await dispatch(loginuser(formData));
      // console.log(res.payload.message);
      toast.success(res.payload.message);
      router.push("/");
    } else {
      seterror("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 md:p-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-[#0F172A]">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500">
          Login to your TechBin account
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
