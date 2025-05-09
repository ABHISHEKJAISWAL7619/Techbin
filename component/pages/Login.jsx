"use client";

import axios from "axios";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setstate } from "@/redux/slice/UserSlice";

const Login = () => {
  const emailRef = useRef();
  const otpRef = useRef();
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();
  let dispatch = useDispatch();

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    const userEmail = emailRef.current.value;

    try {
      const res = await axios.post("https://tech-bin.devloperhemant.com/api/auth/login", { email: userEmail });
     
      if (res.status === 200 && res.data.message === "OTP sent.") {
        alert("OTP Sent to your email.");
        setEmail(userEmail);
        setOtpSent(true);
      } else {
        alert("Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Something went wrong.");
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const otp = otpRef.current.value;

    try {
      const res = await axios.post("https://tech-bin.devloperhemant.com/api/auth/verify-otp", { email, otp });
      console.log("Verify Response:", res.data);
      if (res.status === 200 && res.data.message === "Login successful") {
        alert("Login successful!");
        console.log(res.data.user)
        dispatch(setstate(res.data.user ));
        dispatch(setstate(res.data));
        router.push("/home-page");
      } else {
        alert("OTP verification failed.");
      }
    } catch (error) {
      alert("Something went wrong during verification.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            disabled={otpSent} 
          />
        </div>

        {otpSent && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">OTP</label>
            <input
              ref={otpRef}
              type="text"
              placeholder="Enter OTP"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {otpSent ? "Verify OTP & Login" : "Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default Login;

