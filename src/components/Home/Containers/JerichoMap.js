import React from 'react'
import './JerichoMap.css'
import MapIcon from '../../../Assets/MapIcon.png'
import banner from '../../../Assets/plants_banner.jpg'
import { NavLink } from 'react-router-dom'

function JerichoMap() {
    return (
        <div className='home_container_outer'>
            <div className='jm_container'>
            <div className='home_container_header'>
                    <div className='map_icon'>
                        <img  src={MapIcon} className="c_icon"alt=''/>
                    </div>
                    <div className='home_container_header_text'>
                        <h3>Garden Center Map</h3>
                    </div>
            </div>
    
            <div className='hc_body'>
                    <div className='hc_img'>
                        <img src={banner} className='c_image' alt=''/>
    
                    </div>
                    <div className='jm_paragraph'>
                        <p>
                Need some help finding what you are looking for? Click below to see a full map of Jericho Nursery.
                        </p>
                        <NavLink to='/map'>
                        <button className='jm_button'>Go to the Map</button>
                        </NavLink>
                    </div>
                    </div>
            </div>
    
    
        </div>
      
      )
}

export default JerichoMap;