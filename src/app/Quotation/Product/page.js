"use client";
import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Units");
  const options = ["Ton", "Phone", "Whatasapp"];

  const [unitOpen, setUnitOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState("Select Unit");
  const unitOptions = ["MM", "CM", "Other"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };
  const handleunitSelect = (option) => {
    setSelectedUnit(option);
    setUnitOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Product Name Required
          </label>
          <input
            type="text"
            className="border  border-[var(--border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Quantity
          </label>
          <input
            type="email"
            className="border  border-[var(--border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Unit
          </label>
          <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex justify-between items-center w-full h-14 px-4 py-2 border border-[var(--border)] rounded-[26px] text-sm font-medium focus:outline-none"
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

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Required Diameter
          </label>
          <div className="flex flex-row">
            {" "}
            <input
              type="text"
              className="border  border-[var(--border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Quantity (ton)"
            />
            <div className="relative inline-block text-left">
              <button
                onClick={() => setUnitOpen(!unitOpen)}
                className="flex justify-between items-center w-full h-14 px-4 py-2 border border-[var(--border)] rounded-[26px] text-sm font-medium focus:outline-none"
              >
                {selectedUnit}
                <ChevronDown size={30} className="ml-2 text-[#646464]" />
              </button>

              {unitOpen && (
                <div
                  style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                  className="absolute z-10 mt-1 w-full bg-white rounded-[22px] ring-1 ring-[#E1E1E1] ring-opacity-5"
                >
                  {unitOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleunitSelect(option)}
                      className="px-4 py-2 text-sm text-[#676767] hover:bg-gray-100 cursor-pointer order-b border-[#DADADA] last:border-b-0 mx-1"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Factory
          </label>
          <input
            type="password"
            className="border  border-[var(--border)] rounded-[31px] h-10 sm:h-12 md:h-15 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder=" Ener factory Name"
          />
        </div>

        {/* CR Number */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Other details of the order
          </label>
          <textarea
            type="text"
            className="border  border-[var(--border)] rounded-[31px] h-10 sm:h-12 md:h-28 px-4 py-2 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Tyoe here..."
          />
        </div>
      </div>
      <div className="w-full flex justify-start items-center my-8">
        <div className="flex flex-row gap-x-2">
          <button className="bg-white  text-[var(--primary-blue)] text-[22px] font-medium px-8 py-2 border border-[#354EF3] rounded-[26px] h-16 ">
            Add Item
          </button>
          <button className="bg-[var(--primary-blue)] text-white text-[22px] font-medium px-6 py-2 rounded-[26px] h-16 flex items-center gap-x-2">
            Next Step
            <ArrowRight color="white" size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
