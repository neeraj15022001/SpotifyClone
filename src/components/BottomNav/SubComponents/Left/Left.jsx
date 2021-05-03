import React, { useState } from "react";
import "./Left.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PictureInPictureAltIcon from "@material-ui/icons/PictureInPictureAlt";

function Left() {
  const greenColor = "#64D762";
  const [isEnabled, setEnable] = useState(false);
  function enableAnimation() {
    setEnable((isEnabled) => {
      return !isEnabled;
    });
    console.log(isEnabled);
  }
  return (
    <div className="left">
      <div className="left__image"></div>
      <div className="left__text">
        <a href="#">Aaj Phir Se</a>
        <a href="#">Gajendra Verma</a>
      </div>
      <div className="left__icons">
        <FavoriteIcon
          className="left__icons__icon"
          style={{
            fill: isEnabled ? greenColor : "white",
            animation: isEnabled ? "popUp 0.5s ease-in-out" : "",
          }}
          onClick={enableAnimation}
          id="favorite__icon"
        />
        <PictureInPictureAltIcon />
      </div>
    </div>
  );
}

export default Left;
