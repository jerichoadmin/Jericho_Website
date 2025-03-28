import React from 'react';
import { NavLink } from 'react-router-dom';
import './Trees.css'


function Trees() {


return (


<div className='Trees'>

  <div className='trees_welcome'>
    <h1>New Mexico Trees</h1>
  </div>


  <div className='trees_body'>

  <div className='trees_body_top_text'>

    <h1>Picking the right tree for your New Mexico home</h1>
    <p>
    Choosing the perfect tree for your New Mexico landscape requires careful consideration of the region’s unique climate, soil conditions, and water availability. In Albuquerque and throughout the state, trees must withstand intense sunlight, low humidity, and occasional drought. Native and drought-tolerant species, such as desert willows, velvet mesquites, and Pinyon pines, thrive in these conditions with minimal maintenance. Additionally, non-native trees like Chinese pistache and desert museum palo verde can provide excellent shade, helping to cool your yard and reduce temperatures during hot summers. Whether you're looking for fast-growing shade trees to cool your yard, ornamental trees to enhance curb appeal, fruit trees for homegrown produce, or hardy conifers for year-round greenery, selecting the right tree ensures long-term health and beauty in your landscape. Explore our catalog of trees ideal for Albuquerque and beyond to find the best fit for your space.
    </p>
    </div>

    <div className='tree_categories'>

      <div className='tree_catergories_inner'>
      <NavLink to='/shadetrees'>
      <h2>Shade Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/shade.jpg' alt='Shade Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </NavLink>
      </div>
      <div className='tree_catergories_inner'>
      <NavLink to='/ornamentaltrees'>
      <h2>Ornamental Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/flowering/floweringcherry.jpg' alt='Ornamental Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </NavLink>
      </div>
      <div className='tree_catergories_inner'>
      <NavLink to='/fruittrees'>
      <h2>Fruit Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/fruit.jpg' alt='Fruit and Nut Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </NavLink>
      </div>
      <div className='tree_catergories_inner'>
      <NavLink to='/coniferoustrees'>
      <h2>Coniferous Trees</h2>
      <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Trees/Pines.jpg' alt='Conifers and Pine Trees in Albuqueruque, New Mexico and surrounding areas'/>
      </NavLink>
      </div>
    </div>

 
  </div>
</div>

        
      

  )
}



export default Trees
