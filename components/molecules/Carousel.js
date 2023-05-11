import React from 'react';
import Slide from '../atoms/Slide';

const Carousel = (slide) => {
  return (
    <div>
      {slide.map((slide, index) => (
        <Slide key={index} title={slide.title} image={slide.image} />
      ))}
    </div>
  );
};

export default Carousel;
