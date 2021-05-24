import React, { useEffect, useState } from "react";
import "./MusicList.css";
import "../CommonCSS/style.css";
import MusicCard from "../MusicCard/MusicCard.jsx";
import {accessToken} from "../accessToken.js";
import {album} from "../endpoints.js"
import {albumHeading} from "../title.js"
import {reduceStringSize} from "../commonFunctions"

function MusicList() {
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
      album,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.albums.items)
      })
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <div className="musicList contentPadding">
      <h1>{albumHeading}</h1>
      <div className="musicList__Card__Container contentMargin">
        {data.map(item => (
          <MusicCard key={item.id} image={item.images[0].url} name={reduceStringSize({name:item.name})} artistName={item.artists[0].name} />
        ))}
      </div>
    </div>
  );
}

export default MusicList;
