import React from "react";
import "./navbar.css";
import Avatar from "@material-ui/core/Avatar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function navbar() {
  return (
    <div className="navbar">
      <div className="navbar__button">
        <button className="navbar__button__design">
          <ArrowBackIosIcon className="navbar__button__icon"/>
        </button>
        <button className="navbar__button__design">
          <ArrowForwardIosIcon className="navbar__button__icon" />
        </button>
      </div>
      <Avatar />
    </div>
  );
}

export default navbar;
