import React from 'react'
import plantListData from '../plantListData'
import './Perennials.css'

function Perennials() {



    const perennials = plantListData.filter((_, index) => index === 2)[0];




  return (
    <div className='Perennials'>
        
        <div className='perennials_welcome'>
            <h2>Perennials</h2>
        </div>


        <div className='perennials_body'>


        <img className='perennials_img' alt='Jericho Perennials' src={perennials.image_url}/>
        <p>
            <h2>Perfect Perennials</h2>
            {perennials.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Perennials;