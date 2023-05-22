import React from 'react'
import { NavLink } from 'react-router-dom'
import './GardeningCalendar.css'
import icon2 from '../../../Assets/transparent.png'
import banner from '../../../Assets/garden_banner.jpg'


function GardeningCalendar() {

    function formatDate(newDate) {
        const months = {
          0: 'January',
          1: 'February',
          2: 'March',
          3: 'April',
          4: 'May',
          5: 'June',
          6: 'July',
          7: 'August',
          8: 'September',
          9: 'October',
          10: 'November',
          11: 'December',
        }
       
        const d = newDate
        const monthIndex = d.getMonth()
        const monthName = months[d.getMonth()]
        const formatted = ` ${monthName} `
        return formatted.toString()
      }
     



    return (

        <div className='home_container_outer'>
            <div className='gc_container'>
            <div className='home_container_header'>
                    <div className='hc_icon'>
                        <img  src={icon2} className="c_icon"/>
                    </div>
                    <div className='home_container_header_text'>
                        <h3> {formatDate(new Date())} Gardening Calendar</h3>
                    </div>
            </div>
    
            <div className='hc_body'>
                    <div className='hc_img'>
                        <img src={banner} className='c_image' alt=''/>
    
                    </div>
                    <div className='hc_paragraph'>
                        <p>
                        Did you know Jericho offers a Gardening Calendar? Click below to get advice from the Gardening Angels on exactly what you should be doing this month to keep up with your garden's wants and needs.
                        </p>
                        <NavLink to='/gardeningcalendar'>
                        <button className='gc_button'>Check It Out</button>
                        </NavLink>
                    </div>
                    </div>
            </div>
    
    
        </div>
      
      )
}

export default GardeningCalendar