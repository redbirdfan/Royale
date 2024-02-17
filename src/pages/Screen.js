import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultCard = 'https://filletfamilyblog.files.wordpress.com/2013/02/d0490860-0-large.jpg'

const images = [
  'https://img.freepik.com/premium-vector/queen-hearts-playing-card-isolated_1308-78393.jpg?w=360',
  'https://img.freepik.com/premium-vector/king-diamonds-playing-card-isolated_1308-78417.jpg?w=360',
  'https://img.freepik.com/premium-vector/jack-clubs-playing-card-isolated_1308-78355.jpg',
  'https://img.freepik.com/free-vector/ace-hearts-playing-card-isolated_1308-79361.jpg?w=360&t=st=1692564572~exp=1692565172~hmac=5c53cbda0c518afe27fe77277cf46bc4434c1c7fd4fdd7a7c6d028343df10935',
  'https://img.freepik.com/free-vector/joker-playing-card-isolated_1308-80835.jpg?w=360&t=st=1692564685~exp=1692565285~hmac=6a5187868b4dfa30d7dc6fac43cd130a29e61a949110e88508d7cff3dc45da72',
  'https://img.freepik.com/premium-photo/there-is-gold-crown-with-blue-jewel-it-generative-ai_902049-43772.jpg?w=740',
  'https://img.freepik.com/premium-photo/close-up-gold-crown-pole-with-red-pillow-generative-ai_902049-32389.jpg?w=740'  // Add more image URLs here
];



function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};



const Screen = () => {
  const [payLinePics, setPayLinePics] = useState({
    left: defaultCard,
    middle: defaultCard, 
    right: defaultCard,
    leftUpper: defaultCard,
    leftLower: defaultCard,
    rightUpper: defaultCard,
    rightLower: defaultCard,
    lowerMiddle: defaultCard,
    upperMiddle: defaultCard,

});

const navigate = useNavigate();

useEffect(() => {
  console.log("screen slots accessed");
}, []);

function upperPic(x){
    const currentIndex = images.indexOf(x);
    return images[currentIndex === 0 ? images.length - 1 : currentIndex - 1];
  };

  function lowerPic(x){
    const currentIndex = images.indexOf(x);
    return images[currentIndex === images.length - 1 ? 0 : currentIndex + 1];
  };


function spinClick() {
  setPayLinePics((payLinePics) => {
    return {
     left: getRandomImage(),
     middle: getRandomImage(),
     right: getRandomImage(),
  }
})
}


function spinClickTwo() {
  setPayLinePics((payLinePics) => {
    return {
      leftLower: lowerPic(payLinePics.left),
      leftUpper: upperPic(payLinePics.left),
      upperMiddle: upperPic(payLinePics.middle),
      lowerMiddle: lowerPic(payLinePics.middle),
      rightLower: lowerPic(payLinePics.right),
      rightUpper: upperPic(payLinePics.right), 
      middle: payLinePics.middle,
      left: payLinePics.left,
      right: payLinePics.right,
    }
  });
}

  const dealCards = () => {
    spinClick();
    setTimeout(() => {
    spinClickTwo();
  }, 100);
};

  return (
    <div className='App-header'>
    <div className="screen-container">
      <div className="column">
        <div className="box">
          <img src={payLinePics.leftUpper} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePics.left} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePics.leftLower} alt="Random" />
        </div>
      </div>
      <div className="column">
        <div className="box">
          <img src={payLinePics.upperMiddle} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePics.middle} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePics.lowerMiddle} alt="Random" />
        </div>
      </div>
      <div className="column">
        <div className="box">
          <img src={payLinePics.rightUpper} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePics.right} alt="Random" />
        </div>
        <div className="box">
          <img src={payLinePics.rightLower} alt="Random" />
        </div>
        </div>
    </div>
      
    <div className="onSpinReels-container">
      <button className='violet-button' onClick={dealCards}>
        SPIN
      </button> 
    </div>
  </div> 


  )}

  export default Screen;
