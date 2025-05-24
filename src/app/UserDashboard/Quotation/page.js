import { Pencil, Trash2 } from "lucide-react";
import React from "react";
import { data } from "@/app/data";

const page = () => {
  return (
    <>
      <h3 className="text-[#3B4758] text-lg md:text-2xl font-bold px-3 py-1">
        Quoation Request
      </h3>{" "}
      <div className="bg-white p-6 rounded-[22px] my-3 ">
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
              {data.map((row, idx) => (
                <tr key={idx}>
                  <td className="py-6 px-4">{row.id}</td>
                  <td className="py-3 px-4">{row.item}</td>
                  <td className="py-3 px-4">{row.supplier}</td>
                  <td className="py-3 px-4 font-medium">{row.status}</td>
                  <td className="py-3 px-4 flex items-center gap-3">
                    <Pencil
                      size={18}
                      className=" text-[var(--primary-blue)] cursor-pointer"
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
    </>
  );
};

export default page;
