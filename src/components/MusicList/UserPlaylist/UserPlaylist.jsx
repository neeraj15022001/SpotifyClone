import React, { useEffect, useState } from "react";
import "../musicList.css";
import "../../CommonCSS/style.css";
import MusicCard from "../../MusicCard/MusicCard.jsx";
import {accessToken} from "../../accessToken.js"
import {playlist} from "../../endpoints.js"
import {playlistHeading} from "../../title.js"
import {reduceStringSize} from "../../commonFunctions"

function ArtistList() {
  const [data, setData] = useState([]);
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

    fetch(playlist, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="musicList contentPadding">
      <h1>{playlistHeading}</h1>
      <div className="musicList__Card__Container contentMargin">
        {data.map((item) =>
            <MusicCard key={item.id} image={item.images[0].url} name={reduceStringSize({name:item.name.toLowerCase()})} artistName={item.owner.displayName} />
        )}
      </div>
    </div>
  );
}

export default ArtistList;
