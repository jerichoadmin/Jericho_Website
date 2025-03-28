import React from 'react'
import './Shrubs.css'
import { NavLink } from 'react-router-dom'

function Shrubs() {
  return (
    <div className='Shrubs'>

        <div className='shrubs_welcome'>
            <h1>New Mexico Shrubs</h1>
        </div>

          <div className='shrubs_body'>
        
             <div className='shrubs_top_text'>
                <h2>Versatile Shrubs for Beauty, Privacy & Year-Round Interest</h2>
                  <p>Shrubs are an essential part of any New Mexico landscape, offering color, structure, and resilience in our arid climate. Whether you're looking for flowering shrubs to attract pollinators, broadleaf evergreens for lush greenery, or coniferous shrubs for year-round texture and durability, there’s a perfect shrub for your yard. Many shrubs provide natural privacy screens, wind protection, and erosion control, all while requiring minimal maintenance once established.</p>
                  <p>
                  At Jericho Nursery, we specialize in drought-tolerant and climate-adapted shrubs that thrive in Albuquerque’s soil and weather conditions. From vibrant butterfly bushes and fragrant sage to tough hollies and low-growing junipers, our selection includes the best options for both beauty and function. Explore our categories below and visit us to find the perfect shrubs for your landscape!
                  </p>
            </div>
        
            <div className='shrub_categories'>
        
              <div className='shrub_catergories_inner'>
              <NavLink to='/floweringshrubs'>
              <h2>Flowering Shrubs</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/flower/potentilla.jpg' alt='Shade Trees in Albuqueruque, New Mexico and surrounding areas'/>
              </NavLink>
              </div>
              <div className='shrub_catergories_inner'>
              <NavLink to='/broadleafevergreens'>
              <h2>Broaleaf Evergreens</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/hedge.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
              </NavLink>
              </div>
              <div className='shrub_catergories_inner'>
              <NavLink to='/coniferousshrubs'>
              <h2>Coniferous Shrubs</h2>
              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Shrubs/conifershrubs.jpg' alt='Fruit and Nut Trees in Albuqueruque, New Mexico and surrounding areas'/>
              </NavLink>
              </div>
            </div>
        
         
          </div>
      
    </div>
  )
}

export default Shrubs
