import React from "react";
import StepProgress from "../../../../Components/UI/StepProgress";
import { ArrowRight } from "lucide-react";

const UserSignup = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <StepProgress
        step1Icon="/images/basic.svg"
        step2Icon={"/images/verification.svg"}
        verified={false}
      />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8 text-center">
        Create New Account
      </h1>

      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl mb-2 ml-3">
            First Name
          </label>
          <input
            type="text"
            className="border border-gray-400 rounded-full h-10 sm:h-12 md:h-14 px-4 text-sm sm:text-base placeholder-gray-500"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl mb-2 ml-3">
            Last Name
          </label>
          <input
            type="text"
            className="border border-gray-400 rounded-full h-10 sm:h-12 md:h-14 px-4 text-sm sm:text-base placeholder-gray-500"
            placeholder="Enter your last name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl mb-2 ml-3">
            Email
          </label>
          <input
            type="email"
            className="border border-gray-400 rounded-full h-10 sm:h-12 md:h-14 px-4 text-sm sm:text-base placeholder-gray-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl mb-2 ml-3">
            Password
          </label>
          <input
            type="password"
            className="border border-gray-400 rounded-full h-10 sm:h-12 md:h-14 px-4 text-sm sm:text-base placeholder-gray-500"
            placeholder="Enter a password"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl mb-2 ml-3">
            Confirm Password
          </label>
          <input
            type="password"
            className="border border-gray-400 rounded-full h-10 sm:h-12 md:h-14 px-4 text-sm sm:text-base placeholder-gray-500"
            placeholder="Confirm your password"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl mb-2 ml-3">
            City
          </label>
          <select className="border border-gray-400 rounded-full h-10 sm:h-12 md:h-14 px-4 text-sm sm:text-base text-black bg-white">
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

        {/* Mobile */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl mb-2 ml-3">
            Mobile
          </label>
          <input
            type="tel"
            className="border border-gray-400 rounded-full h-10 sm:h-12 md:h-14 px-4 text-sm sm:text-base placeholder-gray-500"
            placeholder="Enter mobile number"
          />
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-end items-center gap-4 mt-6 sm:mt-8">
        <button className="bg-blue-600 text-white text-base sm:text-lg md:text-xl font-semibold w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 justify-center">
          Next <ArrowRight color="white" />
        </button>

        <span className="text-gray-600 text-sm sm:text-base font-medium text-center sm:text-left">
          ( Proceed to Step 2 )
        </span>
      </div>
    </div>
  );
};

export default UserSignup;
