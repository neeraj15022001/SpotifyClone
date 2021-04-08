import React from 'react';
import "./content.css";
import Navbar from "../navbar/Navbar.jsx";
import RecentMusic from "../recentMusic/RecentMusic.jsx";


function content() {
    return (
        <div className="content">
            <Navbar />
            <RecentMusic />
        </div>
    )
}

export default content
