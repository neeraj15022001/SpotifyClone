import React from "react";
import "./recentMusic.css";
import RecentMusicTile from "../recentMusicTile/RecentMusicTile.jsx";

function recentMusic() {
  return (
    <div className="recentMusic">
      <h1>Good Evening</h1>
      <div className="recentMusic__tile__container">
        <RecentMusicTile />
        <RecentMusicTile />
        <RecentMusicTile />
        <RecentMusicTile />
      </div>
    </div>
  );
}

export default recentMusic;
