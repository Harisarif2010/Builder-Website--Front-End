import { Bell, Settings, ShoppingCart } from "lucide-react";
import { poppins, roboto, inter } from "../fonts";
import SupplierSidebar from "../../../Components/Layout/SupplierSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}
          <SupplierSidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col min-h-screen  bg-[#EEF0F4]">
            {/* Topbar */}
            <div className="flex  justify-between items-center p-3 mt-2 mx-3 bg-white rounded-[13px] h-1/12">
              {/* Search input */}
              <input
                type="text"
                placeholder="Search..."
                className="w-2/3 px-4 py-2 border border-[#DAE3F8] rounded-lg text-sm  "
              />

              {/* icons */}
              <div className="flex gap-x-6">
                <Bell color="#586A84" height={20} width={20} />
                <Settings color="#586A84" height={20} width={20} />
                <ShoppingCart color="#586A84" height={20} width={20} />
              </div>
            </div>

            {/* Page content */}
            <main
              className={`p-2 ${poppins.className} ${inter.className}] rounded-3xl`}
            >
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
