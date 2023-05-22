import React from 'react'
// import MonthGrid from './Calendar/MonthGrid'
import  FC  from './Calendar/FC'
import './GardeningCalendar.css'

function GardeningCalendar() {
  return (
    <div className='gardening_calendar'>
                <div className='gc_welcome'>
            <h1>Gardening Calendar</h1>
                <p> 
                    Have you ever wondered when the right time to plants seeds are? Or perhaps aren't sure when the best time to plant a large shade tree is? What should I do in the winter months to prep my garden? With the Jericho Gardening Calendar, you can get all of these answers. Catered specifically to New Mexico, this gardening calendar will serve as your gardening guide year round. 
                </p>
        </div>
   

        <FC />





    </div>
  )
}

export default GardeningCalendar