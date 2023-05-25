import React, { useState, useEffect } from 'react';
import flower from '../../Assets/desert_flower.jpg'
import stones from '../../Assets/stone_banner.jpg'
import succulents from '../../Assets/succulent_banner.jpg'
import moreballoons from '../../Assets/more_balloons.jpg'
import desert from '../../Assets/high_desert.jpg'



const RotatingBanner = () => {

    const transitionStyles = {
        transition: 'opacity 0.5s ease-in-out',
        opacity: 1,
      };


const imageNames = [
        stones,
        succulents,
        moreballoons,
        desert,
        flower
    ]


const interval = 15000;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % imageNames.length
      );
    }, interval);


    return () => clearInterval(timer);
  }, [imageNames, interval]);

  return (
    <div className="rotating_banner_container">
      <img
        src={imageNames[currentImageIndex]}
        alt="Banner Image"
        className="balloons"
      />
    </div>
  );
};

export default RotatingBanner;