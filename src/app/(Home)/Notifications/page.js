import React from "react";
import Header from "../../../../Components/Layout/Header";
import Image from "next/image";

const Notifications = () => {
  return (
    <div>
      <Header
        heading="Stay Updated with Real-Time Notifications"
        text="Never Miss a Quote Response or Exclusive Offer – Get Instant Alerts!"
      />
      <div className="w-full bg-white p-3 my-3">
        {" "}
        <h1 className=" text-[#000000] text-center font-bold text-3xl md:text-4xl p-3 my-4">
          Notifications
        </h1>
        <div className="flex justify-center my-4">
          <div className="flex items-center justify-between bg-white border border-[#C6C6C6] rounded-3xl px-4 py-3  w-2/3">
            {/* Left: Logo and Info */}
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Image
                src="/images/jdff.png" // replace with actual logo path
                alt="Brand Logo"
                width={30}
                height={30}
                className="w-12 h-12 object-contain rounded-full"
              />

              {/* Text Info */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-[#000] text-sm sm:text-base">
                    JDFF BRANDS
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm">1h</span>
                </div>
                <p className="text-gray-500 text-sm">Quality Steel</p>
              </div>
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center gap-4">
              <button className="text-[var(--primary-blue)] text-sm font-medium">
                Cancel
              </button>
              <button className="bg-[var(--primary-blue)] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
