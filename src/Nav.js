import React from "react";
import "./Nav.css";
import Modal from "./Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <nav>
        <div id="logo_icon">
          <Link to="/">
            <img src={require("./images/Metabng_logo.png")} alt="" />
          </Link>
        </div>
        <i className="fa-solid fa-bars" id="hamburger-menu"></i>
        <div id="mobile_menu_view">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>

            <Link to="/places" className="link">
              <li>Place to stay</li>
            </Link>

            <li>NFTs</li>
            <li>Community</li>
          </ul>
          <button onClick={() => setOpenModal(true)} className="connect_btn">
            Connect to wallet
          </button>
        </div>
      </nav>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </div>
  );
};

export default Nav;
