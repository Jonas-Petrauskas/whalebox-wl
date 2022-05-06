import React from "react";
import "./desktopNav.scss";

import WalletConnect from "../walletConnect/walletComponent";

import hamburger from "../../assets/hamburger-ico.svg";
import whaleBoxLogo from "../../assets/whalebox-with-bg.jpg";
import crossIcon from "../../assets/cross-ico.svg";
import homeGray from "../../assets/home-ico.svg";
import homeRed from "../../assets/home-ico-red.svg";
import pageGray from "../../assets/page-ico.svg";
import whitelistGray from "../../assets/free-drop-ico.svg";
import twitterSvg from "../../assets/twitter-ico.svg";
import discordSvg from "../../assets/discord-ico.svg";

const DesktopSideNav = () => {
  return (
    <div className="desktop-nav">
      <a href="" className="desktop-nav__whaleBox__logo">
        <img src={whaleBoxLogo} alt="" />
      </a>
      <nav className="desktop-nav__links">
        <ul>
          <li>
            <img className="home-icon" src={homeGray} alt="" />
            {/* <img className="home-icon active" src={homeRed} alt="" /> */}
            <a href="">Unboxing</a>
          </li>
          <li>
            <img className="" src={whitelistGray} alt="" />
            <a href="">Whitelist</a>
          </li>
          <li>
            <img className="" src={pageGray} alt="" />
            <a href="">How It works</a>
          </li>
        </ul>
      </nav>
      <div className="desktop-wallet-connect">
        <WalletConnect />
      </div>
      <div className="desktop-nav__bottom__container">
        <div className="desktop-nav__bottom__links">
          <a href="#">
            <img src={twitterSvg} alt="" />
          </a>
          <a href="#">
            <img src={discordSvg} alt="" />
          </a>
        </div>
        <p className="desktop-nav__bottom__text">
          All additional information is listed at the bottom of the page
        </p>
      </div>
    </div>
  );
};

export default DesktopSideNav;
