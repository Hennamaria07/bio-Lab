import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { slider } from "../data/Data";
function Hero() {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === slider.length - 1 ? 0 : slide + 1);
      };
    
      const prevSlide = () => {
        setSlide(slide === 0 ? slider.length - 1 : slide - 1);
      };
    
      return (
        <div className="carousel">
          <AiOutlineLeft onClick={prevSlide} className="arrow arrow-left" />
          {slider.map((item, index) => {
            return (
                <div className={slide === index ? "slide" : "slide slide-hidden"}>
                    <div className="image-container">
                    <img
                      src={item.img}
                      alt={item.index}
                      key={index}
                      className="slide-image"
                    />
                    </div>

              <div className="slide-content">
                <div></div>
                <div></div>
                <h1 className="slide-text">{item.title}</h1>
                <a href="#" class="btn mt-4">
                    <span class="btn-inner">Learn More</span>
                </a>
                <div></div>
              </div>
              </div>
            );
          })}
          
          <AiOutlineRight onClick={nextSlide} className="arrow arrow-right"/>
          <span className="indicators">
            {slider.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    slide === index ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(index)}
                ></button>
              );
            })}
          </span>
        </div>
      );
    };

export default Hero;



