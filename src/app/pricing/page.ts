"use client"
import PlanPrice from "@/components/price/PlanPrice";
import PricingFooter from "@/components/price/PricingFooter";
import "../globals.css";

const Pricing = () => {
  return (
    <div className="bg-purple-200">
      <PlanPrice></PlanPrice>
      <PricingFooter/>
    </div>
  )
}

export default Pricing;
