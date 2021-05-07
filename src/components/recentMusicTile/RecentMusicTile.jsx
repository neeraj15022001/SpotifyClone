import React from "react";
import "./recentMusicTile.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

function RecentMusicTile({songName,image}) {
  return (
    <div className="recentMusicTile">
      <div className="recentMusicTile__image" style={{background:`url(${image})`}}></div>
      <div className="recentMusicTile__name__container">
        <p className="recentMusicTile__name">{songName}</p>
        <PlayCircleFilledWhiteIcon className="recentMusicTile__icon" />
      </div>
    </div>
  );
}

export default RecentMusicTile;
