import React, {useEffect} from 'react'
import './Banner5.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { NavLink } from 'react-router-dom';
import instagram from '../../../Assets/Instagram_Glyph_Gradient.png'


function Banner() {
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
            <h4 className='b_h52'>Finally, more Jericho pics!</h4>
            <img src={instagram} alt='Jericho_Instagram' className='banner_img_5'/>
            </div>
<NavLink to='/instagram'>
            <button className='banner_button5'>Go to Instagram Page</button>
</NavLink>

<h4 className='b_h4'>From your phone, or computer, you can now look at all our IG pics</h4>

<div className='instagram_lower'>
<p>Dont forget to follow!</p>
</div>



           
        </div>
        </div>
    </div>
  )
}

export default Banner