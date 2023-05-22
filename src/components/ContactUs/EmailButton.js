import React from 'react';

function EmailButton() {
  const handleClick = () => {
    const recipient = 'manager@jerichonursery.com'; 
    const subject = 'Customer Inquiry'; 
    const body = 'Hi Gardening Angel,'; 
    const mailToUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailToUrl);
  };

  return (
    <button onClick={handleClick}>Compose Email</button>
  );
}

export default EmailButton;
