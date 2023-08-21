import React from 'react';

const images = [
  'https://img.freepik.com/premium-vector/queen-hearts-playing-card-isolated_1308-78393.jpg?w=360',
  'https://img.freepik.com/premium-vector/king-diamonds-playing-card-isolated_1308-78417.jpg?w=360',
  'https://img.freepik.com/premium-vector/jack-clubs-playing-card-isolated_1308-78355.jpg',
  'https://img.freepik.com/free-vector/ace-hearts-playing-card-isolated_1308-79361.jpg?w=360&t=st=1692564572~exp=1692565172~hmac=5c53cbda0c518afe27fe77277cf46bc4434c1c7fd4fdd7a7c6d028343df10935',
  'https://img.freepik.com/free-vector/joker-playing-card-isolated_1308-80835.jpg?w=360&t=st=1692564685~exp=1692565285~hmac=6a5187868b4dfa30d7dc6fac43cd130a29e61a949110e88508d7cff3dc45da72',
  'https://img.freepik.com/premium-photo/there-is-gold-crown-with-blue-jewel-it-generative-ai_902049-43772.jpg?w=740',
  'https://img.freepik.com/premium-photo/close-up-gold-crown-pole-with-red-pillow-generative-ai_902049-32389.jpg?w=740'  // Add more image URLs here
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const getReelImageLeft = (x) => {
  if (images[images.indexOf(x)] = 0)
      return images[images.length-1]
    else { return images[images.indexOf(x)-1]}
}

const getReelImageRight = (x) => {
  if (images[images.indexOf(x)] = 0)
      return images[images.length-1];
    else { return images[images.indexOf(images.length)-1]

}

let payLinePicLeft = getRandomImage();
let payLinePicMiddle = getRandomImage();
let payLinePicRight = getRandomImage()

const Screen = () => {
  return (
    <div className="screen-container">
      <div className="column">
        <div className="box">
          <img src={getReelImageLeft(payLinePicLeft)} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePicLeft} alt="Random" />
        </div>
        <div className="box">
          <img src={getReelImageRight(payLinePicLeft)} alt="Random" />
        </div>
      </div>
      <div className="column">
        <div className="box">
          <img src={getReelImageLeft(payLinePicMiddle)} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePicMiddle} alt="Random" />
        </div>
        <div className="box">
          <img src={getReelImageRight(payLinePicMiddle)} alt="Random" />
        </div>
      </div>
      <div className="column">
        <div className="box">
          <img src={getReelImageLeft(payLinePicRight)} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePicRight} alt="Random" />
        </div>
        <div className="box">
          <img src={getReelImageRight(payLinePicRight)} alt="Random" />
        </div>
      </div>
    </div>
  );
};

export default Screen;
