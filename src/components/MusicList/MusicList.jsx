import React, { useEffect, useState } from "react";
import "./musicList.css";
import "../CommonCSS/style.css";
import MusicCard from "../MusicCard/MusicCard.jsx";

function MusicList({title, accessToken, url}) {
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
      url,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result)
        // console.log(result.albums)
        setData(result.albums.items)
      })
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <div class="musicList contentPadding">
      <h1>{title}</h1>
      <div className="musicList__Card__Container contentMargin">
        {data.map(item => (
          <MusicCard key={item.id} image={item.images[0].url} albumName={item.name} artistName={item.artists[0].name} />
        ))}
      </div>
    </div>
  );
}

export default MusicList;
