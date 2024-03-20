import React from "react";
import "./Header.css"; // Import CSS file for styling

const Header = () => {
    return (
        <nav className="navi">
            <a href="https://insightsoftware.com/">
                <img src="https://insightsoftware.com/wp-content/themes/insightsoftware/images/insightsoftware-logo-color.svg" alt="Logo" className="logo" />
            </a>
            
            <ul>
                <li><a href="https://insightsoftware.com/">Home</a></li>
                <li><a href="https://insightsoftware.com/about/">About</a></li>

                <li> <a href="/login"><button className="login">Login</button> </a></li>
            </ul>
        </nav>
    );
};

export default Header;