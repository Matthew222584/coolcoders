import "./backgroundcarosel.css";
import Home from "./home";
import { useState } from "react";

export default function BackgroundSelect({ pageIndex, setIndex }) {
    

    const [activeIndex, setActiveIndex] = useState(0);
    const [backgroundImg, setBackgroundImg] = useState("");
  
  
    const imagePaths = [
      '/src/assets/logo1.png',
      '/src/assets/logo2.png',
      '/src/assets/logo3.png',
      '/src/assets/logo4.png',
      '/src/assets/logo5.png',
    ];
  
  
  
    const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1));
    };

    function declareBackgroundImage(image) {
        setBackgroundImg(image);
        console.log(backgroundImg);

    }

    return (

        <div className="carousel-container">
        <div className="carousel-controls-container">
          <button className="prev-button" onClick={prevSlide}>
            &lt;
          </button>
          {imagePaths.map((path, index) => (
            <img
              key={index}
              className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
              src={path}
              alt={`Image ${index + 1}`}
            />
          ))}
          <button className="next-button" onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <button className="select-button" onClick={() => declareBackgroundImage(imagePaths[activeIndex])}>
          Select
        </button>
      </div>

    );
}  