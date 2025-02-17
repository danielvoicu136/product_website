import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./HeroSlider.css";
import dataHeroSlider from "../../utils/dataHeroSlider";

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((slide) => (slide + 1) % dataHeroSlider.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentSlide]);

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
                <motion.div 
                    key={currentSlide}
                    className="hero-slide-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {slide.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {slide.description}
                    </motion.p>
                    <motion.a
                        href={slide.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-slider-button"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {slide.buttonText} <i className="fa-solid fa-arrow-right"></i>
                    </motion.a>
                </motion.div>
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
