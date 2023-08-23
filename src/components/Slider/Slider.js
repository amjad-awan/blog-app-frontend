import React, { useCallback, useEffect, useState } from "react";

import pic1 from "../../assets/Ai.jpeg";
import pic2 from "../../assets/blockchain.jpeg";
import pic3 from "../../assets/web.jpeg";

import "./style.css";
const carouselData = [
  {
    id: 1,
    imageUrl: pic1,
    heading: "Slide 1 Heading",
    paragraph: "Slide 1 Paragraph",
  },
  {
    id: 2,
    imageUrl: pic2,
    heading: "Slide 2 Heading",
    paragraph: "Slide 2 Paragraph",
  },
  {
    id: 3,
    imageUrl: pic3,
    heading: "Slide 3 Heading",
    paragraph: "Slide 3 Paragraph",
  },
  {
    id: 4,
    imageUrl: pic3,
    heading: "Slide 4 Heading",
    paragraph: "Slide 4 Paragraph",
  },
  // Add more slides
];

function Slider() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  }

  useEffect(() => {
    const intervel = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
      );
    }, 6000);
    return () => clearInterval(intervel);
  }, [handleNext, handlePrev]);

  return (
    <div className="carousel">
      {carouselData.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === activeIndex ? "active" : ""}`}
        >
          <div className="slide-content">
            <h2>{slide.heading}</h2>
            <p>{slide.paragraph}</p>
          </div>
          <div
            className="slide-background"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              opacity: index === activeIndex ? 1 : 0,
            }}
          ></div>
        </div>
      ))}
      <button className="prev-button" onClick={handlePrev}>
        Prev
      </button>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
}

export default Slider;
