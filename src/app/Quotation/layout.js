import { Poppins } from "next/font/google";
Header;
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
        heading="Grow your Business by Supplying Quality Materials"
        text=" Connect with potential buyers and offer competitive pricing"
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
