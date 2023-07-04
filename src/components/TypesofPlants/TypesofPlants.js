import React from 'react'
import plantListData from './plantListData'
import './TypesofPlants.css'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function TypesofPlants() {


  return (
<div className='TypesofPlants'>
<Helmet>
        <title>Plants Carried by Jericho Nursery</title>
        <meta name="description" content="Discover a wide variety of plants at Jericho Nursery. We offer an extensive selection of indoor and outdoor plants including flowering plants, succulents, tropical plants, herbs, and more. Enhance your garden or interior space with our high-quality plants. Visit our nursery today and explore our diverse range of botanical treasures." />
        <meta property="og:title" content="Plants Carried by Jericho Nursery" />
        <meta property="og:description" content="Discover a wide variety of plants at Jericho Nursery. We offer an extensive selection of indoor and outdoor plants including flowering plants, succulents, tropical plants, herbs, and more. Enhance your garden or interior space with our high-quality plants. Visit our nursery today and explore our diverse range of botanical treasures." />
</Helmet>


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