import React from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs here
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Screen = () => {
  return (
    <div className="screen-container">
      <div className="column">
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
      </div>
      <div className="column">
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
      </div>
      <div className="column">
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
        <div className="box">
          <img src={getRandomImage()} alt="Random" />
        </div>
      </div>
    </div>
  );
};

export default Screen;
