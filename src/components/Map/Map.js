import React from 'react'
import './Map.css'
import map from '../../Assets/JerichoMap.jpg'
import key from '../../Assets/JerichoMapKey.jpg'

function Map() {
  return (
    <div className='map'>
          <div className='map_welcome'>
            <h1>Need help getting around?</h1>      
            <p>Check out the Jericho Nursery Map below to help you navigate our garden center</p>
            </div>  

            <div className='map_body_main'>
<div className='map_container'>
            <img alt='' src={map} className='mapimg'/>
            <img alt='' src={key} className='mapkey'/>
</div>



            </div>


    </div>
  )
}

export default Map