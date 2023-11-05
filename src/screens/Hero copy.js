import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

function Hero() {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
      };
    
      const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
      };
    
      return (
        <div className="carousel">
          {data.map((item, idx) => {
            return (
                <div className={slide === idx ? "slide" : "slide slide-hidden"}>
              <img
                src={item.src}
                alt={item.alt}
                key={idx}
                className="slide-image"
              />
              <h1 className="slide-text">hhhhhhhhhhhhhhhhhhhhhhh</h1>
              </div>
            );
          })}
          <AiOutlineLeft onClick={prevSlide} className="arrow arrow-left" />
          <AiOutlineRight onClick={nextSlide} className="arrow arrow-right"/>
          <span className="indicators">
            {data.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </span>
        </div>
      );
    };

export default Hero;



const data= [
    {
      "src": "https://picsum.photos/seed/img1/600/400",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img2/600/400",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img3/600/400",
      "alt": "Image 3 for carousel"
    }
  ]