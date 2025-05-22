import Image from "next/image";
import React from "react";

const Track = () => {
  return (
    <div>
      {" "}
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Supply Schedule
      </h3>
      <div className="bg-white rounded-[22px] p-3">
        <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
              Supplier
            </label>
            <select className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898] ">
              <option value="" className="text-[#989898]">
                Select
              </option>

              <option value="ton">Ton</option>
              <option value="pounds">Pounds</option>
            </select>
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Date
            </label>
            <input
              type="Date"
              className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Select Date"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
              Location
            </label>
            <select className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898]">
              <option value="">Select Location</option>
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

          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Quantity
            </label>
            <input
              type="text"
              className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898]"
              placeholder="Enter Quantity"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
              Unit
            </label>
            <select className="w-full border border-[#BBBBBB] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#989898] ">
              <option value="" className="text-[#989898]">
                Select Unit
              </option>

              <option value="ton">Ton</option>
              <option value="pounds">Pounds</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center mt-10 sm:justify-end">
          <button className=" bg-[var(--primary-blue)] text-white text-[24px] font-semibold px-4 py-3 rounded-[26px] h-14 w-28">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Track;
