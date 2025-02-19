import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
  
        <div className="footer-brand">
          <h2 className="footer-logo">DAEVA</h2>
          <p className="footer-text">Game production, bringing awesome concepts to life.</p>
        </div>


        <div className="footer-contact">
          <h3>Contact</h3>
          <p><i class="fa-regular fa-envelope"></i> <a href="mailto:office@daeva.ro">office@daeva.ro</a></p>
          <p><i class="fa-solid fa-globe"></i> <a href="https://www.studio.daeva.ro" target="_blank" rel="noopener noreferrer">studio.daeva.ro</a></p>
        </div>

        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>Full Development</li>
            <li>Product Development</li>
            <li>Art Production</li>
            <li>Marketing</li>
            <li>Cross-Platform Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
