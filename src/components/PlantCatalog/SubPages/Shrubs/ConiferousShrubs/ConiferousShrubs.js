import React from "react";
import './ConiferousShrubs.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import coniferousshrubs from "../../PlantData/Shrubs/ConiferousShrubData";



function ConiferousShrubs() {


  return (
<div className='ConiferousShrubs'> 



    <div className='coniferous_shrub_tree_container'>
      <div className='coniferous_shrub_top_text'> 

        <div className='coniferous_shrub_header_background_image'>
              <h2>New Mexico Coniferous Shrubs</h2>
        </div>
              <p>Coniferous shrubs are an excellent choice for year-round greenery, erosion control, and drought resistance in New Mexico landscapes. These hardy evergreens, including junipers, pinyon pines, and dwarf cypress varieties, thrive in Albuquerque’s arid climate while requiring little maintenance once established. Many coniferous shrubs are ideal for low-water xeriscaping, offering dense foliage for windbreaks, privacy screening, and natural landscaping solutions. Their needle-like leaves and woody structure also help conserve soil moisture, making them a smart choice for sustainable gardening.</p>
      
              <p>Whether you're looking to add structure to your garden, prevent soil erosion on slopes, or create a natural, low-maintenance border, coniferous shrubs are a versatile solution. Our selection includes both native and non-native coniferous shrubs that are well-suited to New Mexico’s unique climate and soil conditions. Browse our top choices below, and stop by Jericho Nursery to find the perfect evergreen shrubs for your yard, along with expert planting and care advice!</p>
          </div>



<div className='shrub_catalog_body'>


    <div className='shrub_catalog_sub_section'>
      <h2 className='shrub_catalog_title'>Pine Shrubs</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={coniferousshrubs.pines}/>

    


 
            </div>
          </div>


        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Juniper Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferousshrubs.junipers}/>

     
  

               
    
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Spruce Shrubs</h2>
            <PlantSlider  plants={coniferousshrubs.spruces}/>

  
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Abrorvitae Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferousshrubs.arborvitaes}/>


          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Hollies</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferousshrubs.hollies}/>
        
            
          </div>
        </div>

  
  


  </div>
  </div>      

  )
}

export default ConiferousShrubs;
