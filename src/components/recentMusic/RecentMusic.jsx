import React from "react";
import "./recentMusic.css";
import "../CommonCSS/style.css";
import RecentMusicTile from "../recentMusicTile/RecentMusicTile.jsx";

function recentMusic() {
  return (
    <div className="recentMusic contentPadding">
      <h1>Good Evening</h1>
      <div className="recentMusic__tile__container contentMargin">
        <RecentMusicTile />
        <RecentMusicTile />
        <RecentMusicTile />
        <RecentMusicTile />
      </div>
    </div>
  );
}

export default recentMusic;
