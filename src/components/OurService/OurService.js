import React from "react";
import "./OurService.css";
import dataOurService from "../../utils/dataOurService";

const OurService = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Services We Provide</h2>
      <div className="services-spacer"></div>
      <div className="services-grid">
        {dataOurService.map((service) => (
          <a 
            key={service.id} 
            href={service.link} 
            className="service-card" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OurService;
