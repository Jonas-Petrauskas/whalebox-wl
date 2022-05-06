import React from "react";
import "./walletComponent.scss";

const WalletConnect = () => {
  return (
    <div className="side-nav__wallet__wrapper">
      <h3>YOUR WALLET</h3>
      <p>All information about your wallet will be shown here</p>
      <button className="wallet-connect__btn">CONNECT WALLET</button>
    </div>
  );
};

export default WalletConnect;
