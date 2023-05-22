import React from 'react'
import './ThisWeek.css'
import { NavLink } from 'react-router-dom'
import icon1 from '../../../Assets/Transparent2.png'
import banner from '../../../Assets/succulent_banner.jpg'

function NewThisWeek() {
  return (
  


    <div className='home_container_outer'>
        <div className='home_container'>
        <div className='home_container_header'>
                <div className='hc_icon'>
                    <img  src={icon1} className="c_icon"/>
                </div>
                <div className='home_container_header_text'>
                    <h3>This Week's Specials</h3>
                </div>
        </div>

        <div className='hc_body'>
                <div className='hc_img'>
                    <img src={banner} className='c_image' alt=''/>

                </div>
                <div className='hc_paragraph'>
                    <p>
                    Ready to sprout your garden dreams? See what's on sale this week for unbeatable nursery promotions on a wide variety of plants, flowers, hardgoods and more. Get your green thumb on!
                    </p>
                            <NavLink to='/sales'>
                            <button className='hc_button'>Shop Specials This Week</button>
                            </NavLink>
                </div>
                </div>
        </div>


    </div>
  
  )
}

export default NewThisWeek