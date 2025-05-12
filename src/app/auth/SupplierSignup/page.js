import React from "react";
import StepProgress from "../../../../Components/UI/StepProgress";

const SupplierSignup = () => {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>

      <StepProgress
        step1Icon="/images/basic.svg"
        step2Icon={"/images/verification.svg"}
        verified={false}
      />

      <div className="grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Full Name
          </label>
          <input
            type="text"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter your  name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Company Name
          </label>
          <input
            type="text"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter your  name"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Buisness Email
          </label>
          <input
            type="email"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter your email"
          />
        </div>

        {/* Email */}

        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Confirm Password
          </label>
          <input
            type="password"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter a password"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Password
          </label>
          <input
            type="password"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter a password"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Phone No
          </label>
          <input
            type="string"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter your no"
          />
        </div>

        {/* Password */}
      </div>
      <div className="w-full flex justify-end items-center gap-4">
        <button className="bg-[#354EF3] text-white text-[26px] font-semibold w-1/12 p-2 rounded-[18px] h-14">
          Next
        </button>
        <span className="text-[#7B7B7B] text-xl font-medium">
          ( Proceed to Step 2 )
        </span>
      </div>
    </div>
  );
};

export default SupplierSignup;
