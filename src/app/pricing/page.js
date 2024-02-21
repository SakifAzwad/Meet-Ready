"use client"
import PlanPrice from "@/components/price/PlanPrice";
import PricingFooter from "@/components/price/PricingFooter";
import "../globals.css";

const Pricing = () => {
  return (
    <div className="bg-gradient-to-r from-[#E7F1FE] via-[#ECF0FE] to-[#F5EEFF]">
      <PlanPrice></PlanPrice>
      <PricingFooter/>
    </div>
  )
}

export default Pricing;
