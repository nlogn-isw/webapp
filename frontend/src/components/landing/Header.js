import React from "react";
import "./Header.css"; // Import CSS file for styling

const Header = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>

                <li> <a href="/login"><button className="login">Login</button> </a></li>
            </ul>
        </nav>
    );
};

export default Header;
