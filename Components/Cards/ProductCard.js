"use client";
import Image from "next/image";
import React, { useState } from "react";
import { QuotationModal } from "../Modals/QuotationModal";

const ProductCard = ({ title, image, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="bg-[#F1F3FC] rounded-[35px] p-4 flex flex-col">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="mx-auto rounded-xl"
        />
        <h3 className="font-semibold text-left mb-2">{title}</h3>
        <p className="text-lg text-[#777777] mb-4">{description}</p>
        <button
          className="mt-auto bg-[#354EF3] text-white text-sm px-2 py-2 rounded-3xl h-14 w-1/2 mx-auto cursor-pointer"
          onClick={openModal}
        >
          Request Quotation now
        </button>
      </div>
      <QuotationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ProductCard;
