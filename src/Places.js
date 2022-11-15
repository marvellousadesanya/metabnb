import React from "react";
import Nav from "./Nav";
import imgArray from "./imgArray";
import "./Places.css";
import Listing from "./Listing";
import "./Listing.css";

const Places = () => {
  return (
    <>
      <Nav />
      <div id="nav_section">
        <select id="drop-down_menu">
          <option>Restaurant</option>
          <option>Cottage</option>
          <option>Castle</option>
          <option>Fantasy City</option>
          <option>Beach</option>
          <option>Carbins</option>
          <option>Off-grid</option>
          <option>Farm</option>
        </select>
        <div id="places">
          <ul>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantasy City</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
          </ul>
        </div>
        <div id="location_section">
          <p>Location</p>
          <img
            src={require("./images/setting-5.png")}
            alt=""
            id="location_setting"
          ></img>
        </div>
      </div>

      <div id="listing_grid_container">
        <div id="listing_grid">
          {/* Loop through the Listing component and insert the img from imgArray */}
          {imgArray.map((imgRep) => (
            <Listing image={imgRep} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Places;
