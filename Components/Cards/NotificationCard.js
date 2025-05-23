"use client";
import { poppins, roboto } from "@/app/fonts";
import React from "react";

export default function NotificationCard({
  title,
  subtitle,
  time,
  amount,
  type = "info",
  iconUrl,
  onRemove,
}) {
  // Default background colors per type
  const bgColor =
    {
      success: "#36DA78",
      alert: "#DA3636",
    }[type] || "bg-gray-100";

  return (
    <div className="bg-white p-5 rounded-xl  w-full  flex justify-between items-start">
      <div>
        <h4
          className={`${poppins.variable} font-medium text-[#101010] text-base mb-1`}
        >
          {title}
        </h4>
        {amount && (
          <div
            className={`${roboto.variable}  text-2xl text-[#3B4758] font-bold mb-1`}
          >
            {amount}
          </div>
        )}
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
        <div className="text-xs text-gray-700 mt-2">{time}</div>
        {type === "alert" && (
          <button
            onClick={onRemove}
            className="mt-2 text-sm text-red-500 hover:underline"
          >
            Remove
          </button>
        )}
      </div>
      <div
        style={{ backgroundColor: bgColor }}
        className="w-8 h-8 rounded-md flex items-center justify-center "
      >
        <img src={iconUrl} alt="icon" className="w-5 h-5 object-contain" />
      </div>
    </div>
  );
}
