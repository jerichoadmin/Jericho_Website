import React from 'react'
import './VideosContainer.css'
import video from '../../../Assets/Video.png'
import videocactus from '../../../Assets/videocactus.jpg'
import { NavLink } from 'react-router-dom'


function VideosContainer() {
    return (
        <div className='home_container_outer'>
            <div className='jm_container'>
            <div className='home_container_header'>
                    <div className='map_icon'>
                        <img  src={video} className="c_icon"alt=''/>
                    </div>
                    <div className='home_container_header_text'>
                        <h3>Jericho's Videos</h3>
                    </div>
            </div>
    
            <div className='hc_body'>
                    <div className='hc_img'>
                        <img src={videocactus} className='c_image' alt='Jericho_Videos'/>
    
                    </div>
                    <div className='jm_paragraph'>
                        <p>
                        We have been creating more and more Youtube Videos for Gardeners who want to learn more and more about everything Albuquerque Gardening. Check out our Youtube page by clicking the button below!
                        </p>
            
                        <NavLink to='/videos'>
                        <button className='jm_button'>Go to our Videos Page</button>
                        </NavLink>
                    </div>
                    </div>
            </div>
    
    
        </div>
      
      )
}

export default VideosContainer;