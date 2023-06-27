import React from 'react'
import plantListData from '../plantListData'
import './Landscaping.css'

function Landscaping() {



    const landscaping = plantListData.filter((_, index) => index === 5)[0];




  return (
    <div className='Landscaping'>
        
        <div className='landscaping_welcome'>
            <h2>Landscaping and Shrubs</h2>
        </div>


        <div className='landscaping_body'>


        <img className='landscaping_img' alt='Jericho Landscaping' src={landscaping.image_url}/>
        <p>
            <h2>Landscaping</h2>
            {landscaping.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Landscaping;