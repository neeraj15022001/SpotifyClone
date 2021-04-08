import React from "react";
import "./recentMusicTile.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

function RecentMusicTile() {
  return (
    <div className="recentMusicTile">
      <div className="recentMusicTile__image"></div>
      <div className="recentMusicTile__name__container">
        <p className="recentMusicTile__name">Gajendra Verma</p>
        <PlayCircleFilledWhiteIcon className="recentMusicTile__icon" />
      </div>
    </div>
  );
}

export default RecentMusicTile;
