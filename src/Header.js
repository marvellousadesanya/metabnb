import React from "react";
import "./Header.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Nav />
      <header>
        <div className="main_frame">
          <div className="info">
            <h1>
              Rent a <span>Place</span> away from <span> Home</span> in the
              <span> Metaverse</span>
            </h1>
            <p className="support_text">
              We provide you access to luxury and affordable houses<br></br>in
              the metaverse, get a chance to turn your<br></br> imagination to
              reality at your comfort zone
            </p>
            <input className="search" type="email"></input>
            <button className="search_btn">search</button>
          </div>

          <div className="picture_grid">
            <div id="grid1">
              <img
                className="floating2"
                src={require("./images/image 3.png")}
                alt=""
              ></img>
              <img
                className="floating"
                src={require("./images/image 4.png")}
                alt=""
              ></img>
            </div>
            <div id="grid2">
              <img
                className="floating"
                src={require("./images/image 5.png")}
                alt=""
              ></img>
              <img
                className="floating2"
                src={require("./images/image 6.png")}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
