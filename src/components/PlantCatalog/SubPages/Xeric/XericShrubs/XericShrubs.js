import React from "react";
import './XericShrubs.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import xericshrubs from "../../PlantData/Xeric/XericShrubData";




function XericShrubs() {


  return (
<div className='XericShrubs'> 



    <div className='xeric_tree_container'>
      <div className='xeric_top_text'> 

        <div className='xeric_shrub_header_background_image'>
              <h2>Xeric Shrubs in New Mexico</h2>
        </div>
              <p>Xeric shrubs are the backbone of a well-balanced, drought-tolerant landscape, offering structure, color, and habitat without the need for excessive watering. These resilient plants thrive in Albuquerque’s arid climate, with deep root systems and water-efficient foliage that help them withstand the heat while maintaining their beauty. Whether you’re looking for floral bursts from Texas Sage, the silvery elegance of Big Sagebrush, or the fragrant charm of Rosemary, xeric shrubs provide a diverse range of options to add texture and seasonal interest to your garden. Many also attract pollinators, providing vital resources for bees, butterflies, and hummingbirds, further enhancing the ecological benefits of your landscape.</p>

              <p>With an extensive selection of drought-tolerant shrubs, Jericho Nursery is your go-to destination for creating a beautiful, water-wise yard. We carry a variety of xeric shrubs, from flowering options that add pops of seasonal color to evergreens that provide lasting structure and greenery. Whether you need a fast-growing hedge for privacy, a compact shrub for a rock garden, or a tough, sun-loving plant that thrives with minimal care, we’re here to help you find the perfect fit. Explore our collection below and discover how xeric shrubs can enhance your outdoor space with effortless beauty and sustainability.</p>
          </div>



<div className='xeric_catalog_body'>


    <div className='xeric_catalog_sub_section'>
      <h2 className='xeric_catalog_title'>Xeric Broadleaf Evergreens</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={xericshrubs.broadleafs}/>

    


 
            </div>
          </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Xeric Flowering Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xericshrubs.flowering}/>
      
     
  

               
      
   
          </div>
        </div>

        {/* <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Grasses</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xericshrubs.grasses}/>
      
     
  

               
      
   
          </div>
        </div> */}
        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Hard Xeric Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xericshrubs.hardxeric}/>
      
     
  

               
      
   
          </div>
        </div>
      


  </div>
  </div>      
</div>
  )
}

export default XericShrubs;
