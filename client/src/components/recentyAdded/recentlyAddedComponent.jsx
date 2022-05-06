import React from "react";
import "./recentlyAddedComponent.scss";

const RecentlyAdded = () => {
  return (
    <div className="recentlyAdded-container">
      <div className="recentyAdded-wrapper">
        <div className="title-container">
          <h3>RECENTLY ADDED</h3>
          <div className="live-badge">
            <div className="live-badge__text">Live</div>
          </div>
        </div>
        <div children="live-data-wrapper">
          <div className="label-container">
            <p>WALLET ADDRESS</p>
            <p>ACCESS CODE</p>
            <p>TIME APPLIED</p>
          </div>
          <div className="overflow">
            <div className="live-data-container">
              <p>0x9168DAe2296d9Ee5aa...</p>
              <p>ARCANUM50</p>
              <p>April 15, 2022 20:45</p>
            </div>
            <div className="live-data-container">
              <p>0x9168DAe2296d9Ee5aa...</p>
              <p>ARCANUM50</p>
              <p>April 15, 2022 20:45</p>
            </div>
            <div className="live-data-container">
              <p>0x9168DAe2296d9Ee5aa...</p>
              <p>ARCANUM50</p>
              <p>April 15, 2022 20:45</p>
            </div>
            <div className="live-data-container">
              <p>0x9168DAe2296d9Ee5aa...</p>
              <p>ARCANUM50</p>
              <p>April 15, 2022 20:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
