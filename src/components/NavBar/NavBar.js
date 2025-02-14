import React from "react";  
import "./NavBar.css";

const NavBar = ({ isMenuOpen, closeMenu }) => {
    return (
        <div className={`navbar-container ${isMenuOpen ? "open" : ""}`}>
            <button className="navbar-close-button" onClick={closeMenu}><i class="fa-solid fa-xmark"></i></button>
            <ul className="navbar-buttons">
                <li>Home</li>
                <li>About Studio</li>
                <li>Our Services</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default NavBar;