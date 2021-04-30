import React, { useEffect } from "react";
import "./musicList.css";
import "../CommonCSS/style.css";
import MusicCard from "../MusicCard/MusicCard.jsx";

function MusicList() {
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer BQAdeCeYZA1nJeTKJudij0ECq3ZJnUiyVnBxGjPJCpkmtQuMOJAGJnIFz_HpWx5yfOODF0LCuUN-_FdJe5IXGzFIA-9xjzrGOc2yn_I1HrYl8Oxf1QIgZlJIhkJzyFavG_FXPEepJLgicSV5dNkkInhU6MIBkrqO-z5sRAaMH7uARY3MDqO_OUpdgI5xYxVuv4RdpRDKf-oYslfGNdKOiN5SazwL6taOzmnfIo8lW9igFuDdSUYByEd6kcIe_sti0iv-XdJ07M6_5smZ2Zd5LR6JVZp-5PenOu3GFCPE"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.spotify.com/v1/tracks?ids=3n3Ppam7vgaVa1iaRUc9Lp,3twNvmDtFQtAd5gMKedhLD&market=ES",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  });
  return (
    <div class="musicList contentPadding">
      <h1>Recently Played</h1>
      <div className="musicList__Card__Container contentMargin">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  );
}

export default MusicList;
