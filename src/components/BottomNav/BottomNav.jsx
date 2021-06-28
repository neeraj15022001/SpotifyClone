import React, { useState, useEffect } from "react";
import "./BottomNav.css";
import Left from "./SubComponents/Left/Left.jsx";
import Middle from "./SubComponents/Middle/Middle.jsx";
import Right from "./SubComponents/Right/Right.jsx";
import { accessToken } from "../accessToken.js";

function BottomNav() {
  const [data, setData] = useState();
  useEffect(() => {
    console.log("in use effect")
    var myHeaders = new Headers();
    myHeaders.append("Authorization", accessToken);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://api.spotify.com/v1/me/player?market=IN", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <div className="bottom">
      <Left
        trackName={!data ? "Fetching..." : data.item.name}
        artist={!data ? "Fetching..." : data.item.artists[0].name}
        image={!data ? "" : data.item.album.images[0].url}
      />
      <Middle />
      <Right />
    </div>
  );
}

export default BottomNav;
