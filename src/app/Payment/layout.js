import { Poppins } from "next/font/google";

import Footer from "../../../Components/Layout/Footer";
import Header from "../../../Components/Layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Layout({ children }) {
  return (
    <div className="dashboard-layout">
      <Header
        heading="Secure & Hassle - Free Payment"
        text="Complete your transactions safely with our integrated payment gateway, real time confirmation"
      />
      <h1 className="text-[#000000] font-bold text-5xl text-center">
        Select Payment Method
      </h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
