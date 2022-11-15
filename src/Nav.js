import React from "react";
import "./Nav.css";
import Modal from "./Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  // State for showing modal window
  const [openModal, setOpenModal] = useState(false);

  // State for showing mobile nav menu
  const [isMobile, setMobile] = useState(false);
  return (
    <div>
      <nav>
        <div id="logo_icon">
          <Link to="/">
            <img src={require("./images/Metabng_logo.png")} alt="" />
          </Link>
        </div>
        <i
          className="fa-solid fa-bars"
          id="hamburger-menu"
          onClick={() => setMobile(!isMobile)}
        ></i>
        <i
          className={
            isMobile ? "fa-solid fa-xmark show_cancel_btn" : "fa-solid fa-xmark"
          }
          id="cancel-menu_btn"
          onClick={() => setMobile(!isMobile)}
        ></i>

        {/* If in mobile view, show the mobile menu style when clicked. */}
        <ul className={isMobile ? "show" : ""}>
          <Link to="/" className="link">
            <li>Home</li>
          </Link>

          <Link to="/places" className="link">
            <li>Place to stay</li>
          </Link>

          <li>NFTs</li>
          <li>Community</li>
        </ul>
        <button
          onClick={() => {
            setOpenModal(true);
            setMobile(false);
          }}
          className={isMobile ? "connect_btn show_connect_btn" : "connect_btn"}
        >
          Connect to wallet
        </button>
      </nav>
      <Modal open={openModal} close={() => setOpenModal(false)} />
    </div>
  );
};

export default Nav;
