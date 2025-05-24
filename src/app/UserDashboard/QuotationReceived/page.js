import { data } from "@/app/data";
import { Trash2, BookCheck, FileText } from "lucide-react";
import React from "react";
import { suppliers } from "@/app/data";

const Received = () => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    return "⭐".repeat(fullStars);
  };
  return (
    <>
      {" "}
      <h3 className="text-[#3B4758] text-2xl font-bold px-3 py-1">
        Quotation Request
      </h3>
      <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
        <h2 className="text-[17px] font-bold mb-4">Request Send List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-[11px] font-medium">
              <tr>
                <th className="py-2 px-4 font-medium">Quote ID</th>
                <th className="py-2 px-4 font-medium">Requested Item</th>
                <th className="py-2 px-4 font-medium">Supplier Name</th>
                <th className="py-2 px-4 font-medium">Status</th>
                <th className="py-2 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[13px] font-medium">
              {data.slice(0, 4).map((row, idx) => (
                <tr key={idx}>
                  <td className="py-6 px-4">{row.id}</td>
                  <td className="py-3 px-4">{row.item}</td>
                  <td className="py-3 px-4">{row.supplier}</td>
                  <td className="py-3 px-4 font-medium">{row.status}</td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <BookCheck
                      size={18}
                      className="text-[var(--green)]cursor-pointer"
                    />
                    <Trash2
                      size={18}
                      className="text-[#9A2B2B] cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      \{" "}
      <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
        <h2 className="text-[17px] font-bold mb-4">Comparison List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-[11px] font-medium">
              <tr>
                <th className="py-2 px-4">Featured</th>
                {suppliers.map((s, idx) => (
                  <th key={idx} className="py-2 px-4">
                    {s.category}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[13px] font-medium">
              <tr>
                <td className="py-4 px-4">Quote ID</td>
                {suppliers.map((s, idx) => (
                  <td key={idx} className="py-4 px-4">
                    {s.quoteId}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4">Product Name</td>
                {suppliers.map((s, idx) => (
                  <td key={idx} className="py-3 px-4">
                    {s.productName}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4">Offered Price</td>
                {suppliers.map((s, idx) => (
                  <td key={idx} className="py-3 px-4">
                    {s.price}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4">Discount Available</td>
                {suppliers.map((s, idx) => (
                  <td key={idx} className="py-3 px-4">
                    {s.discount}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4">Delivery Time</td>
                {suppliers.map((s, idx) => (
                  <td key={idx} className="py-3 px-4">
                    {s.delivery}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4">Rating</td>
                {suppliers.map((s, idx) => (
                  <td key={idx} className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      {renderStars(s.rating)}
                      <span className="text-gray-500 text-xs">
                        ({s.rating}/5)
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-3 px-4">Action</td>
                {suppliers.map((_, idx) => (
                  <td key={idx} className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <FileText
                        size={18}
                        className="text-[var(--green)]cursor-pointer"
                      />
                      <Trash2
                        size={18}
                        className="text-[#9A2B2B] cursor-pointer"
                      />
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Received;
