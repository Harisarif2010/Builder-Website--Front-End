import React from "react";

const Product = () => {
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
            className="border border-[#8C8C8C] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
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
            className="border border-[#8C8C8C] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company email"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Unit
          </label>
          <select className="border border-[#8C8C8C] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base text-black bg-white ">
            <option value="" className="text-[#A8A8A8]">
              Select Unit
            </option>

            <option value="ton">Ton</option>
            <option value="pounds">Pounds</option>
          </select>
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Required Diameter
          </label>
          <div className="flex flsex-row">
            {" "}
            <input
              type="email"
              className="border border-[#8C8C8C] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
              placeholder="Quantity (ton)"
            />
            <select className="border border-[#8C8C8C] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base text-black bg-white ">
              <option value="" className="text-[#A8A8A8]">
                MM
              </option>

              <option value="ton">Ton</option>
              <option value="pounds">Pounds</option>
            </select>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Factory
          </label>
          <input
            type="password"
            className="border border-[#8C8C8C] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="factory"
          />
        </div>

        {/* CR Number */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Other details of the order
          </label>
          <textarea
            type="text"
            className="border border-[#8C8C8C] rounded-[31px] h-10 sm:h-12 md:h-28 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter CR number"
          />
        </div>
      </div>
      <div className="w-full flex justify-start items-center my-8">
        <div className="flex flex-row gap-x-2">
          <button className="bg-white text-[#354EF3] text-[22px] font-semibold px-6 py-3 border border-[#354EF3] rounded-[26px] h-14 ">
            Add Item
          </button>
          <button className="bg-[#354EF3] text-white text-[22px] font-semibold px-6 py-3 rounded-[26px] h-14 ">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
