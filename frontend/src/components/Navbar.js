import React from "react";
import "./Navbar.css";




const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/twitter" className="nav-link">Twitter</a>
                </li>
                <li className="nav-item">
                    <a href="/feed" className="nav-link">Feed</a>
                </li>
                <li className="nav-item">
                    <a href="/updates" className="nav-link">Updates</a>
                </li>
                <li className="nav-item">
                    <a href="/vacancies" className="nav-link">Vacancy</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;