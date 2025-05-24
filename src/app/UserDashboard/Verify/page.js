import { poppins } from "@/app/fonts";
import React from "react";

const Verify = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-lg md:text-2xl font-bold px-3 py-1">
        Profile
      </h3>{" "}
      <div className={`${poppins.variable}bg-white rounded-[22px] p-5`}>
        <div className="flex flex-col my-3 ml-6">
          <label className="text-[#000000] font-medium text-lg md:text-2xl mb-2 ml-3 ">
            OTP Code
            <span className="text-[var(--grey-text)]  text-base md:text-xl font-medium italic mx-2">
              ( Sent via email/ SMS for verification )
            </span>
          </label>

          <input
            type="email"
            className="border  border-[#646464] rounded-[26px] h-14 px-5 placeholder-[#929292] w-1/2"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col  my-3 ml-6">
          <label className="text-[#000000] font-medium text-lg md:text-2xl mb-2 ml-3 ">
            Referral Code
            <span className="text-[var(--grey-text)] text-base md:text-xl font-medium italic  mx-2">
              ( Optional )
            </span>
          </label>
          <input
            type="string"
            className="border  border-[#646464] rounded-[26px] h-14 px-5 placeholder-[#929292] w-1/2"
          />
        </div>
        <div className=" w-full flex justify-center  md:justify-end ">
          {" "}
          <div className="flex   mt-10 gap-x-3">
            {/* Back Button */}
            <button className="bg-[#D60A0A] text-white text-[20px] font-semibold px-6 py-3 rounded-[31px] h-14">
              Delete Account
            </button>

            {/* Submit Button */}
            <button className=" bg-[var(--primary-blue)] text-white text-[20px] font-semibold px-6 py-3 rounded-[31px] h-14">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
