import React from "react";
import "./popupComponent.scss";

function PopUp() {
  return (
    <div className="popup-wrapper">
      <div className="popup-container">
        <p>
          For higher chances follow us on
          <a href="#" className="popup-twitter-link">
            Twitter
          </a>
          & Join Discord + RT Pinned tweets
        </p>
      </div>
    </div>
  );
}

export default PopUp;
