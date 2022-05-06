import React, { useState } from "react";
import "./sideNav.scss";
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

const SideNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div className="mobile-navigation-bar">
      {/* <div className={navbarOpen ? "mobile-overlay active" : "mobile-overlay"}>
        </div> */}
      <div className="mobile-nav__hamburger__link" onClick={handleToggle}>
        <img src={hamburger} className="mobile-nav__hamburger" />
      </div>

      <a href="#" className="mobile-nav__logo__link">
        <img src={whaleBoxLogo} className="mobile-nav__logo" />
      </a>
      <nav
        className={navbarOpen ? "mobile-nav__menu active" : "mobile-nav__menu"}
      >
        <ul>
          <div className="mobile-nav_menu__top" onClick={handleToggle}>
            <a href="#" className="mobile-nav__logo__link">
              <img src={whaleBoxLogo} className="mobile-nav__logo" />
            </a>
            <img src={crossIcon} className="mobine-nav__cross" />
          </div>

          <WalletConnect />

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
        <div className="mobile-nav__bottom__container">
          <div className="mobile-nav__bottom__links">
            <a href="#">
              <img src={twitterSvg} alt="" />
            </a>
            <a href="#">
              <img src={discordSvg} alt="" />
            </a>
          </div>
          <div className="mobile-nav__bottom__text">
            <p>
              All additional information is listed at the bottom of the page
            </p>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </div>
  );
};

export default SideNav;
