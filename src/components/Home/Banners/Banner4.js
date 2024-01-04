import React, {useEffect} from 'react'
import seminarsAd from '../../../Assets/jericho_seminar_pdf.png'
import './Banner4.css'
import AOS from 'aos';
import { NavLink } from 'react-router-dom';


function Banner4() {

  useEffect(() => {
    AOS.init();
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
            <h1>Seminars are starting again!</h1>
            </div>

<div className="reveal-container">
<div className='inner_decoy'>

            <div id='movingDiv'>
        <img src={seminarsAd} alt='' className='seminar_ad'/>
            </div>
    </div>
    <NavLink to='/seminars'>
    <button>Learn More</button>
    </NavLink>
</div>

</div>
        </div>
    </div>
  )
}

export default Banner4;