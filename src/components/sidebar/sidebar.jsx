import React from "react";
import "./Sidebar.css";
import image from "../../assets/spotify_baner.png";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';

function sidebar() {
  return (
    <div className="sidebar">
      <img src={image} alt="spotify-banner" className="sidebar__bannerImage" />

      <div className="sidebar__pages">
        <ul className="sidebar__pages__list">
          <li>
            <HomeIcon className="sidebar__pages__list__icon" /> Home
          </li>
          <li>
            <SearchIcon className="sidebar__pages__list__icon" /> Search
          </li>
          <li>
            <LibraryMusicIcon className="sidebar__pages__list__icon" />
            Your Library
          </li>
        </ul>
      </div>

      <div className="sidebar__userPlaylist">
        <ul className="sidebar__userPlaylist__list">
            <li><AddBoxIcon className="sidebar__pages__list__icon" /> Create Playlist</li>
            <li><FavoriteIcon className="sidebar__pages__list__icon" /> Liked Songs</li>
        </ul>
      </div>

      <div className="sidebar__divider">
        <Divider light/>
      </div>
      
    </div>
  );
}

export default sidebar;
