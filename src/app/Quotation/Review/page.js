import { Pen } from "lucide-react";
import React from "react";

const Review = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-[#000000] mb-8 text-center">
        Review Application
      </h1>
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Full Name
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter company name"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        {/* Position */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Position
          </label>
          <div className="relative w-full">
            <input
              type="email"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter company email"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        {/* Company Name (Optional) */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Mobile
          </label>
          <div className="relative w-full">
            <input
              type="password"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Confirm your password"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        {/* Email Address */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Email Address
          </label>
          <div className="relative w-full">
            <input
              type="email"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter company email"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Product Name Required
          </label>
          <div className="relative w-full">
            <input
              type="password"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Confirm your password"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        {/* City (Input instead of Select) */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Quantity
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter your city"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Factory
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter your city"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        {/* Additional Comments */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Unit
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter your city"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Project Status
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter your city"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Project Location
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter your city"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            City
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Enter your city"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Pen color="#585858" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center my-8">
        {/* Left Side: Back + Text */}

        {/* Right Side: Submit */}
        <button className=" bg-[var(--primary-blue)] text-white text-[20px] font-semibold px-6 py-3 rounded-[18px] h-14 ">
          Submit Request
        </button>
      </div>
    </div>
  );
};

export default Review;
