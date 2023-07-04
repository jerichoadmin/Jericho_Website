import React from 'react'
import plantListData from '../plantListData'
import './Pots.css'
import { Helmet } from 'react-helmet';

function Pots() {

 

    const pots = plantListData.filter((_, index) => index === 6)[0];




  return (
    <div className='Pots'>
       <Helmet>
  <title>Pottery at Jericho Nursery</title>
  <meta name="description" content="Discover a stunning collection of pottery at Jericho Nursery. We offer a wide selection of high-quality pottery to enhance your outdoor and indoor spaces. Find beautifully crafted planters, vases, and decorative containers in various styles, sizes, and finishes. Elevate your plants and create a visually appealing display with our exquisite pottery. Visit our nursery today and explore our diverse range of pottery options." />
  <meta property="og:title" content="Pottery at Jericho Nursery" />
  <meta property="og:description" content="Discover a stunning collection of pottery at Jericho Nursery. We offer a wide selection of high-quality pottery to enhance your outdoor and indoor spaces. Find beautifully crafted planters, vases, and decorative containers in various styles, sizes, and finishes. Elevate your plants and create a visually appealing display with our exquisite pottery. Visit our nursery today and explore our diverse range of pottery options." />
</Helmet>
        
        <div className='pots_welcome'>
            <h2>Pots and Pottery</h2>
        </div>


        <div className='pots_body'>


        <img className='pots_img' alt='Jericho Pots' src={pots.image_url}/>
        <p>
            <h2>Perfect Pottery</h2>
            {pots.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Pots;