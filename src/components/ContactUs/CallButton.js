import React from 'react'

function CallButton() {

        const phoneNumber = "505-899-7555";
      
        const handleCall = () => {
          window.open(`tel:${phoneNumber}`);
        };

  return (
<div>
<button className='contact_us_button' onClick={handleCall}>
      Call Us
</button>
</div>
  )
}

export default CallButton