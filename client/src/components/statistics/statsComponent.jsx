import React from "react";
import "./statsComponent.scss";

const Stats = ({ count }) => {
  return (
    <div className="stats-container">
      <div className="stats-wrapper">
        <div className="stats-wl-spots__container">
          <p>5000</p>
          <p>Whitelist Spots</p>
        </div>
        <div className="stats-applications__container">
          <p>{count}</p>
          <p>Applications</p>
        </div>
        <div className="stats-mint-price__container">
          <p>0.1 ETH</p>
          <p>Mint Price</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
