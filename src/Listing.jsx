import React from "react";
import "./Listing.css";

// Basically hardcoded the name, distance and everything except the image cos they were all Constant.

const Listing = ({ image }) => {
  return (
    <>
      <div id="listing_container">
        <div id="image_container">
          <img src={require(`./images/${image}`)} alt="" id="listing_img"></img>
        </div>
        <div className="listing_details">
          <p id="listing_name">Desert king</p>
          <p id="per-night">1MBT per night</p>
        </div>
        <div className="listing_details2">
          <p id="listing_distance">2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <img src={require("./images/rating.png")} alt="" id="rating"></img>
      </div>
    </>
  );
};

export default Listing;
