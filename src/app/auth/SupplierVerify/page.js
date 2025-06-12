"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const SupplierVerify = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select");
  const options = [
    "Social Media",
    "Google Search ",
    "Email Marketing Campaing",
    "Industry Event",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>

      <div className="grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* OTP Code */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-xl sm:text-2xl mb-2 ml-2 sm:ml-3">
            OTP Code
          </label>
          <input
            type="text"
            className="border border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter OTP"
          />
        </div>

        {/* Referral Code */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-xl sm:text-2xl mb-2 ml-2 sm:ml-3">
            Referral Code{" "}
            <span className="text-[var(--grey-text)] text-lg sm:text-xl font-medium italic">
              ( Optional )
            </span>
          </label>
          <input
            type="text"
            className="border border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter referral code"
          />
        </div>

        {/* How you know about us */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-xl sm:text-2xl mb-2 ml-2 sm:ml-3">
            How you know about us?
          </label>
          <div className="relative inline-block text-left">
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center w-full h-14 px-4 py-2 border border-[var(--secondary-border)] rounded-[26px] text-sm font-medium focus:outline-none"
            >
              {selected}
              <ChevronDown size={30} className="ml-2 text-[#646464]" />
            </button>

            {open && (
              <div
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                className="absolute z-10 mt-1 w-full bg-white rounded-[22px] ring-1 ring-[#E1E1E1] ring-opacity-5 "
              >
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="px-4 py-2 text-sm text-[#676767] hover:bg-gray-100 cursor-pointer  border-b border-[#DADADA] last:border-b-0 mx-1"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 text-sm w-full sm:w-1/2 my-14">
        <label className="flex items-center text-[#090909] text-[18px] sm:text-[22px] font-medium gap-3">
          <input
            type="checkbox"
            className="w-4 h-4 text-[var(--primary-blue)] focus:ring-[#354EF3]"
          />
          I agree to the Terms & Conditions
        </label>
      </div>

      {/* Footer Buttons */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 my-16">
        {/* Back Button + Text */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button className="bg-[var(--primary-blue)] text-white text-[22px] sm:text-[26px] font-semibold px-6 py-2 rounded-[18px] flex items-center">
            <ArrowLeft size={22} className="mr-2" /> Back
          </button>
          <span className="text-[var(--grey-text)] text-base sm:text-lg font-medium mt-1 sm:mt-0">
            ( Return to Step 1 )
          </span>
        </div>

        {/* Submit Button */}
        <button className="bg-[var(--primary-blue)] text-white text-[22px] sm:text-[26px] font-semibold px-6 py-2 rounded-[18px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SupplierVerify;
