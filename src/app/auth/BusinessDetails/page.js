"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const BusinessDetails = () => {
  const router = useRouter();
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-[#000000] mb-8">
        Create New Account
      </h1>
      <div className="grid gap-x-5 gap-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Company Name
          </label>
          <input
            type="text"
            className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter company name"
          />
        </div>

        {/* Commercial Registration No. */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Commercial Registration No.
          </label>
          <input
            type="text"
            className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Enter CR number"
          />
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Location
          </label>
          <select className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 text-[#000000] bg-white">
            <option value="">Select Location</option>
            <option value="riyadh">Riyadh</option>
            <option value="jeddah">Jeddah</option>
            <option value="mecca">Mecca</option>
            <option value="medina">Medina</option>
            <option value="dammam">Dammam</option>
            <option value="khobar">Khobar</option>
            <option value="abha">Abha</option>
            <option value="taif">Taif</option>
            <option value="al-hofuf">Al-Hofuf</option>
            <option value="jubail">Jubail</option>
            <option value="tabuk">Tabuk</option>
            <option value="hail">Hail</option>
            <option value="buraidah">Buraidah</option>
            <option value="najran">Najran</option>
            <option value="yanbu">Yanbu</option>
          </select>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Company Website
            <span className="text-[var(--grey-text)] text-xl font-medium">
              ( Optional )
            </span>
          </label>
          <input
            type="password"
            className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 placeholder-[#A8A8A8]"
            placeholder="Re-enter your password"
          />
        </div>

        {/* Business Type */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Business Type
          </label>
          <select className="border  border-[var(--secondary-border)] rounded-[26px] h-14 px-5 text-[#000000] bg-white">
            <option value="">Select Type</option>
            <option value="factory">Factory</option>
            <option value="retailer">Retailer</option>
            <option value="wholesaler">Wholesaler</option>
          </select>
        </div>

        {/* Upload Sample Product (Optional) */}
        <div className="flex flex-col">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Upload Sample Product{" "}
            <span className="text-[var(--grey-text)] text-xl font-medium">
              (Optional)
            </span>
          </label>
          <label className="border  border-[var(--secondary-border)] rounded-[26px] h-36 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/upload.svg"
                width={24}
                height={24}
                alt="Upload"
                className="border rounded-full p-2 bg-[#2B44E11C]"
              />
              <span className="text-[#6A6A6A] text-center text-base font-medium">
                Upload Files
              </span>
            </div>
          </label>
        </div>

        {/* Upload Business License */}
        <div className="flex flex-col mt-3">
          <label className="text-[#000000] font-medium text-2xl mb-2 ml-3">
            Upload Business License
          </label>
          <label className="border  border-[var(--secondary-border)] rounded-[26px] h-36 px-5 cursor-pointer flex flex-col items-center justify-center gap-2 bg-white hover:bg-gray-50 transition">
            <input type="file" className="hidden" />
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/icons/upload.svg"
                width={24}
                height={24}
                alt="Upload"
                className="border rounded-full p-2 bg-[#2B44E11C]"
              />
              <span className="text-[#6A6A6A] text-center text-base font-medium">
                Upload Files
              </span>
            </div>
          </label>
        </div>
      </div>
      <div className="w-full flex justify-between items-center my-8 px-2">
        {/* Left Side: Back + Text */}
        <div className="flex items-center gap-3">
          <button className=" bg-[var(--primary-blue)] text-white text-[26px] font-semibold px-3   rounded-[18px] h-15 flex items-center cursor-pointer ">
            <ArrowLeft color="white" />
            Back
          </button>
          <span className="text-[var(--grey-text)] text-lg font-medium">
            ( Return to Step 1 )
          </span>
        </div>
        <button
          className=" bg-[var(--primary-blue)] text-white text-[26px] font-semibold px-3   rounded-[18px] h-15 flex items-center cursor-pointer "
          onClick={router.push("/auth/SupplierVerify")}
        >
          Next <ArrowRight size={25} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default BusinessDetails;
