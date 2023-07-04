import React from 'react'
import plantListData from '../plantListData'
import './Annuals.css'
import { Helmet } from 'react-helmet'


function Annuals() {




    const annuals = plantListData.filter((_, index) => index === 1)[0];




  return (
    <div className='Annuals'>
        <Helmet>
  <title>Annual Plants at Jericho Nursery</title>
  <meta name="description" content="Discover a wide variety of annual plants at Jericho Nursery. We offer an extensive selection of vibrant and seasonal annuals to beautify your garden. Find a range of colors, sizes, and varieties to suit your preferences. Enhance your outdoor space with our high-quality annual plants. Visit our nursery today and explore our diverse range of annual treasures." />
  <meta property="og:title" content="Annual Plants at Jericho Nursery" />
  <meta property="og:description" content="Discover a wide variety of annual plants at Jericho Nursery. We offer an extensive selection of vibrant and seasonal annuals to beautify your garden. Find a range of colors, sizes, and varieties to suit your preferences. Enhance your outdoor space with our high-quality annual plants. Visit our nursery today and explore our diverse range of annual treasures." />
</Helmet>

        
        <div className='annuals_welcome'>
            <h2>Annuals</h2>
        </div>


        <div className='annuals_body'>


        <img className='annuals_img' alt='Jericho Annuals' src={annuals.image_url}/>
        <p>
            <h2>Amazing Annuals</h2>
            {annuals.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Annuals;