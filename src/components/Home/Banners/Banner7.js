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
            <h1 className='b_h527'>Workshops are back</h1>
            <p className='b_h47'>From now until March 22nd we will be holding workshops every Saturday. Visit our workshops page to sign up today!</p>
            <div className='banner_7_lower'>
                <img className='seminargray' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/seminargray2.png' />
            <NavLink to='/seminars'>
                        <button className='banner_button7'>Sign Up</button>
            </NavLink>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner7;