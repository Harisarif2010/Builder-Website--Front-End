"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SupplierLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <div className="bg-[#FFFFFF]  flex flex-row h-[70vh]">
      <div className="w-1/2  relative rounded-r-[18px]  ">
        <Image
          alt="main"
          src="/images/worker.png"
          fill
          className="rounded-r-[18px]"
        />

        <div
          style={{ background: " rgba(53, 78, 243, 0.46) " }}
          className="absolute inset-0  mix-blend-multiply opacity-80 pointer-events-none rounded-r-[18px]"
        ></div>
      </div>

      <div className="w-2/3 flex flex-col ml-14 justify-start mt-10">
        <h1 className="text-5xl text-black font-bold">Log in</h1>
        <div className="mt-5">
          <label className="block text-xl font-medium mb-1 text-[#000000]">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-2/4 border border-[#9D9D9D] rounded-[26px] px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F] text-black  placeholder:text-[#828282]"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="block text-xl font-medium mb-1 text-[#000000]">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-2/4 border border-[#9D9D9D] rounded-[26px] px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-[#DFB89F] placeholder:text-[#828282] text-black"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center  gap-3 text-sm mt-2 w-2/4">
          {/* Remember Me */}
          <label className="flex items-center text-[#000000] text-[20px] font-medium">
            <input
              type="checkbox"
              className="w-4 h-4  text-[var(--primary-blue)] focus:ring-[#354EF3]"
            />
            Remember me
          </label>

          {/* Forgot Password */}
          <Link
            className=" text-[var(--primary-blue)] hover:underline font-medium"
            href="/auth/ForgotPassword"
          >
            Forgot password?
          </Link>
        </div>

        <div className="text-xl mt-6 text-[#000000] font-medium w-2/4">
          Don’t have an account?{" "}
          <Link
            href="/auth/Signup"
            className=" text-[var(--primary-blue)] font-medium hover:underline"
          >
            Register Now
          </Link>
        </div>

        <button
          type="submit"
          className="w-1/4  bg-[var(--primary-blue)] text-white py-2 font-semibold text-lg  transition-all rounded-[35px] mt-10 cursor-pointer"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SupplierLogin;
