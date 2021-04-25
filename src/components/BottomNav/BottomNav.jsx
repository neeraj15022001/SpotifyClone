import React from 'react';
import "./BottomNav.css";
import Left from "./SubComponents/Left/Left.jsx";
import Middle from "./SubComponents/Middle/Middle.jsx";
import Right from "./SubComponents/Right/Right.jsx";

function BottomNav() {
    return (
        <div className="bottom">
            <Left />
            <Middle />
            <Right />
        </div>
    )
}

export default BottomNav
