import { FileText } from "lucide-react";
import React from "react";
import { orders } from "@/app/data";
const page = () => {
  return (
    <>
      {" "}
      <h3 className="text-[#3B4758] text-lg md:text-2xl font-bold px-3 py-1">
        Orders
      </h3>
      <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
        <h2 className="text-sm md:text-[17px] font-bold mb-4">Orders Table</h2>

        <div className="overflow-x-auto">
          <table className="md:min-w-[700px] w-full text-left text-sm text-[#000000]">
            <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-[11px] font-medium">
              <tr>
                <th className="py-2 px-4 whitespace-nowrap">Quote ID</th>
                <th className="py-2 px-4 whitespace-nowrap">Expected Date</th>
                <th className="py-2 px-4 whitespace-nowrap">Supplier Name</th>
                <th className="py-2 px-4 whitespace-nowrap">Status</th>
                <th className="py-2 px-4 whitespace-nowrap">Actions</th>
                <th className="py-2 px-4 whitespace-nowrap">Delivery Note</th>
              </tr>
            </thead>

            <tbody className="text-[13px] font-medium">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.quoteId}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">{order.date}</td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.supplier}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    {order.status}
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <button className="bg-[#003366] text-white px-4 py-1 md:text-xs text-[8px] rounded-full">
                      Track Order
                    </button>
                  </td>
                  <td className="py-4 px-4 whitespace-nowrap">
                    <a
                      href="#"
                      className="flex items-center text-red-600 text-xs font-medium"
                    >
                      <FileText size={14} className="mr-1 text-red-600" />
                      PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
