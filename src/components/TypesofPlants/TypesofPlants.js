import React from 'react'
import plantListData from './plantListData'
import './TypesofPlants.css'
import { NavLink } from 'react-router-dom'

function TypesofPlants() {




  return (
<div className='TypesofPlants'>

    <div className='top_welcome'>
        <h1>Things we Carry</h1>
    <p>Discover all of the prodcuts Jericho has to offer</p>
    </div>

        


<div className='top_body_main'>
      <div>
      {plantListData.map((plant, index) => (
        <div key={index} className='top_card'>
          <h2>{plant.name}</h2>
          <NavLink to={plant.link}>
          <img
            className='type_of_image'
            alt='type_of_products'
            src={plant.image_url}
            />
            </NavLink>
        </div>
      ))}
      </div>  
      </div>

  </div>
  )
}

export default TypesofPlants