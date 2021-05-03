import React from "react";
import "./Content.css";
import Navbar from "../navbar/Navbar.jsx";
import RecentMusic from "../recentMusic/RecentMusic.jsx";
import MusicList from "../MusicList/MusicList.jsx";
import ArtistList from "../MusicList/ArtistList/ArtistList.jsx";

function Content() {
  let accessToken =
    "Bearer BQC7L-RRmxN_9-UdXuM-SV10T62ffiCXWCRlKO9h_OM7FqCB-RJbrI8JZexY0f96GJetgkWnI92ZHOdf1G-50mQ5xFCR4gUSHtpiLgODTtMnJfImJi7PuwB-2U1uVGmUu_OZBegTEx7ig4kMDw7RADHDhNdG6xvo8GYbTfINN8VLXjL7sJRGowK2DDDCXdg1785XkjD6CLq8Uf4lWoOTVdiHzfXc0reM_RSAOtSiQsuKpQXibC2U4EDl8kOmQxtjNg87Ph7jeJ4Y9JQ7ZBug2FXaObGqFKJZyTEGEwqh";
  return (
    <div className="content">
      <Navbar />
      <RecentMusic />
      <MusicList
        title="Albums"
        accessToken={accessToken}
        url="https://api.spotify.com/v1/browse/new-releases?country=IN&limit=20&offset=0"
      />
      <ArtistList
        title="More From Arijit Singh"
        accessToken={accessToken}
        url="https://api.spotify.com/v1/artists/4YRxDV8wJFPHPTeXepOstw/top-tracks?market=IN"
      />
      {/* <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList /> */}
    </div>
  );
}

export default Content;
