import React from 'react'
import plantListData from '../plantListData'
import './Roses.css'
import { Helmet } from 'react-helmet';

function Roses() {




    const roses = plantListData.filter((_, index) => index === 3)[0];




  return (
    <div className='Roses'>
        <Helmet>
  <title>Roses at Jericho Nursery</title>
  <meta name="description" content="Explore a beautiful selection of roses at Jericho Nursery. We offer a wide variety of high-quality rose plants, including hybrid teas, floribundas, climbers, and more. Discover an array of colors, fragrances, and growth habits to suit your garden. Create a romantic and elegant atmosphere with our exquisite roses. Visit our nursery today and explore our diverse range of rose options." />
  <meta property="og:title" content="Roses at Jericho Nursery" />
  <meta property="og:description" content="Explore a beautiful selection of roses at Jericho Nursery. We offer a wide variety of high-quality rose plants, including hybrid teas, floribundas, climbers, and more. Discover an array of colors, fragrances, and growth habits to suit your garden. Create a romantic and elegant atmosphere with our exquisite roses. Visit our nursery today and explore our diverse range of rose options." />
</Helmet>

        
        <div className='roses_welcome'>
            <h2>Roses</h2>
        </div>


        <div className='roses_body'>


        <img className='roses_img' alt='Jericho Roses' src={roses.image_url}/>
        <p>
            <h2>Robust Roses</h2>
            {roses.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Roses;