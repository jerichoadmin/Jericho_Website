import React, {useState, useEffect, useRef} from 'react'
import DeliveryVan from '../../../SVGs/DeliveryVan'
import './Banner2.css'
import AOS from 'aos';
import { NavLink } from 'react-router-dom';


function Banner2() {

  useEffect(() => {
    AOS.init();
  }, []);

  const revealRef = useRef(null); 
  const [isAnimated, setIsAnimated] = useState(false); 



  const handleScroll = () => {
    const revealElement = revealRef.current; 
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
    <div className='banner2' >
        <div className='b2_img'>
        <div className='b2_1 '
               data-aos="fade-right"
               data-aos-duration="500"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="true"

                >
            <div className='b2_2'>
            <h4 className='b2_h4'>Need help getting your goods to your yard?</h4>
            <h1>Delivery and Planting</h1>
            <h4 className='b2_h4g'> For as low as $75 for select areas</h4>
            </div>

<div className="reveal-container">
<div className='inner_decoy'>
            <div className='decoy'>
            </div>
            <div id='movingDiv'>
    <div className={isAnimated ? "visible" : "reveal-content"}><DeliveryVan /></div>
            </div>
    </div>
    <NavLink to='/delivery'>
    <button>Learn More</button>
    </NavLink>
</div>

</div>
        </div>
        <div   ref={revealRef}>
        </div>
    </div>
  )
}

export default Banner2;