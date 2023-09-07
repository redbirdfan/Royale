import React, { useState } from 'react'; // Fix the import statement

const Spinreels = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const SpinClick = () => {
    setIsSpinning(true);
    
    setTimeout(() => {
      setIsSpinning(false);
      window.location.reload(); // Reload the page
    }, 200);
  };

  return (
    <div className="spinreels-container">
      <button className={`violet-button ${isSpinning ? 'spin-animation' : ''}`} onClick={SpinClick}>
        Spin
      </button>
    </div>
  );
};

export default Spinreels;
