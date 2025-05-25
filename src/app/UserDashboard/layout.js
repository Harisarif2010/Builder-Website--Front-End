import Sidebar from "../../../Components/Layout/Sidebar";
import { Bell, Settings, ShoppingCart } from "lucide-react";
import { poppins, roboto, inter } from "../fonts";
import ThemeToggle from "../theme/Themetoggle";
import MobileUserSidebarModal from "../../../Components/Modals/SidebarModal";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <div className="flex-1 flex flex-col min-h-[100dvh] bg-[#EEF0F4]">
            {/* Topbar */}
            <div className="flex  justify-end items-center p-2 mt-2 mx-3 bg-white rounded-[13px] h-15">
              {/* icons */}
              <div className="flex gap-x-7">
                <div className="md:hidden fixed top-6 left-4 z-50">
                  <MobileUserSidebarModal />
                </div>
                <ThemeToggle />
                <Bell color="#586A84" height={20} width={20} />
                <Settings color="#586A84" height={20} width={20} />
                <ShoppingCart color="#586A84" height={20} width={20} />
              </div>
            </div>

            {/* Page content */}
            <main
              className={`p-2 ${poppins.className} ${roboto.className} ${inter.className}] rounded-3xl`}
            >
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
