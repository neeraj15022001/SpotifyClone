import React from 'react';
import "./Login.css";
import image from '../../../assets/spotify_baner.png';

function Login() {
    return (
        <div className="login">
            <img src={image} alt="spotify" className="login__image"/>
            <button className="login__button">Login</button>
        </div>
    )
}

export default Login
