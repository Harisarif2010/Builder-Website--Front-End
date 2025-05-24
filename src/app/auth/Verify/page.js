import React from "react";
import StepProgress from "../../../../Components/UI/StepProgress";

const Verify = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>

      <StepProgress
        step1Icon="/images/basic.svg"
        step2Icon="/images/filledverify.svg"
        verified={true}
      />

      {/* OTP Code */}
      <div className="flex flex-col my-3 ml-0 sm:ml-6 w-full sm:w-1/2">
        <label className="text-[#000000] font-medium text-xl sm:text-2xl mb-2 ml-0 sm:ml-3">
          OTP Code{" "}
          <span className="text-[var(--grey-text)] text-lg sm:text-xl font-medium">
            ( Sent via email/ SMS for verification )
          </span>
        </label>
        <input
          type="email"
          className="border border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8] w-full"
        />
      </div>

      {/* Referral Code */}
      <div className="flex flex-col my-3 ml-0 sm:ml-6 w-full sm:w-1/2">
        <label className="text-[#000000] font-medium text-xl sm:text-2xl mb-2 ml-0 sm:ml-3">
          Referral Code{" "}
          <span className="text-[var(--grey-text)] text-lg sm:text-xl font-medium">
            ( Optional )
          </span>
        </label>
        <input
          type="text"
          className="border border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8] w-full"
        />
      </div>

      {/* Terms Checkbox */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm w-full sm:w-2/3 my-3 ml-0 sm:ml-6">
        <label className="flex items-center text-[#090909] text-[18px] sm:text-[22px] font-medium gap-3">
          <input
            type="checkbox"
            className="w-4 h-4 text-[var(--primary-blue)] focus:ring-[#354EF3]"
          />
          I agree to the Terms & Conditions
        </label>
      </div>

      {/* Footer Buttons */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center my-8 gap-4 sm:gap-0">
        {/* Back Button + Text */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button className="bg-[var(--primary-blue)] text-white text-[20px] font-semibold px-6 py-3 rounded-[18px] h-14 w-full sm:w-auto">
            Back
          </button>
          <span className="text-[var(--grey-text)] text-lg font-medium">
            ( Proceed to Step 1 )
          </span>
        </div>

        {/* Submit Button */}
        <button className="bg-[var(--primary-blue)] text-white text-[20px] font-semibold px-6 py-3 rounded-[18px] h-14 w-full sm:w-1/12">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verify;
