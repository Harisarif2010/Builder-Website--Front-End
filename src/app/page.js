import Image from "next/image";

import products, { categories } from "./data";
import ProductCard from "../../Components/Cards/ProductCard";
import HeaderHome from "../../Components/Layout/HeaderHome";
import Footer from "../../Components/Layout/Footer";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <div className="bg-white w-full">
        <h1 className="text-center text-[#100F3D] text-4xl font-bold">
          Our Top Category
        </h1>
        <div className="flex flex-wrap justify-center gap-4 my-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#f1f3fc] hover:bg-[#e2e6f8] transition-colors duration-200 rounded-lg  text-center text-lg font-semibold text-gray-800 px-6 py-4 w-60"
            >
              {category}
            </div>
          ))}
        </div>

        <h1 className="text-center text-[#100F3D] text-4xl font-bold">
          Our Top Products
        </h1>

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
      <Footer />
    </>
  );
}
