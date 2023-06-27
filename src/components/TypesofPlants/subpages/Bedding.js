import React from 'react'
import plantListData from '../plantListData'
import './Bedding.css'

function Bedding() {



    const bedding = plantListData.filter((_, index) => index === 0)[0];



  return (
    <div className='Bedding'>
        
        <div className='bedding_welcome'>
            <h2>Bedding Plants and Seeds</h2>
        </div>


        <div className='bedding_body'>


        <img className='bedding_img' alt='Jericho Bedding Plants and Seeds' src={bedding.image_url}/>
        <p>
            <h2>Bountiful Bedding Plants at Jericho</h2>
            {bedding.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Bedding