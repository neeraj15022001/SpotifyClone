import React from "react";
import "./Content.css";
import Navbar from "../Navbar/Navbar.jsx";
import RecentMusic from "../RecentMusic/RecentMusic.jsx";
import MusicList from "../MusicList/MusicList.jsx";
import ArtistList from "../MusicList/ArtistList/ArtistList.jsx";
import Playlist from "../MusicList/UserPlaylist/UserPlaylist.jsx";
import UserSavedAlbums from "../MusicList/UserSavedAlbums/UserSavedAlbums.jsx";
import GetPlayList from "../MusicList/GetPlayList/GetPlayList.jsx"
import {artist,porscheLove,sashaSloan,loveAlarm,wTwoWorld,loveScenery, playListHits2021} from "../endpoints.js"
import {artistHeading,porscheLoveHeading,sashaSloanHeading,loveAlarmHeading,wTwoWorldHeading,loveSceneryHeading,playlistHits2021Heading} from "../title.js"

function Content() {
  return (
    <div className="content">
      <Navbar />
      <RecentMusic />
      {/* <GetPlayList title={loveSceneryHeading} url={loveScenery} /> */}
      <GetPlayList title={playlistHits2021Heading} url={playListHits2021} />
      <MusicList />
      <GetPlayList title={wTwoWorldHeading} url={wTwoWorld} />
      <ArtistList title={artistHeading} url={artist} />
      <Playlist />
      <UserSavedAlbums />
      <ArtistList title={porscheLoveHeading} url={porscheLove} />
      <ArtistList title={sashaSloanHeading} url={sashaSloan} />
      <GetPlayList title={loveAlarmHeading} url={loveAlarm} />
    </div>
  );
}

export default Content;
