import React, {useEffect} from 'react'
import './Banner5.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { NavLink } from 'react-router-dom';
import instagram from '../../../Assets/Instagram_Glyph_Gradient.png'
import corrales from '../../../Assets/CorralesGarden2024.png'


function Banner5() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='banner'>
        <div className='b_img5'>
        <div className='b_1'
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className='b_2'>
            <h4 className='b_h52'>Vote for Jericho!</h4>
            </div>
            <div>
            <img className='corrales' src='https://www.abqthemag.com/wp-content/uploads/2025/05/BOC-2025-medallion-scaled.png'/>
            </div>


<h4 className='b_h4'>as Best Local Garden Center in Albuquerque Magazine's Best of the City</h4>

<a href='https://abqthemag.com/events/best-of-the-city/' target="_blank" rel="noreferrer">
            <button className='banner_button5'>Vote Here</button>
</a>

<div className='instagram_lower'>

</div>



           
        </div>
        </div>
    </div>
  )
}

export default Banner5;