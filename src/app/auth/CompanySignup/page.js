import Image from "next/image";
import React from "react";

const CompanySignup = () => {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>

      <div className="grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* First Name */}
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
            Email
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
            Company Phone No
          </label>
          <input
            type="string"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter your no"
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
            CR Number
          </label>
          <input
            type="password"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter cr number"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Uploard CR Document
            <span className="text-[#7B7B7B] text-xl font-medium">
              ( Optional )
            </span>
          </label>
          <label className="border border-[#8C8C8C] rounded-[26px] h-36 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />

            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/upload.svg"
                width={24}
                height={24}
                alt="Upload"
                className="border rounded-full p-2 bg-[#2B44E11C]"
              />
              <span className="text-[#6A6A6A] text-center text-base font-medium">
                Upload Files
              </span>
            </div>
          </label>
        </div>
      </div>
      <div className="w-full flex justify-end items-center gap-4">
        <button className="bg-blue-600 text-white text-base sm:text-lg md:text-xl font-semibold w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 justify-center">
          Next <ArrowRight color="white" />
        </button>
        <span className="text-[#7B7B7B] text-xl font-medium">
          ( Proceed to Step 2 )
        </span>
      </div>
    </div>
  );
};

export default CompanySignup;
