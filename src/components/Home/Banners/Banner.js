import React, {useEffect} from 'react'
import './Banner.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { NavLink } from 'react-router-dom';


function Banner() {


  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='banner'>
        <div className='b_img'>
        <div className='b_1'
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className='b_2'>
            <h4 className='b_h4'>Let us help you make you yard and Oasis in the SouthWest</h4>
            <h1>Spring has Sprung</h1>
            <h4 className='b_h4g'> See what's come in this week</h4>
            </div>
            <NavLink to='/sales'>
            <button>Browse Now</button>
            </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Banner