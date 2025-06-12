"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select contact method");
  const options = ["Email", "Phone", "Whatasapp"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Full Name
          </label>
          <input
            type="text"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#6D6D6D]"
            placeholder="Enter company name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Position
          </label>
          <input
            type="email"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#6D6D6D]"
            placeholder="Enter company email"
          />
        </div>

        {/* Company Phone */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Company Name{" "}
            <span className="text-[var(--grey-text)] text-xl font-medium italic">
              (Optional)
            </span>
          </label>
          <input
            type="tel"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#6D6D6D]"
            placeholder="Enter company phone"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Email Address
          </label>
          <input
            type="email"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#6D6D6D]"
            placeholder="Enter company email"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Mobile
          </label>
          <input
            type="password"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#6D6D6D]"
            placeholder="Confirm your password"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            City
          </label>
          <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center w-full h-14 px-4 py-2 border border-[var(--secondary-border)] rounded-[26px] text-sm font-medium focus:outline-none"
            >
              {selected}
              <ChevronDown size={30} className="ml-2 text-[#646464]" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div
                style={{ boxShadow: " 0px 4px 4px 0px #00000040" }}
                className="absolute z-10 mt-1 w-full bg-white rounded-[22px] ring-1 ring-[#E1E1E1] ring-opacity-5"
              >
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-2 text-sm text-[#676767] hover:bg-gray-100 cursor-pointer order-b border-[#DADADA] last:border-b-0 mx-1"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CR Number */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Additional Comments
          </label>
          <textarea
            type="text"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-28 px-4 sm:px-5 text-sm sm:text-base placeholder-[#6D6D6D]"
            placeholder="Type Here"
          />
        </div>
      </div>
      <div className="w-full flex justify-end items-center my-8">
        <button className=" bg-[var(--primary-blue)] text-white text-[26px] font-semibold px-5 py-2 rounded-[22px] h-25">
          Submit Request
        </button>
      </div>
    </div>
  );
};

export default Contact;
