import React from "react";
import SearchBar from "../../../../Components/UI/SearchBar";
import Header from "../../../../Components/Layout/Header";
import { brands } from "@/app/data";
import BrandCard from "../../../../Components/Cards/BrandCard";

const Brands = () => {
  return (
    <div>
      <Header
        heading="Find & Hire Trusted Construction & Building Services"
        text="Browse and hire trusted service providers for your projects"
      />
      <div className="w-full bg-white p-3">
        {" "}
        <h1 className=" text-[#000000] text-center font-bold text-5xl p-3 my-4">
          Brands
        </h1>
        <div className="flex justify-center w-full">
          {" "}
          <SearchBar placeholder="Search Brands" />
        </div>
        <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-3">
          {brands.map((product, index) => (
            <BrandCard key={index} title={product.name} image={product.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
