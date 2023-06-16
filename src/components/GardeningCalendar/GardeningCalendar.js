import React from 'react'
// import MonthGrid from './Calendar/MonthGrid'
import  FC  from './Calendar/FC'
import './GardeningCalendar.css'
import { Helmet } from 'react-helmet'

function GardeningCalendar() {
  return (
    <div className='gardening_calendar'>
        <Helmet>
        <title>Gardening Calendar - Jericho Nursery</title>
        <meta name="description" content="Stay on top of gardening events and important dates with the Jericho Nursery Gardening Calendar." />
        <meta property="og:title" content="Gardening Calendar - Jericho Nursery" />
        <meta property="og:description" content="Stay on top of gardening events and important dates with the Jericho Nursery Gardening Calendar." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/SEO_photos/cactus.jpg" />
        <meta property="og:type" content="website" />

      </Helmet>
                <div className='gc_welcome'>
            <h1>Gardening Calendar</h1>
                <p> 
                Have you ever wondered when the right time to plant seeds is? Or perhaps aren't sure when the best time to plant a large shade tree is. What should I do in the winter months to prep my garden? With the Jericho Gardening Calendar, you can get all of these answers. Catered specifically to New Mexico, this gardening calendar will serve as your gardening guide year-round.
                </p>
        </div>
   

        <FC />





    </div>
  )
}

export default GardeningCalendar