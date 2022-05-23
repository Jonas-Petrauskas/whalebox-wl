import React from "react";
import "./popupComponent.scss";
import crossIcon from "../../assets/cross-ico.svg";

function PopUp() {
  function closePupup() {
    document.getElementById("testas").style.display = "none";
  }

  return (
    <div className="popup-wrapper" id="testas">
      <div className="popup-container">
        <img onClick={closePupup} src={crossIcon} alt="" id="close-icon" />
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
