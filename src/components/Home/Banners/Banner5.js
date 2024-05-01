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
            <h4 className='b_h52'>TJ's Seed Sack Pumpkin Growing Contest</h4>
            </div>
            <div>
            <img className='tj_pumpkin' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/April25-2024/SEEDSACKv2.1.jpg'/>
            </div>
<NavLink to='/gardenresources'>
            <button className='banner_button5'>Check Resources</button>
</NavLink>

<h4 className='b_h4'>For more information about how to grow a pumpkin that wieghs a TON</h4>

<div className='instagram_lower'>
<p>and get free seeds!</p>
</div>



           
        </div>
        </div>
    </div>
  )
}

export default Banner