import React from "react";
import Header from "../../../../Components/Layout/Header";

const Notifications = () => {
  return (
    <div>
      <Header
        heading="Stay Updated with Real-Time Notifications"
        text="Never Miss a Quote Response or Exclusive Offer – Get Instant Alerts!"
      />
      <div className="w-full bg-white p-3">
        {" "}
        <h1 className=" text-[#000000] text-center font-bold text-5xl p-3 my-4">
          Notifications
        </h1>
      </div>
    </div>
  );
};

export default Notifications;
