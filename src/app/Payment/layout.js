"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Footer from "../../../Components/Layout/Footer";
import Header from "../../../Components/Layout/Header";

export default function Layout({ children }) {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (value) => {
    setSelectedOption(value);

    if (value === "bank") {
      router.push("/Payment/BankTransfer");
    } else if (value === "card") {
      router.push("/payment/credit-card");
    } else if (value === "later") {
      router.push("/Payment/Binaya");
    }
  };

  return (
    <div className="dashboard-layout">
      <Header
        heading="Secure & Hassle - Free Payment"
        text="Complete your transactions safely with our integrated payment gateway, real time confirmation"
      />

      <h1 className="text-[#000000] font-bold text-4xl sm:text-5xl text-center p-4">
        Select Payment Method
      </h1>

      <div className="w-full flex flex-col sm:flex-row justify-center gap-4 p-4">
        {/* Bank Transfer Option */}
        <div className="w-full sm:w-[28vw] border border-[#999999] rounded-[22px] p-4 h-20 cursor-pointer">
          <label className="flex items-center gap-2 text-[#000000] text-[22px] sm:text-[26px] font-medium">
            <input
              type="radio"
              name="payment_option"
              value="bank"
              checked={selectedOption === "bank"}
              onChange={() => handleChange("bank")}
            />
            Bank Transfer
          </label>
        </div>

        {/* Credit Card Option */}
        <div className="w-full sm:w-[28vw] border border-[#999999] rounded-[22px] p-4 h-20 cursor-pointer">
          <label className="flex items-center gap-2 text-[#000000] text-[22px] sm:text-[26px] font-medium">
            <input
              type="radio"
              name="payment_option"
              value="card"
              checked={selectedOption === "card"}
              onChange={() => handleChange("card")}
            />
            Pay me with Credit Card
          </label>
        </div>

        {/* Binaya Pay Later Option */}
        <div className="w-full sm:w-[28vw] border border-[#999999] rounded-[22px] p-4 h-20 cursor-pointer">
          <label className="flex items-center gap-2 text-[#000000] text-[22px] sm:text-[26px] font-medium">
            <input
              type="radio"
              name="payment_option"
              value="later"
              checked={selectedOption === "later"}
              onChange={() => handleChange("later")}
            />
            Binaya Pay Later
          </label>
        </div>
      </div>

      <main>{children}</main>
      <Footer />
    </div>
  );
}
