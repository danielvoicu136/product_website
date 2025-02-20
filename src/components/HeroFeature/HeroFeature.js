import React from "react";
import "./HeroFeature.css";
import imgHero from "../../assets/images/game.jpg"; 

const HeroFeature = () => {
  return (
    <div className="hero-feature">
      <div className="hero-image">
      <img src={imgHero} alt="Expertise" />  
      </div>
      <div className="hero-content">
        <h3>Why Choose Us?</h3>
        <h1>Long gaming expertise</h1>
        <ul>
            <li><i class="fa-regular fa-circle-check"></i> Client-first mindset</li>
            <li><i class="fa-regular fa-circle-check"></i> Lifelong gamers</li>
            <li><i class="fa-regular fa-circle-check"></i> Quality-focused</li>
            <li><i class="fa-regular fa-circle-check"></i> Flexible approaches</li>
            <li><i class="fa-regular fa-circle-check"></i> Budget-friendly</li>
        </ul>
        <hr></hr>
      </div>
    </div>
  );
};

export default HeroFeature;
