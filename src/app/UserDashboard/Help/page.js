import Image from "next/image";
import React from "react";
const Help = () => {
  return (
    <div className="bg-white rounded-[22px] p-5">
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {/* Full Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898]"
            placeholder="Enter Name"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898]"
            placeholder="Enter Email"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
            Issued Description
          </label>
          <input
            type="text"
            className="w-full border border-[#BBBBBB] rounded-[11px] h-28 sm:h-20 md:h-24 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898]"
            placeholder="Type here..."
          />
        </div>

        {/* Mobile No */}
        <div className="flex flex-col ">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-1">
            Upload File <span className="italic">(Optional)</span>
          </label>
          <label className="border  border-[#BBBBBB] rounded-[11px] h-28 px-4 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/upload.svg"
                width={30}
                height={30}
                alt="Upload"
                className="border rounded-full p-2 bg-[#2B44E11C]"
              />
            </div>
          </label>
        </div>
      </div>
      <div className=" w-full flex  justify-end ">
        {" "}
        <div className="flex   mt-10 gap-x-3">
          {/* Back Button */}
          <button className="bg-[#354EF3] text-white text-[20px] font-semibold px-6 py-3 rounded-[26px] h-14">
            Submit
          </button>
          <button className="bg-[white] text-[#354EF3] text-[20px] font-semibold px-6 py-3 border border-[#949494] rounded-[26px] h-14">
            Live Chat
          </button>

          {/* Submit Button */}
        </div>
      </div>
    </div>
  );
};

export default Help;
