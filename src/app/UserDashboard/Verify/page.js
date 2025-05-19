import React from "react";

const Verify = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">Profile</h3>{" "}
      <div className="bg-white rounded-[22px] p-5">
        <div className="flex flex-col my-3 ml-6">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            OTP Code
            <span className="text-[#7B7B7B] text-xl font-medium">
              ( Sent via email/ SMS for verification )
            </span>
          </label>

          <input
            type="email"
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8] w-1/2"
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
            className="border border-[#8C8C8C] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8] w-1/2"
          />
        </div>
        <div className=" w-full flex  justify-end ">
          {" "}
          <div className="flex   mt-10 gap-x-3">
            {/* Back Button */}
            <button className="bg-[#D60A0A] text-white text-[20px] font-semibold px-6 py-3 rounded-[31px] h-14">
              Delete Account
            </button>

            {/* Submit Button */}
            <button className="bg-[#354EF3] text-white text-[20px] font-semibold px-6 py-3 rounded-[31px] h-14">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
