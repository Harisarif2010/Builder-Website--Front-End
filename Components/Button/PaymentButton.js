import React from "react";

const PaymentButton = () => {
  return (
    <div className="w-4/5 border border-[#909090] rounded-[22px] p-3">
      <div className="flex flex-row justify-between ">
        <span className="text-[#000000] font-bold text-[26px] ">1 Item</span>
        <span className="text-[#000000] font-bold text-[26px]">
          Order Total: $ 200
        </span>
      </div>

      <div className="flex justify-center mt-3 ">
        <button className="w-4/5  bg-[var(--primary-blue)] text-white py-2 rounded-[35px]">
          Payment Confirm
        </button>
      </div>
    </div>
  );
};

export default PaymentButton;
