import React from "react";
import "./styles/style.css";

export default function Topbar() {
  return (
    <div className="topbar__container">
      <div>
        <span>Ship to</span>{" "}
        <img
          src="https://thriftmyoutfit.s3.ap-south-1.amazonaws.com/topbar-flag.png"
          alt="Nepal"
        />
      </div>
      <span>Free Shipping inside KTM Valley.</span>
      <span>ENG</span>
    </div>
  );
}
