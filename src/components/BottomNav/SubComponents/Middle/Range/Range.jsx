import React from 'react';
import "./Range.css";

function Range() {
    return (
        <div className="range">
            <p>0:00</p>
            <input type="range" max="100"  />
            <p>4:30</p>
        </div>
    )
}

export default Range
