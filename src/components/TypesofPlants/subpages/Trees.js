import React from 'react'
import plantListData from '../plantListData'
import './Trees.css'
import { Helmet } from 'react-helmet';

function Trees() {



    const trees = plantListData.filter((_, index) => index === 4)[0];




  return (
    <div className='Trees'>
        <Helmet>
  <title>Trees at Jericho Nursery</title>
  <meta name="description" content="Discover a wide variety of trees at Jericho Nursery. We offer an extensive selection of high-quality trees to enhance your landscape. From ornamental trees to shade trees, find the perfect specimens for your outdoor space. Enjoy the beauty, shade, and environmental benefits that trees provide. Visit our nursery today and explore our diverse range of tree options." />
  <meta property="og:title" content="Trees at Jericho Nursery" />
  <meta property="og:description" content="Discover a wide variety of trees at Jericho Nursery. We offer an extensive selection of high-quality trees to enhance your landscape. From ornamental trees to shade trees, find the perfect specimens for your outdoor space. Enjoy the beauty, shade, and environmental benefits that trees provide. Visit our nursery today and explore our diverse range of tree options." />
</Helmet>
        
        <div className='trees_welcome'>
            <h2>Trees and Shrubs</h2>
        </div>


        <div className='trees_body'>


        <img className='trees_img' alt='Jericho Trees' src={trees.image_url}/>
        <p>
            <h2>Terrific Trees and Showboaty Shrubs</h2>
            {trees.paragraph}    
        </p>
        </div>

    </div>
  )
}

export default Trees;