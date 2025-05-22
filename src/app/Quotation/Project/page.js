import React from "react";

const Project = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Full Name
          </label>
          <input
            type="text"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Position
          </label>
          <input
            type="email"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company email"
          />
        </div>

        {/* Company Phone */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Company Name{" "}
            <span className="text-[#7B7B7B] text-xl font-medium italic">
              (Optional)
            </span>
          </label>
          <input
            type="tel"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company phone"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Email Address
          </label>
          <input
            type="email"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter company email"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Mobile
          </label>
          <input
            type="password"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Confirm your password"
          />
        </div>

        {/* City */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            City
          </label>
          <select className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base text-black bg-white ">
            <option value="" className="text-[#A8A8A8]">
              Select Contact Method
            </option>

            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>

        {/* CR Number */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-3">
            Additional Comments
          </label>
          <textarea
            type="text"
            className="border  border-[var(--secondary-border)] rounded-[31px] h-10 sm:h-12 md:h-28 px-4 sm:px-5 text-sm sm:text-base placeholder-[#A8A8A8]"
            placeholder="Enter CR number"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
