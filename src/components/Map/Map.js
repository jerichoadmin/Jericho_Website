import React from 'react'
import './Map.css'
import map from '../../Assets/JerichoMap.jpg'
import key from '../../Assets/JerichoMapKey.jpg'
import { Helmet } from 'react-helmet'

function Map() {
  return (
    <div className='map'>
<Helmet>
        <title>Jericho Nursery Map - Visit Our Location</title>
        <meta name="description" content="Explore the map of Jericho Nursery's location and plan your visit. We are conveniently located and provide a wide selection of plants, gardening supplies, and expert advice." />
        <meta property="og:title" content="Jericho Nursery Map - Visit Our Location" />
        <meta property="og:description" content="Explore the map of Jericho Nursery's location and plan your visit. We are conveniently located and provide a wide selection of plants, gardening supplies, and expert advice." />
        <meta property="og:type" content="website" />
</Helmet>
          <div className='map_welcome'>
            <h1>Need help getting around?</h1>      
            <p>Check out the Jericho Nursery Map below to help you navigate our garden center</p>
            </div>  

            <div className='map_body_main'>
<div className='map_container'>
            <img alt='Map of Jericho Nursery' src={map} className='mapimg'/>
            <img alt='Key for Jericho Nursery Map' src={key} className='mapkey'/>
</div>



            </div>


    </div>
  )
}

export default Map