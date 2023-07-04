import React from 'react'
import plantListData from '../plantListData'
import './Perennials.css'
import { Helmet } from 'react-helmet';

function Perennials() {

  
    const perennials = plantListData.filter((_, index) => index === 2)[0];




  return (
    <div className='Perennials'>
      <Helmet>
  <title>Perennials at Jericho Nursery</title>
  <meta name="description" content="Discover a wide variety of perennials at Jericho Nursery. We offer an extensive selection of long-lasting and beautiful perennial plants to enhance your garden. Find a range of colors, sizes, and bloom times to create year-round interest. Enhance your outdoor space with our high-quality perennial plants. Visit our nursery today and explore our diverse range of perennial treasures." />
  <meta property="og:title" content="Perennials at Jericho Nursery" />
  <meta property="og:description" content="Discover a wide variety of perennials at Jericho Nursery. We offer an extensive selection of long-lasting and beautiful perennial plants to enhance your garden. Find a range of colors, sizes, and bloom times to create year-round interest. Enhance your outdoor space with our high-quality perennial plants. Visit our nursery today and explore our diverse range of perennial treasures." />
</Helmet>

        
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