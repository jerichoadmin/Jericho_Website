import React from 'react'
import plantListData from '../plantListData'
import './Art.css'

function Art() {



    const art = plantListData.filter((_, index) => index === 7)[0];



  return (
    <div className='Art'>
        
        <div className='art_welcome'>
            <h2>Garden Art and Gift</h2>
        </div>


        <div className='art_body'>


        <img className='art_img' alt='Jericho Art Plants and Seeds' src={art.image_url}/>
        <p>
            <h2>Galliant Garden Gifts</h2>
            {art.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Art