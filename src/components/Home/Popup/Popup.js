import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Popup.css';

function Popup({  }) {
  const [isOpen, setIsOpen] = useState(true);
  const [popUpData, setpopUpData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jericho-server-eb9k.onrender.com/popup")
      .then((res) => {
        setpopUpData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClose = () => {
    setIsOpen(false); // Close popup for user
    localStorage.setItem('popupClosed', 'true'); // Set local storage to prevent popup from showing again
  };

  // useEffect(() => {
  //   // Check if the popup has been closed previously
  //   const isPopupClosed = localStorage.getItem('popupClosed');
  //   if (isPopupClosed === 'true') {
  //     setIsOpen(false); // Close popup if it has been closed previously
  //   }
  // }, []);

  return (
    isOpen && (
      <div className='popup_outer_shell'>
        <div className='popup_dark_background'>
          <div className='popup_inner'>
            <span className="material-symbols-outlined">
              warning
            </span>
            <h1>Hey!</h1>
            {popUpData.map((popup, index) => (
              <div key={index}>
                <p>{popup.notice}</p>
                <span>{popup.date}</span>
              </div>
            ))}
            
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;
