import React, { useEffect, useState } from "react";
import "../musicList.css";
import "../../CommonCSS/style.css";
import MusicCard from "../../MusicCard/MusicCard.jsx";
import {accessToken} from "../../accessToken.js";
import {artist} from "../../endpoints.js"
import {artistHeading} from "../../title.js"

function ArtistList() {
  const [data,setData] = useState([])
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
      artist,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.tracks)
      })
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <div className="musicList contentPadding">
      <h1>{artistHeading}</h1>
      <div className="musicList__Card__Container contentMargin">
        {data.map(item => (
          <MusicCard key={item.id} image={item.album.images[0].url} name={item.name} artistName={item.artists[0].name} />
        ))}
      </div>
    </div>
  );
}

export default ArtistList;