import React from 'react'
import plantListData from '../plantListData'
import './Fountains.css'

function Fountains() {



    const fountains = plantListData.filter((_, index) => index === 8)[0];



  return (
    <div className='Fountains'>
        
        <div className='fountains_welcome'>
            <h2>Fountains and Water Features</h2>
        </div>


        <div className='fountains_body'>


        <img className='fountains_img' alt='Jericho Fountains Plants and Seeds' src={fountains.image_url}/>
        <p>
            <h2>Fabulous Fountains</h2>
            {fountains.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Fountains;