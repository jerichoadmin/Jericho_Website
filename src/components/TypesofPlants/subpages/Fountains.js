import React from 'react'
import plantListData from '../plantListData'
import './Fountains.css'
import { Helmet } from 'react-helmet';

function Fountains() {



    const fountains = plantListData.filter((_, index) => index === 8)[0];



  return (
    <div className='Fountains'>
      
  <Helmet>
  <title>Fountains at Jericho Nursery</title>
  <meta name="description" content="Explore a stunning collection of fountains at Jericho Nursery. We offer a wide selection of high-quality fountains to enhance your outdoor space. From elegant tiered fountains to modern and minimalist designs, find the perfect centerpiece for your garden or patio. Create a serene and tranquil atmosphere with our beautiful fountains. Visit our nursery today and discover our diverse range of fountain options." />
  <meta property="og:title" content="Fountains at Jericho Nursery" />
  <meta property="og:description" content="Explore a stunning collection of fountains at Jericho Nursery. We offer a wide selection of high-quality fountains to enhance your outdoor space. From elegant tiered fountains to modern and minimalist designs, find the perfect centerpiece for your garden or patio. Create a serene and tranquil atmosphere with our beautiful fountains. Visit our nursery today and discover our diverse range of fountain options." />
</Helmet>
        
        <div className='fountains_welcome'>
            <h2>Fountains and Water Features</h2>
        </div>


        <div className='fountains_body'>


        <img className='fountains_img' alt='Jericho Fountains Plants and Seeds' src={fountains.image_url}/>
        <p>
            <h2>Fabulous Fountains</h2>
            {fountains.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Fountains;