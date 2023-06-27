import React from 'react'
import plantListData from '../plantListData'
import './Trees.css'

function Trees() {



    const trees = plantListData.filter((_, index) => index === 4)[0];




  return (
    <div className='Trees'>
        
        <div className='trees_welcome'>
            <h2>Trees and Shrubs</h2>
        </div>


        <div className='trees_body'>


        <img className='trees_img' alt='Jericho Trees' src={trees.image_url}/>
        <p>
            <h2>Terrific Trees and Showboaty Shrubs</h2>
            {trees.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Trees;