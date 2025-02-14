import React from "react"; 
import "./TopBar.css"; 

const TopBar = ({isMenuOpen, toggleMenu}) => { 
    return (
        <div className="topbar-container">
            <span  className="topbar-logo">DAEVA</span>
            <button className="topbar-menu-button" onClick={toggleMenu}>
                {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </button>

            <div className="topbar-contact">
                <span className="topbar-icon"><i class="fa-regular fa-envelope"></i></span>
                <div className="topbar-email">
                    <span className="tb-email">email</span> 
                    <span className="tb-address">office@daeva.ro</span> 
                </div>
            </div>
        </div>
    )
}

export default TopBar