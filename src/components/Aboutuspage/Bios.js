// src/Bios.js
import React, { useState } from 'react';
import './Bios.css';

const Bios = () => {
  const [isExpandedGary, setIsExpandedGary] = useState(false);
  const [isExpandedJane, setIsExpandedJane] = useState(false);

  const toggleExpandGary = () => {
    setIsExpandedGary(!isExpandedGary);
  };

  const toggleExpandJane = () => {
    setIsExpandedJane(!isExpandedJane);
  };

  return (
    <div className="bios">
      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandGary}>
            {isExpandedGary ? '-' : '+'}
          </button>
          <h2>Gary</h2>
        </div>
        {isExpandedGary && (
          <p>
            Gary is the yard expert! He knows so much about all trees, shrubs, roses, vines, and more. With
            many years of experience, he finds joy in talking to customers and spending time with them to
            pick out the yard of their dreams. Gary has a background in maintenance and is also a painter.
            Gary loves the outdoors and spends his time hunting and fishing. But what Gary really loves is
            the time he spends working in his yard. He feels that it is such good therapy for his mind. He
            loves listening to 80s music, oldies rock, or just about anything, except rap or country. Gary
            says he really enjoys the simple things in life. Gary loves working at Jericho Nursery because of
            the customers he gets to meet and loves the relationships he can build with them all. He loves
            the Jericho family and feels his bosses are the best he has ever worked for. He cannot list a
            favorite plant because he has too many favorites. His best plant advice is to not overwater
            indoor or outdoor cacti!
          </p>
        )}
      </div>

      <div className="bio_single">
        <div className="bio_header">
          <button onClick={toggleExpandJane}>
            {isExpandedJane ? '-' : '+'}
          </button>
          <h2>Jane</h2>
        </div>
        {isExpandedJane && (
          <p>
            Jane is the flower enthusiast! She knows all about flowers, their meanings, and how to care for them.
            With her expertise, she helps customers create stunning floral arrangements for any occasion. Jane
            has a passion for art and design, and she incorporates her creativity into every floral design she
            creates. She enjoys spending her free time in nature, sketching flowers and taking long walks in the
            garden. Jane loves working at Jericho Nursery because it allows her to combine her love for flowers
            with her desire to help others. She believes that flowers have the power to brighten someone's day
            and bring joy to any space. Jane's favorite flower is the peony because of its delicate beauty and
            sweet fragrance. Her best floral advice is to always keep the vase clean and change the water
            regularly to prolong the life of the flowers.
          </p>
        )}
      </div>
    </div>
  );
};

export default Bios;
