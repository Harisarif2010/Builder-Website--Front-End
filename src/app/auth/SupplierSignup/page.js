import React from "react";
import StepProgress from "../../../../Components/UI/StepProgress";
import { ArrowRight } from "lucide-react";

const SupplierSignup = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 sm:mb-8 text-center">
        Create New Account
      </h1>

      <StepProgress
        step1Icon="/images/basic.svg"
        step2Icon={"/images/verification.svg"}
        verified={false}
      />

      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Full Name
          </label>
          <input
            type="text"
            className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter your full name"
          />
        </div>

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

        {/* Business Email */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Business Email
          </label>
          <input
            type="email"
            className="border border-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter business email"
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

        {/* Phone No */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Phone No
          </label>
          <input
            type="tel"
            className="borderborder-[#8C8C8C] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-end items-center gap-4 mt-6 sm:mt-8">
        <button className="bg-blue-600 text-white text-base sm:text-lg font-semibold w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 justify-center">
          Next <ArrowRight size={18} className="ml-1" />
        </button>
        <span className="text-gray-500 text-sm sm:text-base font-medium text-center sm:text-left">
          (Proceed to Step 2)
        </span>
      </div>
    </div>
  );
};

export default SupplierSignup;
