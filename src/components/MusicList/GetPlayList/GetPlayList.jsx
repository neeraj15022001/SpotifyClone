import React, { useEffect, useState } from "react";
import "../MusicList.css";
import "../../CommonCSS/style.css";
import MusicCard from "../../MusicCard/MusicCard.jsx";
import { accessToken } from "../../accessToken.js";
import { reduceStringSize } from "../../commonFunctions";

function ArtistList({ title, url }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", accessToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result.tracks.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="musicList contentPadding">
      <h1>{title}</h1>
      <div className="musicList__Card__Container contentMargin">
        {data.map((item) => (
          <MusicCard
            key={item.track.id}
            image={item.track.album.images[0].url}
            name={reduceStringSize({
              name: item.track.name.toLowerCase(),
            })}
            artistName={item.track.artists[0].name}
          />
        ))}
      </div>
    </div>
  );
}

export default ArtistList;
