import Footer from "../../../Components/Layout/Footer";
import Header from "../../../Components/Layout/Header";
import { poppins } from "../fonts";

export default function Layout({ children }) {
  return (
    <div className="dashboard-layout">
      <Header
        heading="Grow your Business by Supplying Quality Materials"
        text=" Connect with potential buyers and offer competitive pricing"
      />
      <main className={poppins.className}>{children}</main>
      <Footer />
    </div>
  );
}
