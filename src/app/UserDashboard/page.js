"use client";
import { Bell } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [data] = useState({
    pendingQuotes: {
      count: 48,
      change: 16.9,
      increase: true,
    },
    pendingPayments: {
      amount: 3503.26,
      change: 9.5,
      increase: true,
    },
    activeOrders: {
      count: 8,
    },
    notification: {
      id: 1023,
      type: "New Suppliers Respond on Quote",
    },
  });
  return (
    <div>
      <div className="flex justify-between px-2 py-1">
        {" "}
        <h3 className="text-[#3B4758] text-2xl font-bold  py-1">Dashboard</h3>
        <div className="flex  gap-x-3">
          {/* Back Button */}
          <button
            onClick={() => {
              router.push("/UserDashboard/InviteSupplier");
            }}
            className="flex items-center justify-center  text-[var(--primary-blue)] text-[20px] font-semibold px-3 py-3 border border-[#354EF3] rounded-[22px] h-12 cursor-pointer"
          >
            Invite New Supplier
          </button>
          <button className="flex items-center justify-center bg-[var(--secondary-blue)] text-white text-[20px] font-semibold px-3 py-3 rounded-[22px] h-12">
            Request Quote
          </button>
        </div>
      </div>
      <div className="grid gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 py-4 px-4">
        <div className="bg-white rounded-[13px] px-3">
          <div className="flex justify-between pb-3 pt-6">
            <h3 className="text-[#586A84] text-[14px] font-semibold ">
              Pending Quote Requests
            </h3>
            <div className=" bg-[var(--primary-blue)] flex justify-center items-center rounded-md h-9 w-9">
              {" "}
              <Image
                src="/icons/quotation.svg"
                alt="Pet Profile icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold">
            48 Pending Quotes
          </h2>
          <p className="text-[#0A7D5A] font-normal text-[12px] py-3">
            +6.50%{" "}
            <span className="text-[#586A84] font-normal text-[12px]">
              since last month
            </span>
          </p>
        </div>
        <div className="bg-white rounded-[13px] px-3">
          <div className="flex justify-between pb-3 pt-6">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Pending Payments
            </h3>
            <div className="bg-[#DD9013] flex justify-center items-center rounded-md h-9 w-9">
              {" "}
              <Image
                src="/icons/bell.svg"
                alt="Pet Profile icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold">$ 3,503.26</h2>
          <p className="text-[#0A7D5A] font-normal text-[12px] py-3">
            +6.50%{" "}
            <span className="text-[#586A84] font-normal text-[12px]">
              since last month
            </span>
          </p>
        </div>
        <div className="bg-white rounded-[13px] px-3">
          <div className="flex justify-between  pb-3 pt-6">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Active Orders
            </h3>
            <div className="bg-[#006C35] flex justify-center items-center rounded-md h-9 w-9">
              {" "}
              <Image
                src="/icons/file.svg"
                alt="Pet Profile icon"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold ">
            8 Active Orders
          </h2>
        </div>
        <div className="bg-white rounded-[13px] px-3">
          <div className="flex justify-between  pb-3 pt-6">
            <h3 className="text-[#586A84] text-[14px] font-semibold">
              Recent Notifications
            </h3>
            <div className="bg-[#D60A0A] flex justify-center items-center rounded-md h-9 w-9">
              <Bell color="white" size={20} />
            </div>
          </div>
          <h2 className="text-2xl text-[#3B4758] font-bold pb-4">
            New Suppliers Respond on Quote #ID 1023
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
