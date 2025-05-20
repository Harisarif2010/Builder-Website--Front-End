import { invoices } from "@/app/data";

const InvoiceTable = () => {
  return (
    <div className="bg-white p-6 rounded-[22px] shadow-lg my-3">
      <h2 className="text-[17px] font-bold mb-4">Pending Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-[#000]">
          <thead className="border-b border-[#D2D2D2] text-[#8C8C8C] text-[11px] font-medium">
            <tr>
              <th className="py-2 px-4">Invoice ID</th>
              <th className="py-2 px-4">Item</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Due Date</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody className="text-[13px] font-medium">
            {invoices.map((invoice, idx) => (
              <tr key={idx}>
                <td className="py-4 px-4">{invoice.invoiceId}</td>
                <td className="py-4 px-4">{invoice.item}</td>
                <td className="py-4 px-4">{invoice.amount}</td>
                <td className="py-4 px-4">{invoice.dueDate}</td>
                <td className="py-4 px-4">
                  <span className="text-[#000000]">{invoice.status}</span>
                </td>
                <td className="py-4 px-4">
                  {invoice.action && (
                    <button className="bg-[#006C35] text-white px-4 py-1 text-xs rounded-full h-6">
                      {invoice.action}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;
