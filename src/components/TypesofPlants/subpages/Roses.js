import React from 'react'
import plantListData from '../plantListData'
import './Roses.css'

function Roses() {



    const roses = plantListData.filter((_, index) => index === 3)[0];




  return (
    <div className='Roses'>
        
        <div className='roses_welcome'>
            <h2>Roses</h2>
        </div>


        <div className='roses_body'>


        <img className='roses_img' alt='Jericho Roses' src={roses.image_url}/>
        <p>
            <h2>Robust Roses</h2>
            {roses.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Roses;