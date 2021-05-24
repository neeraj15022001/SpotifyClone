import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Content from "./components/Content/Content";
import BottomNav from "./components/BottomNav/BottomNav.jsx";
import Login from "./components/pages/Login/Login";
import { SpotifyApiContext } from "react-spotify-api";
import Cookies from "js-cookie";
// import "react-spotify-auth/dist/index.css";

function App() {
  const token = Cookies.get("spotifyAuthToken");
  return (
    <div className="app">
      {/* <Sidebar /> */}
      {/* <Content /> */}
      {/* <BottomNav /> */}

      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {/* Your Spotify Code here */}
          <Sidebar />
          <Content />
          <BottomNav />
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <Login />
      )}
    </div>
  );
}

export default App;
