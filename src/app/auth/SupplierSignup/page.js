"use client";
import React from "react";
import StepProgress from "../../../../Components/UI/StepProgress";
import { ArrowRight } from "lucide-react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

const SupplierSignup = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-black mb-6 sm:mb-8 text-center sm:text-left">
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
            className="border  border-[var(--secondary-border)] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
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
            className="border  border-[var(--secondary-border)] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
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
            className="border  border-[var(--secondary-border)] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter business email"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Password
          </label>
          <input
            type="password"
            className="border  border-[var(--secondary-border)] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
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
            className="border  border-[var(--secondary-border)] rounded-full h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Confirm your password"
          />
        </div>

        {/* Phone No */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Phone No
          </label>

          <PhoneInput
            country={"sa"}
            inputStyle={{
              height: "56px",
              width: "100%",
              fontSize: "16px",
              paddingLeft: "58px",
              borderTopLeftRadius: "0px", // no left radius on input
              borderBottomLeftRadius: "0px", // no left radius on input
              borderLeft: "none", // remove left border
              border: "1px solid #ccc", // keep other borders
            }}
            buttonStyle={{
              borderTopLeftRadius: "9999px",
              borderBottomLeftRadius: "9999px",
              borderRight: "none", // no border between flag and input
              backgroundColor: "#F1F3FC",
              paddingLeft: "12px",
              paddingRight: "12px",
              border: "1px solid #ccc", // border around button only
            }}
            containerStyle={{
              width: "100%",
              display: "flex",
            }}
            placeholder="Enter phone number"
          />
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-end items-center gap-4 mt-6 sm:mt-8">
        <button className=" bg-[var(--primary-blue)] text-white text-[26px] font-semibold px-3   rounded-[18px] h-15 flex items-center ">
          Next <ArrowRight size={25} className="ml-1" />
        </button>
        <span className="text-gray-500 text-sm sm:text-base font-medium text-center sm:text-left">
          (Proceed to Step 2)
        </span>
      </div>
    </div>
  );
};

export default SupplierSignup;
