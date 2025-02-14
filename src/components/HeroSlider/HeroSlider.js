import React, { useState, useEffect } from "react";  
import "./HeroSlider.css";
import dataHeroSlider from "../../utils/dataHeroSlider";

const HeroSlider = () => { 
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((slide) => (slide + 1) % dataHeroSlider.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []); // ✅ Runs only once when the component mounts

    if (!dataHeroSlider || dataHeroSlider.length === 0) {
        return <div className="hero-slider-container">No slides available</div>;
    }

    const nextSlide = () => { 
        setCurrentSlide((slide) => (slide + 1) % dataHeroSlider.length);
    };
        
    const prevSlide = () => { 
        setCurrentSlide((slide) => (slide - 1 + dataHeroSlider.length) % dataHeroSlider.length);
    };

    const goToSlide = (index) => { 
        setCurrentSlide(index);
    };

    const slide = dataHeroSlider[currentSlide];

    return ( 
        <div className="hero-slider-container">
            <button className="hs-back-btn" onClick={prevSlide} aria-label="Previous Slide">
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="hs-next-btn" onClick={nextSlide} aria-label="Next Slide">
                <i className="fa-solid fa-angle-right"></i>
            </button>

            <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="hero-slide-content"> 
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <a 
                        href={slide.buttonLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hero-slider-button"
                    >
                        {slide.buttonText} <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>

            <div className="hero-slider-dots"> 
                {dataHeroSlider.map((_, index) => (
                    <span
                        key={`dot-${index}`}
                        className={`dot ${currentSlide === index ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
