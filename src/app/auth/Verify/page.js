import React from "react";
import StepProgress from "../../../../Components/UI/StepProgress";

const Verify = () => {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>
      <StepProgress
        step1Icon="/images/basic.svg"
        step2Icon={"/images/filledverify.svg"}
        verified={true}
      />{" "}
      <div className="flex flex-col my-3 ml-6">
        <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
          OTP Code
          <span className="text-[#7B7B7B] text-xl font-medium">
            ( Sent via email/ SMS for verification )
          </span>
        </label>

        <input
          type="email"
          className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8] w-1/2"
        />
      </div>
      {/* Email */}
      <div className="flex flex-col  my-3 ml-6">
        <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
          Referral Code
          <span className="text-[#7B7B7B] text-xl font-medium">
            ( Optional )
          </span>
        </label>
        <input
          type="string"
          className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8] w-1/2"
        />
      </div>
      <div className="flex items-center  gap-6 text-sm  w-1/3 my-3 ">
        {/* Remember Me */}
        <label className="flex items-center text-[#090909] text-[22px] font-medium  ml-10 gap-3">
          <input
            type="checkbox"
            className="w-4 h-4  text-[var(--primary-blue)] focus:ring-[#354EF3]"
          />
          I agree to the Terms & Conditions
        </label>

        {/* Forgot Password */}
      </div>
      <div className="w-full flex justify-around items-center my-8">
        {/* Left Side: Back + Text */}
        <div className="flex items-center gap-3">
          <button className=" bg-[var(--primary-blue)] text-white text-[20px] font-semibold px-6 py-3 rounded-[18px] h-14">
            Back
          </button>
          <span className="text-[#7B7B7B] text-lg font-medium">
            ( Proceed to Step 1 )
          </span>
        </div>

        {/* Right Side: Submit */}
        <button className=" bg-[var(--primary-blue)] text-white text-[20px] font-semibold px-6 py-3 rounded-[18px] h-14 w-1/12">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Verify;
