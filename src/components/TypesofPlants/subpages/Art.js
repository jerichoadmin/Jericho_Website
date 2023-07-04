import React from 'react'
import plantListData from '../plantListData'
import './Art.css'
import { Helmet } from 'react-helmet'

function Art() {




    const art = plantListData.filter((_, index) => index === 7)[0];



  return (
    <div className='Art'>
        <Helmet>
  <title>Garden Artwork at Jericho Nursery</title>
  <meta name="description" content="Discover unique garden artwork at Jericho Nursery. We offer a wide selection of artistic pieces to enhance your outdoor space. Find sculptures, fountains, decorative planters, and more. Create a captivating and personalized garden with our high-quality artwork. Visit our nursery today and explore our diverse range of garden treasures." />
  <meta property="og:title" content="Garden Artwork at Jericho Nursery" />
  <meta property="og:description" content="Discover unique garden artwork at Jericho Nursery. We offer a wide selection of artistic pieces to enhance your outdoor space. Find sculptures, fountains, decorative planters, and more. Create a captivating and personalized garden with our high-quality artwork. Visit our nursery today and explore our diverse range of garden treasures." />
</Helmet>

        
        <div className='art_welcome'>
            <h2>Garden Art and Gift</h2>
        </div>


        <div className='art_body'>


        <img className='art_img' alt='Jericho Art Plants and Seeds' src={art.image_url}/>
        <p>
            <h2>Galliant Garden Gifts</h2>
            {art.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Art