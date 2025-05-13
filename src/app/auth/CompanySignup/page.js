"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const CompanySignup = () => {
  const router = useRouter();
  const navigate = () => {
    router.push("/auth/Verify");
  };
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8 text-center">
        Create New Account
      </h1>

      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Company Name
          </label>
          <input
            type="text"
            className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Email
          </label>
          <input
            type="email"
            className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company email"
          />
        </div>

        {/* Company Phone */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Company Phone No
          </label>
          <input
            type="tel"
            className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company phone"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Password
          </label>
          <input
            type="password"
            className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter a password"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Confirm Password
          </label>
          <input
            type="password"
            className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Confirm your password"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            City
          </label>
          <select className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base text-black bg-white">
            <option value="">Select City</option>
            <option value="riyadh">Riyadh</option>
            <option value="jeddah">Jeddah</option>
            <option value="mecca">Mecca</option>
            <option value="medina">Medina</option>
            <option value="dammam">Dammam</option>
            <option value="khobar">Khobar</option>
            <option value="abha">Abha</option>
            <option value="taif">Taif</option>
            <option value="al-hofuf">Al-Hofuf</option>
            <option value="jubail">Jubail</option>
            <option value="tabuk">Tabuk</option>
            <option value="hail">Hail</option>
            <option value="buraidah">Buraidah</option>
            <option value="najran">Najran</option>
            <option value="yanbu">Yanbu</option>
          </select>
        </div>

        {/* CR Number */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            CR Number
          </label>
          <input
            type="text"
            className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter CR number"
          />
        </div>

        {/* Upload CR Document */}
        <div className="flex flex-col sm:col-span-2 lg:col-span-2">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Upload CR Document
            <span className="text-gray-500 text-base sm:text-lg ml-2">
              (Optional)
            </span>
          </label>
          <label className="border border-[#8C8C8C] rounded-3xl h-24 sm:h-32 md:h-36 px-4 sm:px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />

            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/upload.svg"
                width={24}
                height={24}
                alt="Upload"
                className="border rounded-full p-2 bg-blue-100"
              />
              <span className="text-gray-600 text-center text-sm sm:text-base font-medium mt-2">
                Upload Files
              </span>
            </div>
          </label>
        </div>
        <div></div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-end items-center gap-4 mt-6 sm:mt-8">
        <button
          onClick={navigate}
          className="bg-blue-600 text-white text-base sm:text-lg font-semibold w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 justify-center"
        >
          Next <ArrowRight size={18} className="ml-1" />
        </button>
        <span className="text-gray-500 text-sm sm:text-base font-medium text-center sm:text-left">
          (Proceed to Step 2)
        </span>
      </div>
    </div>
  );
};

export default CompanySignup;
