import React from "react";  
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ isMenuOpen, closeMenu }) => {
    return (
        <div className={`navbar-container ${isMenuOpen ? "open" : ""}`}>
            <button className="navbar-close-button" onClick={closeMenu}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <ul className="navbar-buttons">
                <li>
                    <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>About Studio</NavLink>
                </li>
                <li>
                    <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Our Services</NavLink>
                </li>
                <li>
                    <NavLink to="/careers" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Careers</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
