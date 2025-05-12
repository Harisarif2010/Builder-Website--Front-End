import React from "react";
import StepProgress from "../../../../Components/UI/StepProgress";

const UserSignup = () => {
  return (
    <div className="p-8">
      <StepProgress
        step1Icon="/images/basic.svg"
        step2Icon={"/images/verification.svg"}
        verified={false}
      />
      <h1 className="text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>

      <div className="grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            First Name
          </label>
          <input
            type="text"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Last Name
          </label>
          <input
            type="text"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter your last name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Email
          </label>
          <input
            type="email"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter your email"
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
            Confirm Password
          </label>
          <input
            type="password"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter a password"
          />
        </div>

        {/* Gender Select */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            City
          </label>
          <select className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 text-[#000000] bg-white">
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

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Mobile
          </label>
          <input
            type="password"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter a password"
          />
        </div>
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

export default UserSignup;
