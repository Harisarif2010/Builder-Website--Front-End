import React from "react";
import products from "@/app/data";
import ProductCard from "../../../../Components/Cards/ProductCard";
import Header from "../../../../Components/Layout/Header";
import SearchBar from "../../../../Components/UI/SearchBar";

const Products = () => {
  return (
    <div>
      <Header
        heading="Find the Best Building Materials for your Projects"
        text="Explore durable and cost - effective materials for your construction projects"
      />
      <h1 className=" text-[#000000] text-center font-bold text-5xl p-3 my-4">
        Products
      </h1>
      <div className="flex justify-center w-full">
        {" "}
        <SearchBar placeholder="Search Products" />
      </div>
      <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
            description={product.description}
            prodcut={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
