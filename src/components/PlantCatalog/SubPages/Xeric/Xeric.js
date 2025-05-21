import React from 'react';
import { NavLink } from 'react-router-dom';
import './Xeric.css'


function Xeric() {


return (


<div className='Xeric'>

  <div className='xeric_welcome'>
    <h1>New Mexico Xeric Plants</h1>
  </div>


  <div className='xeric_body'>

     <div className='xeric_body_top_text'>
        <h1>Xeriscaping Basics</h1>
        <p>Xeriscaping is a water-efficient landscaping method that uses drought-tolerant plants to create beautiful, sustainable outdoor spaces with minimal irrigation. In Albuquerque’s arid climate, xeric plants thrive by adapting to low rainfall, intense sun, and sandy or rocky soils, making them a smart choice for both residential and commercial landscapes. By incorporating xeric trees, shrubs, cacti, yucca, and ground covers, homeowners can reduce water usage, lower maintenance needs, and create a resilient, eco-friendly yard that stays vibrant year-round.</p>
        <br></br>
      <p>But xeriscaping is more than just choosing drought-tolerant plants—it’s a strategic approach to designing a landscape that works in harmony with New Mexico’s unique environment.</p>


        <h2 className='xeric_core_concepts'>Core Concepts</h2>
        <p>At its core, xeriscaping is about balancing beauty, sustainability, and water efficiency. It starts with selecting the right plants—those that can thrive in dry conditions while adding visual appeal to your yard. Native and xeric plants require less water and support the local ecosystem by attracting pollinators and wildlife. Beyond plant selection, soil health plays a key role, helping retain moisture and provide essential nutrients. Efficient irrigation methods, such as drip systems, ensure water is used effectively, while mulch helps keep the soil cool and minimizes evaporation. Limiting high-water turf areas and opting for low-maintenance plants allows for a landscape that is both stunning and sustainable.</p>
        <br></br>
        <p>Xeriscaping isn’t just about reducing water use—it’s about creating a thriving, resilient outdoor space that works with the natural climate.</p>
    

    
   
    </div>

    <div className='xeric_categories'>
    <div className='xeric_catergories_inner'>
        <NavLink to='/cacti'>
        <h2>Cactus, Yucca, & Agave</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/cacti.jpg' alt='Cactus, Yucca and Agave in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>
      <div className='xeric_catergories_inner'>
        <NavLink to='/xerictrees'>
        <h2>Best Xeric Trees</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/vitex.jpg' alt='Xeric Trees in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>
      <div className='xeric_catergories_inner'>
        <NavLink to='/xericshrubs'>
        <h2>Best Xeric Shrubs</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/shrubs/occotillio.jpg' alt='Xeric Shrubs in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>
      <div className='xeric_catergories_inner'>
        <NavLink to='/xericbedding'>
        <h2>Xeric Bedding and Groundcovers</h2>
        <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Xeric/succulent.jpg' alt='Xeric Bedding and Groundcovers in Albuqueruque, New Mexico and surrounding areas'/>
        </NavLink>
      </div>


    </div>

 
  </div>
</div>

        
      

  )
}



export default Xeric
