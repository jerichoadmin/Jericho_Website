import React, { useState } from 'react';
import './HoursButton.css'

const HoursButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  let dialogRef = null;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === dialogRef) {
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal} className='hours_button'>Hours</button>
      {isOpen && (
        <dialog
          open
          ref={(ref) => (dialogRef = ref)}
          onClick={handleOutsideClick}
          className='modal'
        >
          <button onClick={closeModal}>Close </button>
          <p>Hours: Monday-Saturday 9-5 | Sundays 11-4</p>
        </dialog>
      )}
    </div>
  );
};

export default HoursButton;
