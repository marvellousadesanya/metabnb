import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer_arrangement">
        <div>
          <img
            src={require("./images/logo-white.png")}
            alt=""
            id="footer_logo"
          ></img>
          <div id="footer_icons">
            <img src={require("./images/fb-icon.png")} alt="fb logo"></img>
            <img src={require("./images/ig-icon.png")} alt="instagram"></img>
            <img src={require("./images/twi-icon.png")} alt="instagram"></img>
          </div>
        </div>
        <div>
          <h4>Community</h4>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div>
          <h4>Places</h4>
          <p>Castles</p>
          <p>Farms</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div>
          <h4>About us</h4>
          <p>Road map</p>
          <p>Creators</p>
          <p>Career</p>
          <p>Contact us</p>
        </div>
      </div>
      {/* <p id="copyright">2022 Metabnb</p> */}
    </footer>
  );
};

export default Footer;
