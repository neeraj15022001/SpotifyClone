import React from "react";
import "./Left.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PictureInPictureAltIcon from '@material-ui/icons/PictureInPictureAlt';

function Left() {
  return (
    <div className="left">
      <div className="left__image"></div>
      <div className="left__text">
          <a href="#">Aaj Phir Se</a>
          <a href="#">Gajendra Verma</a>
      </div>
      <div className="left__icons">
        <FavoriteBorderIcon className="left__icons_icon" />
        <PictureInPictureAltIcon  className="left__icons_icon"/>
      </div>
    </div>
  );
}

export default Left;
