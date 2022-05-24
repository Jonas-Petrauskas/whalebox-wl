import React from "react";
import "./footerComponent.scss";
import twitterSvg from "../../assets/twitter-ico.svg";
import discordSvg from "../../assets/discord-ico.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-navigation">
        <div className="footer__navigation-column">
          <a className="footer__nav-link" href="#">
            Privacy Policy
          </a>
          <a className="footer__nav-link" href="#">
            Terms & Conditions
          </a>
        </div>
        <div className="footer__navigation-column">
          <a className="footer__nav-link" href="#">
            Contact Us
          </a>
          <a className="footer__nav-link" href="#">
            Fairness Guarantee
          </a>
        </div>
        <div className="footer__navigation-column">
          <a className="footer__nav-link" href="#">
            FAQ
          </a>
          <a className="footer__nav-link" href="#">
            How it Works
          </a>
        </div>
      </div>
      <div className="footer-media">
        <div className="footer__icons">
          <a href="#">
            <img src={twitterSvg} alt="twitter" />
          </a>
          <a href="#">
            <img src={discordSvg} alt="discord" />
          </a>
        </div>
        <div className="footer__copyright">©Whalebox 2022</div>
      </div>
    </div>
  );
};

export default Footer;
