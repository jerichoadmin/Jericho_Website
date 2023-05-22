import React, {useState, useEffect, useRef} from 'react'
import './Delivery.css'
import plantbox from '../../Assets/plantbox.jpg'

import DeliveryVan from '../../SVGs/DeliveryVan'
import ffc3 from '../../Assets/ffc3.png'


function Delivery() {


  const revealRef2 = useRef(null); 
  const [isAnimated, setIsAnimated] = useState(false); 

  const handleScroll = () => {
    const revealElement = revealRef2.current; 
    if (revealElement) {
      const revealTop = revealElement.getBoundingClientRect().top; 
      const windowHeight = window.innerHeight; 

      if (revealTop < windowHeight) {
          setTimeout(() => {
          setIsAnimated(true);
          }, 1000)
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (
    <div className='delivery'>
        <div className='delivery_welcome'>
            <h1>Delivery and Planting</h1>
            <p>
            Get your green fix without breaking a sweat. Let us deliver and plant, so you don't break a leg! (or a nail for that matter)
            </p>
        </div>

    <div className='delivery_body'>

        <h1>Jericho's Delivery Options</h1>

        <div className={isAnimated ? "" : "delivery_decoy"}></div>
        <div className={isAnimated ? "delivery_visible" : "reveal-content"}>
          <div className='delivery_ffc'>
          <img src={ffc3} alt='' className='delivery_ffc_small5'/>
              <img src={ffc3} alt='' className='delivery_ffc_small3'/>
              <img src={ffc3} alt='' className='delivery_ffc_small'/>
              <img src={ffc3} alt='' className='delivery_ffc_small2'/>
              <img src={ffc3} alt='' className='delivery_ffc_small4'/>
          </div>
          <div className='delivery_van_size'>
          <DeliveryVan />
          </div>    
          </div>




<div className='delivery_container'>
        <div   ref={revealRef2}>
        </div>
        <h2>Delivery Range</h2>
        <p>We delivery to Albuquerque and the Greater Albuqueruque Area including Four Hills, the South Valley, West Mesa, Rio Rancho, Bernallio, Placitas, East Mountains, Los Lunas and Belen. Please ask about delivery options for areas like Santa Fe, Grants or Socorro.</p>
</div>
<div className='delivery_container'>
        <h2>Pricing</h2>
        <p>Pricing for delivery ranges from $75-$150 for most areas excluding large loads.</p>
</div>
<div className='delivery_container'>
        <h2>Planting</h2>
        <p>
          Planting is not included in the delivery charge but we do offer it. Contact us for more information.
        </p>
        </div>



        <div className='delivery_img_container'>
        <img src={plantbox} alt='' className='delivery_img'/>
        </div>

        <div className='delivery_button'>
        <h2>Need some specifics?</h2>
        <p>Call us and we can get the ball rolling</p>
        <button href='tel:15058997555'>Call Now</button>
        </div>


    </div>
</div>
  )
}

export default Delivery