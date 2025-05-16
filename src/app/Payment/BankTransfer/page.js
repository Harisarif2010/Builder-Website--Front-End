import Image from "next/image";
import React from "react";
import PaymentButton from "../../../../Components/Button/PaymentButton";
import Address from "../../../../Components/UI/Address";

const Bank = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 p-3">
        {/* Bank Name */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Bank Name
          </label>
          <input
            type="text"
            className="border border-[#6A6A6A] rounded-[22px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#787878]"
            placeholder="Enter Bank Name"
          />
        </div>

        {/* Account No */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Account No
          </label>
          <input
            type="string"
            className="border border-[#6A6A6A] rounded-[22px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#787878]"
            placeholder="Enter Account"
          />
        </div>

        {/* IBAN No */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            IBAN No
          </label>
          <input
            type="string"
            className="border border-[#6A6A6A] rounded-[22px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#787878]"
            placeholder="Enter IBAN"
          />
        </div>

        {/* CR Number */}
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Transaction ID
          </label>
          <input
            type="text"
            className="border border-[#6A6A6A] rounded-[22px] h-10 sm:h-12 md:h-14 px-4 sm:px-5 text-sm sm:text-base placeholder-[#787878]"
            placeholder="Enter CR number"
          />
        </div>

        {/* Upload CR Document */}
        <div className="flex flex-col sm:col-span-2 lg:col-span-1">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Reciept
          </label>
          <label className="border border-[#6A6A6A] rounded-3xl h-24 sm:h-32 md:h-36 px-4 sm:px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />

            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/upload.svg"
                width={44}
                height={44}
                alt="Upload"
                className="border rounded-[22px] p-2 bg-blue-100"
              />
              <span className="text-gray-600 text-center text-sm sm:text-base font-medium mt-2">
                Upload Files
              </span>
            </div>
          </label>
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <Address />
      </div>
      <div className="flex flex-row justify-center my-8">
        {" "}
        <PaymentButton />
      </div>
    </div>
  );
};

export default Bank;
