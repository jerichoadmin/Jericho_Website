import React from 'react'
import plantListData from '../plantListData'
import './Landscaping.css'
import { Helmet } from 'react-helmet';

function Landscaping() {



    const landscaping = plantListData.filter((_, index) => index === 5)[0];




  return (
    <div className='Landscaping'>
        <Helmet>
  <title>Fountains at Jericho Nursery</title>
  <meta name="description" content="Explore a stunning collection of fountains at Jericho Nursery. We offer a wide selection of high-quality fountains to enhance your outdoor space. From elegant tiered fountains to modern and minimalist designs, find the perfect centerpiece for your garden or patio. Create a serene and tranquil atmosphere with our beautiful fountains. Visit our nursery today and discover our diverse range of fountain options." />
  <meta property="og:title" content="Fountains at Jericho Nursery" />
  <meta property="og:description" content="Explore a stunning collection of fountains at Jericho Nursery. We offer a wide selection of high-quality fountains to enhance your outdoor space. From elegant tiered fountains to modern and minimalist designs, find the perfect centerpiece for your garden or patio. Create a serene and tranquil atmosphere with our beautiful fountains. Visit our nursery today and discover our diverse range of fountain options." />
</Helmet>
        
        <div className='landscaping_welcome'>
            <h2>Landscaping and Shrubs</h2>
        </div>


        <div className='landscaping_body'>


        <img className='landscaping_img' alt='Jericho Landscaping' src={landscaping.image_url}/>
        <p>
            <h2>Lavish Landscaping</h2>
            {landscaping.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Landscaping;