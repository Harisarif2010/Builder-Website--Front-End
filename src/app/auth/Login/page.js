"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // handle login logic
    console.log(formData);
  };

  return (
    <div className="bg-[#FFFFFF] flex flex-col sm:flex-row min-h-screen sm:h-[70vh]">
      {/* Image Section - Hidden on Mobile */}
      <div className="w-full sm:w-1/2 relative rounded-r-[18px] hidden sm:block">
        <Image
          alt="main"
          src="/images/Login.jpg"
          fill
          className="rounded-r-[18px] object-cover"
        />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-80 pointer-events-none rounded-r-[18px]"
          style={{ background: "rgba(53, 78, 243, 0.46)" }}
        ></div>
      </div>

      {/* Form Section */}
      <div className="w-full sm:w-2/3 flex flex-col justify-center items-center sm:items-start px-6 sm:ml-14 mt-10 sm:mt-0">
        <h1 className="text-4xl sm:text-5xl text-black font-bold mb-6">
          Log in
        </h1>

        {/* Email Field */}
        <div className="mb-5 w-full sm:w-2/4">
          <label className="block text-base sm:text-xl font-medium mb-1 text-[#000000]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#9D9D9D] rounded-[26px] px-4 py-2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F] text-black placeholder:text-[#828282]"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-5 w-full sm:w-2/4">
          <label className="block text-base sm:text-xl font-medium mb-1 text-[#000000]">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-[#9D9D9D] rounded-[26px] px-4 py-2 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F] placeholder:text-[#828282] text-black"
            placeholder="Enter your password"
          />
        </div>

        {/* Remember Me + Forgot Password */}
        <div className="flex items-center gap-3 text-sm mb-4 w-full sm:w-2/4 flex-wrap justify-between">
          <label className="flex items-center text-[#000000] text-[16px] font-medium">
            <input
              type="checkbox"
              className="w-4 h-4 mr-2 text-[var(--primary-blue)] focus:ring-[#354EF3]"
            />
            Remember me
          </label>

          <Link
            className="text-[var(--primary-blue)] hover:underline font-medium text-[16px]"
            href="/auth/ForgotPassword"
          >
            Forgot password?
          </Link>
        </div>

        {/* Register Link */}
        <div className="text-base sm:text-xl mb-6 text-[#000000] font-medium w-full sm:w-2/4">
          Don’t have an account?{" "}
          <Link
            href="/auth/Signup"
            className="text-[var(--primary-blue)] font-medium hover:underline"
          >
            Register Now
          </Link>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full sm:w-1/4 bg-[var(--primary-blue)] text-white py-2 font-semibold text-base sm:text-lg transition-all rounded-[35px] cursor-pointer"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
