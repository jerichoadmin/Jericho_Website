import React from "react";
import './Conifer.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import coniferdata from '../../PlantData/Trees/ConiferData'

function Conifer() {






  return (
<div className='Conifer'> 



    <div className='conifer_tree_container'>
      <div className='conifer_top_text'> 

        <div className='conifer_header_background_image'>
              <h2>New Mexico Conifers</h2>
        </div>


              <p>At Jericho Nursery, we offer a variety of coniferous trees that thrive in Albuquerque’s arid climate, providing year-round greenery, wind protection, and excellent shade. Unlike deciduous trees that lose their leaves in winter, conifers—such as pines, junipers, and cypresses—retain their needles, making them an ideal choice for adding structure and beauty to your landscape throughout all seasons. Many conifers are also drought-tolerant, low-maintenance, and naturally adapted to New Mexico’s soils, making them a perfect long-term investment for your yard.</p>


      
              <p>Our team at Jericho Nursery specializes in helping New Mexico homeowners select and plant the right conifers for their space. Whether you’re looking for a fast-growing privacy screen, an elegant accent tree, or a hardy evergreen that can withstand drought and wind, we have the perfect options for you. From native selections like Pinyon pine and Rocky Mountain juniper to adaptable non-natives like Austrian pine and Arizona cypress, our selection below includes some of the best choices for New Mexico landscapes. Visit us today to explore our conifers and get expert advice on planting and care!</p>
          </div>



<div className='tree_catalog_body'>


    <div className='tree_catalog_sub_section'>
      <h2 className='tree_catalog_title'>Pine Trees</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.pines}/>

    


 
            </div>
          </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Juniper Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.junipers}/>
  

               
      
   
          </div>
        </div>

        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Spruce Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.spruces}/>
         
            
          </div>
        </div>
 
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Cypress Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.cypress}/>
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Arborvitae Evergreens</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={coniferdata.arborvitaes}/>
         
            
          </div>
        </div>

  </div>
  </div>
</div>
  )
}

export default Conifer
