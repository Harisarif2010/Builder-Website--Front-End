import { ArrowLeft } from "lucide-react";
import React from "react";

const SupplierVerify = () => {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>
      <div className="grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            OTP Code
          </label>
          <input
            type="text"
            className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter company name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Referral Code
            <span className="text-[var(--grey-text)] text-xl font-medium">
              ( Optional )
            </span>
          </label>
          <input
            type="text"
            className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter CR number"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            How you know about us?
          </label>
          <select className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 text-[#000000] bg-white">
            <option value="">Select </option>
            <option value="social">Social Media</option>
            <option value="google">Google Search</option>
            <option value="email">Email Marketing Campaign</option>
            <option value="event">Industry Event</option>
          </select>
        </div>
      </div>
      <div className="flex items-end h-auto  gap-6 text-sm w-1/2 my-3 ">
        <label className="flex items-center text-[#090909] text-[22px] font-medium  gap-3">
          <input
            type="checkbox"
            className="w-4 h-4  text-[var(--primary-blue)] focus:ring-[#354EF3]"
          />
          I agree to the Terms & Conditions
        </label>
      </div>

      {/* Footer Buttons */}
      <div className="w-full flex justify-between items-center my-8">
        {/* Left Side: Back + Text */}
        <div className="flex items-center gap-3">
          <button className=" bg-[var(--primary-blue)] text-white text-[26px] font-semibold px-6  rounded-[18px] h-10 flex items-center ">
            <ArrowLeft size={25} className="ml-1" /> Back
          </button>
          <span className="text-[var(--grey-text)] text-lg font-medium">
            ( Return to Step 1 )
          </span>
        </div>

        {/* Right Side: Submit */}
        <button className=" bg-[var(--primary-blue)] text-white text-[26px] font-semibold px-3 rounded-[18px] h-10   ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SupplierVerify;
