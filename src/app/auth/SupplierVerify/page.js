import { ArrowLeft } from "lucide-react";
import React from "react";

const SupplierVerify = () => {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>

      <div className="grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* OTP Code */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-xl sm:text-2xl mb-2 ml-2 sm:ml-3">
            OTP Code
          </label>
          <input
            type="text"
            className="border border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter OTP"
          />
        </div>

        {/* Referral Code */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-xl sm:text-2xl mb-2 ml-2 sm:ml-3">
            Referral Code{" "}
            <span className="text-[var(--grey-text)] text-lg sm:text-xl font-medium">
              ( Optional )
            </span>
          </label>
          <input
            type="text"
            className="border border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter referral code"
          />
        </div>

        {/* How you know about us */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-xl sm:text-2xl mb-2 ml-2 sm:ml-3">
            How you know about us?
          </label>
          <select className="border border-[var(--secondary-border)] rounded-[26px] h-14 px-5 text-[#000000] bg-white">
            <option value="">Select</option>
            <option value="social">Social Media</option>
            <option value="google">Google Search</option>
            <option value="email">Email Marketing Campaign</option>
            <option value="event">Industry Event</option>
          </select>
        </div>
      </div>

      {/* Terms Checkbox */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6 text-sm w-full sm:w-1/2 my-4">
        <label className="flex items-center text-[#090909] text-[18px] sm:text-[22px] font-medium gap-3">
          <input
            type="checkbox"
            className="w-4 h-4 text-[var(--primary-blue)] focus:ring-[#354EF3]"
          />
          I agree to the Terms & Conditions
        </label>
      </div>

      {/* Footer Buttons */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 my-8">
        {/* Back Button + Text */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button className="bg-[var(--primary-blue)] text-white text-[22px] sm:text-[26px] font-semibold px-6 py-2 rounded-[18px] flex items-center">
            <ArrowLeft size={22} className="mr-2" /> Back
          </button>
          <span className="text-[var(--grey-text)] text-base sm:text-lg font-medium mt-1 sm:mt-0">
            ( Return to Step 1 )
          </span>
        </div>

        {/* Submit Button */}
        <button className="bg-[var(--primary-blue)] text-white text-[22px] sm:text-[26px] font-semibold px-6 py-2 rounded-[18px]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SupplierVerify;
