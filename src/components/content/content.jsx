import React from 'react';
import "./content.css";
import Navbar from "../navbar/Navbar.jsx";
import RecentMusic from "../recentMusic/RecentMusic.jsx";
import MusicList from "../MusicList/MusicList.jsx";

function Content() {
    return (
        <div className="content">
            <Navbar />
            <RecentMusic />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />
            <MusicList />

        </div>
    )
}

export default Content
