import React, { useState } from 'react';
import './Popup.css';

function Popup() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
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
