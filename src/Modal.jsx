import React from "react";
import "./Modal.css";

const Modal = ({ open, close }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div id="modal_window">
        <div id="connect-wallet">
          <h3>Connect Wallet</h3>
          <img
            src={require("./images/x.png")}
            alt=""
            id="cancel_btn"
            onClick={close}
          />
        </div>
        <hr></hr>
        <div>
          <p id="choose_crypto">Choose your preferred wallet:</p>
          <div className="coin-background" id="metamask">
            <img
              src={require("./images/metamask-logo.png")}
              alt="metamask"
              className="coin-icon"
            ></img>
            <p className="coin">Metamask</p>
            <img
              src={require("./images/More.png")}
              alt=""
              className="more_icon"
            />
          </div>
          <div className="coin-background" id="wallet-connect">
            <img
              className="coin-icon"
              src={require("./images/walletconnect-logo.png")}
              alt="walletconnect"
            ></img>
            <p className="coin">WalletConnect</p>
            <img
              src={require("./images/More.png")}
              alt=""
              className="more_icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
