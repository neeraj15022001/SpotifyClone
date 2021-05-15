import React, { useEffect, useState } from "react";
import "./recentMusic.css";
import "../CommonCSS/style.css";
import RecentMusicTile from "../RecentMusicTile/RecentMusicTile.jsx";
import {accessToken} from "../accessToken.js";
import {recentMusic} from "../endpoints.js";
import {recentMusicHeading} from "../title.js"
 
function RecentMusic() {
  const [data, setData] = useState([])
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      accessToken
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      recentMusic ,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.items))
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <div className="recentMusic contentPadding">
      <h1>{recentMusicHeading}</h1>
      <div className="recentMusic__tile__container contentMargin">
        {data.map((item,index) => (
          <RecentMusicTile key={index} songName={item.track.name} image={item.track.album.images[2].url} />
        ))}
      </div>
    </div>
  );
}

export default RecentMusic;
