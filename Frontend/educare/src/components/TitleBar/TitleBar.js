import './TitleBar.css';
import React from 'react';
import logo from '../image/educare-logo.png';


export default function TitleBar() {
    return (
        <header>
            <a href="/LandingPage">
            <img
                src={logo}
                className="educare-logo"
                alt="logo" />
            </a>
        </header>
    )
}




