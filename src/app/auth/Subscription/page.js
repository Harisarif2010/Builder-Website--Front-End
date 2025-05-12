import React from "react";
import PricingPlans from "../../../../Components/UI/PricingPlan";

const Subscription = () => {
  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-[#000000] mb-8">
        Subscription Plan
      </h1>
      <PricingPlans />
    </div>
  );
};

export default Subscription;
