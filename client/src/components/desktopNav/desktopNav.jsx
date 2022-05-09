import React, { useState } from "react";
import "./desktopNav.scss";

import WalletConnect from "../walletConnect/walletComponent";

import whaleBoxLogo from "../../assets/whalebox-with-bg.jpg";
import homeGray from "../../assets/home-ico.svg";
import homeRed from "../../assets/home-ico-red.svg";
import pageGray from "../../assets/page-ico.svg";
import pageRed from "../../assets/page-ico-red.svg";
import whitelistGray from "../../assets/free-drop-ico.svg";
import whitelistRed from "../../assets/free-drop-ico-red.svg";
import twitterSvg from "../../assets/twitter-ico.svg";
import discordSvg from "../../assets/discord-ico.svg";

const DesktopSideNav = () => {
  const [openHome, setOpenHome] = useState(false);
  const [openWL, setOpenWL] = useState(false);
  const [openPage, setOpenPage] = useState(false);

  return (
    <div className="desktop-nav">
      <a href="" className="desktop-nav__whaleBox__logo">
        <img src={whaleBoxLogo} alt="" />
      </a>
      <nav className="desktop-nav__links">
        <ul>
          <li
            onMouseOver={() => setOpenHome(true)}
            onMouseOut={() => setOpenHome(false)}
          >
            <img
              className="home-icon"
              src={openHome ? homeRed : homeGray}
              alt=""
            />
            <a href="">Unboxing</a>
          </li>
          <li
            onMouseOver={() => setOpenWL(true)}
            onMouseOut={() => setOpenWL(false)}
          >
            <img
              className=""
              src={openWL ? whitelistRed : whitelistGray}
              alt=""
            />
            <a href="">Whitelist</a>
          </li>
          <li
            onMouseOver={() => setOpenPage(true)}
            onMouseOut={() => setOpenPage(false)}
          >
            <img className="" src={openPage ? pageRed : pageGray} alt="" />
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
          All additional information is listed at the{" "}
          <a className="caption__white-link" href="#">
            bottom of the page
          </a>
        </p>
      </div>
    </div>
  );
};

export default DesktopSideNav;
