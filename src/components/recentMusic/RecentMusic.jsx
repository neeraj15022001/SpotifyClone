import React, { useEffect, useState } from "react";
import "./recentMusic.css";
import "../CommonCSS/style.css";
import RecentMusicTile from "../recentMusicTile/RecentMusicTile.jsx";

function RecentMusic() {
  const [data, setData] = useState([])
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer BQC7L-RRmxN_9-UdXuM-SV10T62ffiCXWCRlKO9h_OM7FqCB-RJbrI8JZexY0f96GJetgkWnI92ZHOdf1G-50mQ5xFCR4gUSHtpiLgODTtMnJfImJi7PuwB-2U1uVGmUu_OZBegTEx7ig4kMDw7RADHDhNdG6xvo8GYbTfINN8VLXjL7sJRGowK2DDDCXdg1785XkjD6CLq8Uf4lWoOTVdiHzfXc0reM_RSAOtSiQsuKpQXibC2U4EDl8kOmQxtjNg87Ph7jeJ4Y9JQ7ZBug2FXaObGqFKJZyTEGEwqh"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=6",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.items))
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <div className="recentMusic contentPadding">
      <h1>Good Evening</h1>
      <div className="recentMusic__tile__container contentMargin">
        {data.map((item,index) => (
          <RecentMusicTile key={index} songName={item.track.name} image={item.track.album.images[2].url} />
        ))}
      </div>
    </div>
  );
}

export default RecentMusic;
