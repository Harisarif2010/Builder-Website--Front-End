import { Pen } from "lucide-react";
import Image from "next/image";
import React from "react";

const Permisson = () => {
  const dummyData = {
    EmployeeName: "John Doe",
    Email: "john.doe@example.com",
    City: "Karachi",
    MobileNo: "+92 300 1234567",
    Role: "Manager",
    companyName: "ABC Pvt Ltd",
  };
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">Profile</h3>{" "}
      <div className="bg-white rounded-[22px] p-5">
        <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-[13px] sm:text-xl md:text-[13px] mb-2 ml-1">
              Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company name"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* Position */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-[13px] sm:text-xl md:text-[13px] mb-2 ml-1">
              Email
            </label>
            <div className="relative w-full">
              <input
                type="email"
                className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company email"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* Company Name (Optional) */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              City
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Confirm your password"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-xs sm:text-xl md:text-[13px] mb-2 ml-1">
              Mobile No
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company email"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-[13px] sm:text-xl md:text-[13px] mb-2 ml-1">
              Role
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Confirm your password"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* City (Input instead of Select) */}
          <div className="flex flex-col">
            <label className="text-black font-bold text-[13px] sm:text-xl md:text-[13px] mb-2 ml-1">
              Company Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter your city"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end my-10 ">
          <button className=" bg-[var(--primary-blue)] text-white text-[24px] font-semibold px-4 py-3 rounded-[26px] h-14 w-27">
            Send
          </button>
        </div>
      </div>
      <div className="bg-white rounded-[22px] p-5 mt-3">
        {/* Profile Info Grid */}
        <div className="grid gap-y-5 sm:gap-y-6 grid-cols-2 sm:grid-cols-1">
          {Object.entries(dummyData).map(([label, value]) => (
            <div
              key={label}
              className="flex justify-between items-center text-lg md:text-2xl  pb-2"
            >
              <span className="text-black font-bold capitalize md:text-2xl text-lg">
                {label.replace(/([A-Z])/g, " $1")}
              </span>
              <span className="text-[#000000] sm:text-base text-2xl text-right">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Send Button */}
        <div className="flex justify-end mt-10">
          <button className=" bg-[var(--primary-blue)] text-white text-[24px] font-semibold px-4 py-3 rounded-[26px] h-14 w-28">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Permisson;
