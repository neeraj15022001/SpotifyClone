import React from "react";
import "./Content.css";
import Navbar from "../navbar/Navbar.jsx";
import RecentMusic from "../recentMusic/RecentMusic.jsx";
import MusicList from "../MusicList/MusicList.jsx";
import ArtistList from "../MusicList/ArtistList/ArtistList.jsx";
import Playlist from "../MusicList/Playlist/Playlist.jsx";

function Content() {
  return (
    <div className="content">
      <Navbar />
      <RecentMusic />
      <MusicList />
      <ArtistList />
      <Playlist />
    </div>
  );
}

export default Content;
