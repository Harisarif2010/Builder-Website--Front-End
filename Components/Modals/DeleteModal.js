"use client";

import Image from "next/image";

// Modal component
export const DeleteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 relative">
        <h2 className="text-base font-medium mb-6 text-center">
          Do you want to delete the product?
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center border border-[#626262]">
            <span className="font-medium mb-1">Manual Entry</span>
            <span className="text-sm  text-[#686868]">
              Fill out product details
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
