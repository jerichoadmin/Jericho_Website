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
            <h4 className='b_h4'>Take advantage of the free</h4>
            <h1>Workshop for August</h1>
            <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Blog_Photos/irrigationseminar.png' alt='irrigation_workshop' className='banner_img1'/>
            <h4 className='b_h4g'>Click the button below to sign up</h4>
            </div>
         
         <a href='https://link.lightworkdigital.com/widget/form/3qaO8XFwZsIzsspf04OE'>
            <button>Workshop Sign Up</button>
         </a>
           
        </div>
        </div>
    </div>
  )
}

export default Banner