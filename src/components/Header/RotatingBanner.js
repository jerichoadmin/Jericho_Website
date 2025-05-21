import React, { useState, useEffect } from 'react';
import flower from '../../Assets/desert_flower.jpg'
import succulents from '../../Assets/succulent_banner.jpg'
import moreballoons from '../../Assets/more_balloons.jpg'
import desert from '../../Assets/high_desert.jpg'
import cactus from '../../Assets/2024banners/cactus.jpg'
import cherry from '../../Assets/2024banners/cherry.jpg'
import small from '../../Assets/2024banners/smallflower.jpg'
import ghostranch from '../../Assets/2024banners/ghostranch.jpg'






const RotatingBanner = () => {

    const transitionStyles = {
        transition: 'opacity 0.5s ease-in-out',
        opacity: 1,
      };


const imageNames = [
  cactus,
  moreballoons,
  cherry,
  desert,
  small,
  succulents,
  ghostranch,
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