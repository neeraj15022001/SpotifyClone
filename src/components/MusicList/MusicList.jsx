import React from "react";
import "./musicList.css";
import "../CommonCSS/style.css";
import MusicCard from "../MusicCard/MusicCard.jsx";

function MusicList() {
  return (
    <div class="musicList contentPadding">
      <h1>Recently Played</h1>
      <div className="musicList__Card__Container contentMargin">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  );
}

export default MusicList;
    