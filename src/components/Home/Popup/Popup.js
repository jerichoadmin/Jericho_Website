import React, { useState, useEffect } from 'react';
import './Popup.css';

function Popup() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check localStorage if the popup has been closed previously
    const isPopupClosed = localStorage.getItem('popupClosed');
    if (isPopupClosed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    // Set localStorage flag to indicate that the popup has been closed
    localStorage.setItem('popupClosed', 'true');
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className='popup_outer_shell'>
        <div className='popup_dark_background'>
          <div className='popup_inner'>
            <span className="material-symbols-outlined">
              warning
            </span>
            <h1>Hey!</h1>
            <h1> We are having some technical issues</h1>
            <p>Our hosting provider is experiencing some downtime. The website is functional, but you can't see our images or blogs at the moment </p>

            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    )
  );
}

export default Popup;
