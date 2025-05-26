import React from "react";
import { featurePanels } from "@/app/data";
import ProductCard from "../../../../Components/Cards/ProductCard";
import Header from "../../../../Components/Layout/Header";

const Products = () => {
  return (
    <div>
      <Header
        heading="Find the Best Building Materials for your Projects"
        text="Explore durable and cost - effective materials for your construction projects"
      />
      <h1 className=" text-[#000000] text-center font-bold text-3xl md:text-4xl p-3 my-4">
        Who we are
      </h1>
      <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  my-8">
        {featurePanels.map((feature, index) => (
          <ProductCard
            key={index}
            title={feature.title}
            image={feature.image}
            description={feature.description}
            prodcut={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
