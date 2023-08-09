import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './EmailButton.css'

function EmailButton() {
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaChange = (response) => {
    setIsCaptchaVerified(true);
  };

  const handleShowCaptcha = () => {
    setIsCaptchaVisible(true);
  };

  const handleSendEmail = () => {
    if (isCaptchaVerified) {
      const recipient = 'manager@jerichonursery.com';
      const subject = 'Customer Inquiry';
      const body = 'Hi Gardening Angel,';
      const mailToUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailToUrl);
    } else {
      alert('Please complete the CAPTCHA challenge.');
    }
  };

  return (
    <div className='email_container'> 
      {isCaptchaVisible ? (
        <div className='captcha_container'>
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
            
            onChange={handleCaptchaChange}
          />
        </div>
      ) : (
        <button onClick={handleShowCaptcha}>Compose Email</button>
      )}

      {isCaptchaVisible && (
        <button onClick={handleSendEmail} disabled={!isCaptchaVerified}>
          Compose Email
        </button>
      )}
            {isCaptchaVerified && (
          <p>manager@jerichonursery.com</p>
          )}
    </div>
  );
}

export default EmailButton;
