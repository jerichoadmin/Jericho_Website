import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Popup.css';

function Popup() {
  const [isVisible, setIsVisible] = useState(true);
  const [popUpData, setpopUpData] = useState([]);

  useEffect(() => {
    // Fetch pop-up data from the server
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
    // Set localStorage flag to indicate that the popup has been closed
    localStorage.setItem('popupClosed', 'true');
    setIsVisible(false);
  };

  // useEffect(() => {
  //   // Check localStorage if the popup has been closed previously
  //   const isPopupClosed = localStorage.getItem('popupClosed');
  //   if (isPopupClosed === 'true') {
  //     setIsVisible(false);
  //   }
  // }, []);

  return (
    isVisible && (
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
