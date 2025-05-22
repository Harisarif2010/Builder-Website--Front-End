import { Pen } from "lucide-react";
import React from "react";

const Supplier = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Invite New Supplier
      </h3>
      <div className="bg-white rounded-[22px] p-5">
        <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company name"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Company Name
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter your city"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* Company Name (Optional) */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              City
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Confirm your password"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-black font-medium text-lg sm:text-xl md:text-[22px] mb-2 ml-1">
              Mobile No
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full border  border-[var(--primary-border)] rounded-[11px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 pr-10 text-sm sm:text-base placeholder-[#989898]"
                placeholder="Enter company email"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <Pen color="#989898" />
              </div>
            </div>
          </div>
          {/* Mobile */}

          {/* City (Input instead of Select) */}
        </div>
        <div className="flex flex-row justify-end mt-14">
          <button className="bg-[#000176] text-white text-[16px] font-bold px-3 py-3 rounded-[22px] h-12 w-38">
            Send Invite
          </button>
        </div>
      </div>
    </>
  );
};

export default Supplier;
