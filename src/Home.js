import React from "react";
import { useEffect } from "react";
import Header from "./Header";
import Listing from "./Listing";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <>
      <Header />

      <div id="icons-display">
        <img
          src={require("./images/MBToken.png")}
          alt=""
          className="bar_icons"
        ></img>
        <img
          src={require("./images/Metamask.png")}
          alt=""
          className="bar_icons"
        ></img>
        <img
          src={require("./images/Opensea.png")}
          alt=""
          className="bar_icons"
        ></img>
      </div>
      <div id="listings">
        <div id="listings_heading" data-aos="fade-up">
          <h2 id="heading_inspiration">Inspiration for your next adventure</h2>
        </div>

        <div id="listing_grid_container">
          <div id="listing_grid">
            <Listing image="Listing1.png" data-aos="fade-up" />
            <Listing image="Listing2.png" data-aos="fade-up" />
            <Listing image="Listing3.png" data-aos="fade-down" />
            <Listing image="Listing4.png" />
            <Listing image="Listing5.png" data-aos="fade-up" />
            <Listing image="Listing6.png" data-aos="fade-down" />
            <Listing image="Listing7.png" />
            <Listing image="Listing8.png" data-aos="zoom-in" />
          </div>
        </div>
      </div>

      <div id="nft_space">
        <div id="nft_text_section">
          <h2 id="meta-heading">Metabnb NFTs</h2>
          <p id="meta-text">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services
          </p>
          <button id="learn-more_btn">Learn more</button>
        </div>

        <div id="nft_image_section">
          <img
            src={require("./images/image 7.png")}
            alt=""
            className="img_nft1"
          ></img>
          <img
            src={require("./images/image 8.png")}
            className="img_nft2"
            alt=""
          ></img>
          <img
            src={require("./images/image 9.png")}
            className="img_nft3"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default Home;
