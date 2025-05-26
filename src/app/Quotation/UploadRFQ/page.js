import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Upload = () => {
  return (
    <div>
      <div className="p-8 ">
        <label className="border border-dashed border-[#848484] rounded-[22px] h-36 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
          <input type="file" className="hidden" />
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/cloud.svg"
              width={53}
              height={49}
              alt="Upload"
              className="p-2"
            />
            <span className="text-[#000000] text-center text-base sm:text-lg font-medium">
              Upload RFQ File ( PDF, Excel, Docs)
            </span>
            <span className="text-[#A9ACB4] text-center text-base sm:text-lg font-medium p-2">
              Drag and drop files here, or click to upload
            </span>
          </div>
        </label>

        <div className="w-full flex justify-start items-center my-8">
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <button className="w-full sm:w-auto bg-white text-[var(--primary-blue)] text-lg sm:text-[22px] font-semibold px-8 py-3 border border-[#354EF3] rounded-[26px] h-16">
              Add Item
            </button>
            <button className="w-full sm:w-auto bg-[var(--primary-blue)] text-white text-lg sm:text-[22px] font-semibold px-6 py-3 rounded-[26px] h-16 flex items-center gap-2 justify-center cursor-pointer ">
              Next Step <ArrowRight size={18} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
