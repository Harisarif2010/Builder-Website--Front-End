"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";

import products, { categories } from "./data";
import ProductCard from "../../Components/Cards/ProductCard";
import HeaderHome from "../../Components/Layout/HeaderHome";
import Footer from "../../Components/Layout/Footer";

export default function Home() {
  const testimonials = new Array(10).fill({
    text: "Headspace provides me with ... a connection to myself, and a disconnection from negative thoughts, feelings, and sensations.",
    location: "Kent, UK",
    source: "on finding her happy place",
  });
  const [index, setIndex] = useState(0);
  const cardsPerPage = 3;

  const next = () =>
    setIndex((prev) =>
      Math.min(prev + cardsPerPage, testimonials.length - cardsPerPage)
    );
  const prev = () => setIndex((prev) => Math.max(prev - cardsPerPage, 0));
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

        <div className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {products.slice(0, 8).map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              image={product.image}
              description={product.description}
              prodcut={true}
            />
          ))}
        </div>
        <div className="flex flex-col items-center p-3 sm:p-4 my-6 justify-between border-b border-[#BFBFBF] mx-4 sm:mx-7">
          <h1 className="text-[#100F3D] text-5xl font-bold text-center mb-6">
            Our Numbers
          </h1>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-6">
            <div className="flex flex-col items-center min-w-[120px]">
              <h1
                style={{
                  background:
                    "linear-gradient(180deg, #354EF3 0%, #1F2E8D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="text-6xl font-semibold"
              >
                15k+
              </h1>
              <span className="text-[#454545] text-3xl text-center">Users</span>
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <h1
                style={{
                  background:
                    "linear-gradient(180deg, #354EF3 0%, #1F2E8D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="text-6xl font-semibold"
              >
                12k+
              </h1>
              <span className="text-[#454545] text-3xl text-center">
                Suppliers
              </span>
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <h1
                style={{
                  background:
                    "linear-gradient(180deg, #354EF3 0%, #1F2E8D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="text-6xl font-semibold"
              >
                500
              </h1>
              <span className="text-[#454545] text-3xl text-center">
                Total Quotes
              </span>
            </div>
            <div className="flex flex-col items-center min-w-[120px]">
              <h1
                style={{
                  background:
                    "linear-gradient(180deg, #354EF3 0%, #1F2E8D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                className="text-6xl font-semibold"
              >
                400
              </h1>
              <span className="text-[#454545] text-3xl text-center">Sales</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="w-1/2 ml-10 mt-25">
            <h1 className="text-[#100F3D] font-semibold text-5xl max-w-[600px] ">
              Grow Your Business - Become a Suppliers Today
            </h1>
            <span className="text-[#535353] text-2xl mt-15 font-medium max-w-[426px]">
              Manage Orders, Track Earnings & Grow Your Brands
            </span>
          </div>
          <div className="relative w-1/2 ">
            <Image
              src="/images/frame.png"
              width={532}
              height={400}
              alt="image"
            />
            <div
              style={{ background: "rgba(255, 255, 255, 0.55)" }}
              className="absolute inset-0  mix-blend-multiply opacity-80 pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
      <section className="py-8 px-4 md:px-12 relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-center sm:text-left w-full sm:w-auto">
            Our Happy Clients
          </h2>
          <button className=" bg-[var(--primary-blue)] text-white px-4 py-2 rounded-[10px] text-sm sm:flex sm:justify-center">
            View All Testimonials
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 justify-center items-start border-b border-[#B6B6B6] pb-6">
          {testimonials.slice(index, index + cardsPerPage).map((item, i) => (
            <div
              key={i}
              className="bg-[#F1F3FC] p-6 rounded-xl w-full max-w-xs mx-auto h-[340px] flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-row items-center gap-x-4 mb-4">
                  <Quote
                    className=" text-[var(--primary-blue)]"
                    size={32}
                    fill="#354EF3"
                  />
                  <div className="flex gap-x-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="w-8 h-8 flex items-center justify-center rounded-full  bg-[var(--primary-blue)] text-white"
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-2xl text-[#413D45] mb-4">{item.text}</p>
              </div>
              <div>
                <p className="text-base text-[#67646A] font-medium">
                  {item.location}
                </p>
                <p className="text-xs text-gray-500">{item.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
          <p className="text-sm text-gray-500">
            {index + 1} of {testimonials.length}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className="p-2 rounded-full border border-[#221F4E] hover:bg-gray-200 disabled:opacity-50"
            >
              <ArrowLeft color="#808080" />
            </button>
            <button
              onClick={next}
              disabled={index + cardsPerPage >= testimonials.length}
              className="p-2 rounded-full border border-[#221F4E]  bg-[var(--primary-blue)] disabled:opacity-50"
            >
              <ArrowRight color="white" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
