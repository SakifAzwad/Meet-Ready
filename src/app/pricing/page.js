"use client"
import PlanPrice from "@/components/price/PlanPrice";
import PricingFooter from "@/components/price/PricingFooter";
import "../globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";


const Pricing = () => {
  return (
    <div className="bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]">
      <Navbar></Navbar>
      <PlanPrice></PlanPrice>
      <Footer></Footer>
    </div>
  )
}

export default Pricing;
