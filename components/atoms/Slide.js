import React from 'react';

const Slide = ({ image, title, description }) => {
  return (
    <div className="slide">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Slide;
