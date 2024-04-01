import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Popup.css';

function Popup() {
  const [isOpen, setIsOpen] = useState(true);
  const [popUpData, setpopUpData] = useState([]);
  const [isPopUpVisible, setIsPopUpVisible] = useState();

  useEffect(() => {
    axios
      .get("https://jericho-server-eb9k.onrender.com/popup")
      .then((res) => {
        setpopUpData(res.data);
        setIsPopUpVisible(res.data[0].isVisible);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatDate = (date) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${month}-${day}-${year}`;
  };

  const handleClose = () => {
    setIsOpen(false); 
    localStorage.setItem('popupClosed', 'true'); 
  };

  return (
    isOpen && isPopUpVisible && (
      <div className='popup_outer_shell'>
        <div className='popup_dark_background'>
          <div className='popup_inner'>
            <span className="material-symbols-outlined">
              warning
            </span>
            {popUpData.map((popup, index) => (
              <div key={index}>
                <p>{popup.notice}</p>
                <span className='popup_date'>{formatDate(popup.date)}</span>
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
