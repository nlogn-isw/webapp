import React from "react";
import "./Header.css"; // Import CSS file for styling

const Header = () => {
    return (
        <nav className="navbar">
            <img src="https://insightsoftware.com/wp-content/themes/insightsoftware/images/insightsoftware-logo-color.svg" alt="Logo" className="logo" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>

                <li> <a href="/login"><button className="login">Login</button> </a></li>
            </ul>
        </nav>
    );
};

export default Header;
