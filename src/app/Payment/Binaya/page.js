import Image from "next/image";
import React from "react";
import PaymentButton from "../../../../Components/Button/PaymentButton";
import Address from "../../../../Components/UI/Address";

const Binaya = () => {
  return (
    <div>
      {" "}
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 p-3">
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Certified Financial Statement
          </label>
          <label className="border  border-[#848484] rounded-[22px] h-60 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />
            <span className="text-[#000000] text-center text-lg font-medium">
              Choose a file or drag & drop it here
            </span>
            <span className="text-[#A9ACB4] text-center text-lg font-medium p-2">
              JPEG, PNG, PDG, and MP4 formats, up to 50MB
            </span>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/cloudblack.png"
                width={53}
                height={49}
                alt="Upload"
                className="p-2 "
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Bank Statement
          </label>
          <label className="border  border-[#848484] rounded-[22px] h-60 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />
            <span className="text-[#000000] text-center text-lg font-medium">
              Choose a file or drag & drop it here
            </span>
            <span className="text-[#A9ACB4] text-center text-lg font-medium p-2">
              JPEG, PNG, PDG, and MP4 formats, up to 50MB
            </span>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/cloudblack.png"
                width={53}
                height={49}
                alt="Upload"
                className="p-2 "
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            Commercial Register Certificate
          </label>
          <label className="border  border-[#848484] rounded-[22px] h-60 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />
            <span className="text-[#000000] text-center text-lg font-medium">
              Choose a file or drag & drop it here
            </span>
            <span className="text-[#A9ACB4] text-center text-lg font-medium p-2">
              JPEG, PNG, PDG, and MP4 formats, up to 50MB
            </span>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/cloudblack.png"
                width={53}
                height={49}
                alt="Upload"
                className="p-2 "
              />
            </div>
          </label>
        </div>
        <div className="flex flex-col">
          <label className="text-black font-medium text-lg sm:text-xl md:text-2xl mb-2 ml-3">
            VAT Register Certificate
          </label>
          <label className="border  border-[#848484] rounded-[22px] h-60 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />
            <span className="text-[#000000] text-center text-lg font-medium">
              Choose a file or drag & drop it here
            </span>
            <span className="text-[#A9ACB4] text-center text-lg font-medium p-2">
              JPEG, PNG, PDG, and MP4 formats, up to 50MB
            </span>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/cloudblack.png"
                width={53}
                height={49}
                alt="Upload"
                className="p-2 "
              />
            </div>
          </label>
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="Reason for Deferred Payment "
          rows={6}
          className="w-full px-4 py-2 h-60 border border-[#6A6A6A] rounded-[22px] focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder-[#787878] placeholder:text-2xl"
          required
        />
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

export default Binaya;
