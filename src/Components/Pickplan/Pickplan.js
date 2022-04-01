import React from "react";
import "./Pickplan.css";
import vector3 from "./underline.png";

function Pickplan() {
  const plans = [
    {
      month: "Monthly",
      price: "$18/mo",
      button: "Find your plan",
    },
    {
      month: "Yearly",
      price: "$15/mo",
      button: "Find your plan",
    },
  ];

  return (
    <div className="pickplan-wrap">
      <div className="pickplan-content">
        <p>Pick Your Plan</p>
        <img src={vector3} className="underline" alt="" />
      </div>
      <div className="pricing-content">
        <div className="pricing-block1">
          <p className="para1">Monthly</p>
          <p className="para2">$18/mo</p>
          <button className="pricing-button"><div className="pricing-text">Find your plan</div></button>
        </div>
        <div className="pricing-block2">
          <p className="para1">Yearly</p>
          <p className="para2">$15/mo</p>
          <button className="pricing-button"><div className="pricing-text">Find your plan</div></button>
        </div>
      </div>
    </div>
  );
}

export default Pickplan;
