import React from "react";
import "./Login.css";
import image from "../../../assets/spotify_baner.png";
import { SpotifyAuth, Scopes } from "react-spotify-auth";

function Login() {
  return (
    <div className="login">
      <img src={image} alt="spotify" className="login__image" />
      {/* <button className="login__button"> */}
        <SpotifyAuth
          redirectUri="http://localhost:3000/callback"
          clientID="42b4de6c994644ffbe33fde0d2bc8bf4"
          scopes={[Scopes.userReadPrivate, "user-read-email"]} // either style will work
          btnClassName="login__button"
          showDialog={true}
          noLogo={true}
        />
      {/* </button> */}
    </div>
  );
}

export default Login;
