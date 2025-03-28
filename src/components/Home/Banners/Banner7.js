import React, {useEffect} from 'react'
import './Banner7.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { NavLink } from 'react-router-dom';
import newffc from '../../../Assets/newnewffc.png'



function Banner7() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='banner7'>
        <div className='b_img7'>
        <div className='b_7'
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <h1 className='b_h527'>Discover our New Plant Catalog</h1>
            <p className='b_h47'>Explore a World of Greenery – Find Plants Perfect for New Mexico Gardens</p>
            <div className='banner_7_lower'>
            <NavLink to='/plantcatalog'>
                        <button className='banner_button7'>Go There</button>
            </NavLink>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner7;