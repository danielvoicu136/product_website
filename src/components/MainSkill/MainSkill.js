import React from "react";
import "./MainSkill.css";

import imgSkill from "../../assets/images/flex.jpg"; 

const MainSkill = () => {
  return (
    <div className="main-skill">
      <div className="main-skill-content">
        <h3 className="main-skill-subtitle">We have Super Powers!</h3>
        <h2 className="main-skill-title">
            Always flexible, ready for new projects and technologies
        </h2>
        <p className="main-skill-description">
            Covering the various needs of the entertainment industry for a long time
        </p>
            <button className="main-skill-button">MORE ABOUT DAEVA</button>
            <div className="main-skill-card"> 
                <i class="fa-solid fa-microchip"></i> 
                <div className="main-skill-card-content"> 
                    <h3>Quality Focused</h3>
                    <p>Aligned with player needs and feedback</p>
                </div>
            </div>
    </div>
    <div className="main-skill-image">
                <img src={imgSkill} alt="Skill" />
    </div>
</div>
  );
};

export default MainSkill;
