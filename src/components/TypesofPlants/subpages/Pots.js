import React from 'react'
import plantListData from '../plantListData'
import './Pots.css'

function Pots() {



    const pots = plantListData.filter((_, index) => index === 6)[0];




  return (
    <div className='Pots'>
        
        <div className='pots_welcome'>
            <h2>Pots and Pottery</h2>
        </div>


        <div className='pots_body'>


        <img className='pots_img' alt='Jericho Pots' src={pots.image_url}/>
        <p>
            <h2>Perfect Pottery</h2>
            {pots.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Pots;