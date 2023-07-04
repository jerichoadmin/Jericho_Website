import React from 'react'
import plantListData from '../plantListData'
import './Bedding.css'
import { Helmet } from 'react-helmet';

function Bedding() {


    const bedding = plantListData.filter((_, index) => index === 0)[0];



  return (
    <div className='Bedding'>
        <Helmet>
  <title>Bedding Plants at Jericho Nursery</title>
  <meta name="description" content="Discover a wide variety of bedding plants at Jericho Nursery. We offer an extensive selection of annuals, perennials, and seasonal plants to beautify your garden beds. Find vibrant colors, lush foliage, and fragrant blooms to create stunning displays. Enhance your outdoor space with our high-quality bedding plants. Visit our nursery today and explore our diverse range of options." />
  <meta property="og:title" content="Bedding Plants at Jericho Nursery" />
  <meta property="og:description" content="Discover a wide variety of bedding plants at Jericho Nursery. We offer an extensive selection of annuals, perennials, and seasonal plants to beautify your garden beds. Find vibrant colors, lush foliage, and fragrant blooms to create stunning displays. Enhance your outdoor space with our high-quality bedding plants. Visit our nursery today and explore our diverse range of options." />
</Helmet>

        
        <div className='bedding_welcome'>
            <h2>Bedding Plants and Seeds</h2>
        </div>


        <div className='bedding_body'>


        <img className='bedding_img' alt='Jericho Bedding Plants and Seeds' src={bedding.image_url}/>
        <p>
            <h2>Bountiful Bedding Plants at Jericho</h2>
            {bedding.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Bedding