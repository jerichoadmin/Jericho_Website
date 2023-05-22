import React, {useState, useEffect, useRef} from 'react'
import './Banner3.css'
import AOS from 'aos';
import { NavLink } from 'react-router-dom';
import cashhouse from '../../../Assets/CashHouse.jpg'


function Banner3() {




  return (
    <div className='banner'>
        <div className='b3_img'>
        <div className='b_1'
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className='b_2'>
            <h4 className='b33'>Want more Jericho?</h4>
            <h1>Check out our Frequent Flower Club</h1>
            <h4 className='b3_h4'>To receive weekly newsletters, special promotions and more</h4>
            </div>
            <NavLink to='/ffc'>
            <button>More Info</button>
            </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Banner3;