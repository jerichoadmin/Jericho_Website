import React from 'react'
import './Perennials.css'
import { NavLink } from 'react-router-dom'


function Perennials() {
  return (
    <div className='Perennials'>
        <div className='perennials_welcome'>
            <h1>New Mexico Perennials</h1>
        </div>


        <div className='perennials_body'>

<div className='perennials_body_top_text'>
  <h2>Identifying Perennials</h2>
  <p>Perennial plants are those that live for more than two years, often blooming and producing seeds multiple times throughout their lifespan. Unlike annuals, perennials do not die after a single growing season. Instead, they go dormant during colder months and regrow when conditions are favorable again. Common examples of perennials include coreopsis, peonies, and salvia. These plants may take a few years to reach full maturity but can provide beautiful blooms and foliage year after year with proper care. Some perennials, like certain types of roses, require minimal maintenance and can thrive in various climates, making them a popular choice for gardeners. </p>
  <h2>Somewhere in Between</h2>  
  <p>Not all plants fit neatly into the category of annual or perennial—some exist in a middle ground, behaving differently depending on the climate. Plants like geraniums, petunias, and snapdragons are technically perennials in warmer regions but are often treated as annuals in colder areas where they can't survive harsh winters. Others, like certain salvias and lavender varieties, may persist through mild winters but struggle in extreme conditions. The good news? Many of these "somewhere-in-between" plants can be overwintered indoors, in greenhouses, or with protective mulch, allowing them to return year after year. By understanding your local climate and plant hardiness, you can extend the life of many species that might otherwise be considered one-season wonders.</p>  


</div>

  <div className='plant_examples'>
  <h3 className='perennial_h3'>Jericho's Top 10 Perennials</h3>

  <div className='plant_examples_inner'>
    <div className='plant_example_each'>
    <h6>Allium</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/allium-8108318_1920.jpg' alt='Lavendar at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Coreopsis</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/Coreopsis.jpg' alt='Coreopsis at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Peony</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/peony.jpg' alt='Peony at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Gaillardia</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/gaillardia.jpg' alt='Gaillardia at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Coral Bells</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/purple-bells-56056_1920.jpg' alt='Clematis at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Salvia</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/bees-5032464_1920.jpg'alt='Yucca at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Rudbeckia</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/blackeyedsusan.jpg' alt='Honeysuckle at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Phlox</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/phlox-5091730_1920.jpg' alt='Calibrocha at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Verbena</h6>
    <img className='plant_example_circle_image' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/TypesofProducts/verbena-6489346_1920.jpg' alt='Chrysanthemum at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
    <div className='plant_example_each'>
    <h6>Yarrow</h6>
    <img className='plant_example_circle_image' src='https://assets.highcountrygardens.com/media/catalog/product/a/c/achillea-moonshine-yarrow-1.jpg?quality=85&fit=bounds&height=&width=828&auto=webp&format=pjpg' alt='Yarrow at Jericho Nursery in Albuquerque, New Mexico'/>
    </div>
  </div>

  <div className='perennial_mid_page'>
         <NavLink className='plant_catalog_link' to='/xeric'>
            <h4>Searching for Xeric?</h4>
            <p>Click Here to view our Xeric Section</p>
          </NavLink>
          </div>

    <div className='perennials_body_bottom_text'>
      <h2>Year after Year</h2>
      
    <p>Not all perennials are created equal—while some can thrive for decades, others have much shorter lifespans. Take columbine, for example; this delicate perennial often lasts just a few years before fading, relying on self-seeding to persist in a garden. On the other end of the spectrum, plants like peonies can live for generations, returning stronger each year. This contrast is what makes perennials so unique—some are fleeting, offering only a handful of seasons, while others become permanent fixtures in the landscape. By choosing a mix of long-lived and short-lived perennials, you can create a garden that evolves beautifully over time.</p>  

    </div>


  </div>



</div>
      
    </div>
  )
}

export default Perennials
