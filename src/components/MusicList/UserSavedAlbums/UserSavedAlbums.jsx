import React, { useEffect, useState } from "react";
import "../musicList.css";
import "../../CommonCSS/style.css";
import MusicCard from "../../MusicCard/MusicCard.jsx";
import {accessToken} from "../../accessToken";
import {userSavedAlbumsURL} from "../../endpoints.js"
import {userSavedAlbumsHeading} from "../../title.js"
import {reduceStringSize} from "../../commonFunctions"

function UserSavedAlbums() {
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
      userSavedAlbumsURL,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result.items)
      })
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <div className="musicList contentPadding">
      <h1>{userSavedAlbumsHeading}</h1>
      <div className="musicList__Card__Container contentMargin">
        {data.map(item => (
          <MusicCard key={item.album.id} image={item.album.images[0].url} name={reduceStringSize({name:item.album.name})} artistName={item.album.artists[0].name} />
        ))}
      </div>
    </div>
  );
}

export default UserSavedAlbums;
