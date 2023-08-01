import React, { useState } from 'react';
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

const Slide = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = pictures.length;

  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    } else if (direction === 'left') {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    }
  };

  const showArrows = totalSlides > 1;

  return (
    <div className='slide-general'>
      {showArrows && (
        <img
          className="arrow arrow-left"
          src={arrowLeft}
          alt="Left Arrow"
          onClick={() => handleArrowClick('left')}
        />
      )}
      <img
        className="slide-image"
        src={pictures[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
      {showArrows && (
        <img
          className="arrow arrow-right"
          src={arrowRight}
          alt="Right Arrow"
          onClick={() => handleArrowClick('right')}
        />
      )}
      <div className="slide-counter">
        {totalSlides > 1 && `${currentSlide + 1}/${totalSlides}`}
      </div>
    </div>
  );
};

export default Slide;