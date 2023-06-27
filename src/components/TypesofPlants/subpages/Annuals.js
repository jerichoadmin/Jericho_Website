import React from 'react'
import plantListData from '../plantListData'
import './Annuals.css'

function Annuals() {



    const annuals = plantListData.filter((_, index) => index === 1)[0];




  return (
    <div className='Annuals'>
        
        <div className='annuals_welcome'>
            <h2>Annuals</h2>
        </div>


        <div className='annuals_body'>


        <img className='annuals_img' alt='Jericho Annuals' src={annuals.image_url}/>
        <p>
            <h2>Amazing Annuals</h2>
            {annuals.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Annuals;