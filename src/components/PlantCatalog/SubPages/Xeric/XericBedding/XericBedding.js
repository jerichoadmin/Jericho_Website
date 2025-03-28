import React from "react";
import './XericBedding.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import xericbedding from "../../PlantData/Xeric/XericBeddingData";




function XericBedding() {


  return (
<div className='XericBedding'> 



    <div className='xeric_tree_container'>
      <div className='xeric_top_text'> 

        <div className='xeric_bedding_header_background_image'>
              <h2>Xeric Bedding & Groundcovers: A Water-Wise Foundation</h2>
        </div>
              <p>Xeric bedding plants and groundcovers play a crucial role in a drought-tolerant landscape, helping to fill spaces with color, texture, and erosion control while requiring minimal water. These low-growing, spreading plants help retain soil moisture, reduce evaporation, and suppress weeds, making them an essential component of any xeriscaped yard. Options like Desert Zinnia, Damianita Daisy, and Mexican Primrose provide bursts of seasonal color, while Ice Plant and Silver Carpet create lush, mat-like coverage that thrives in the heat. Many xeric groundcovers are also pollinator-friendly, offering nectar and shelter to beneficial insects, making them both beautiful and functional additions to your garden.</p>

              <p>At Jericho Nursery, we specialize in xeric bedding and groundcovers that thrive in Albuquerque’s arid climate. Whether you’re looking to soften the edges of a walkway, create a vibrant flowering carpet, or stabilize a sloped area with deep-rooted coverage, we have the perfect options to fit your landscape needs. Our expert team can help you select the right plants to complement your xeric trees and shrubs while reducing maintenance and water use. Browse our selection below and discover how xeric bedding plants and groundcovers can transform your garden into a resilient, low-water oasis!</p>
          </div>



<div className='xeric_catalog_body'>


    <div className='xeric_catalog_sub_section'>
      <h2 className='xeric_catalog_title'>Xeric Annuals and Perennials</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={xericbedding.flowers}/>

    


 
            </div>
          </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Xeric Groundcovers</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xericbedding.groundcovers}/>
      
     
  

               
      
   
          </div>
        </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Xeric Succelents</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xericbedding.succelents}/>
      
     
  

               
      
   
          </div>
        </div>
      


  </div>
  </div>      
</div>
  )
}

export default XericBedding;
