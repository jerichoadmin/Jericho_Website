import React from "react";
import './Ornamental.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import ornamentaldata from "../../PlantData/Trees/OrnamentalData";

function Ornamental() {





  return (
<div className='Ornamental'> 



    <div className='ornamental_tree_container'>
      <div className='ornamental_top_text'> 

        <div className='ornamental_header_background_image'>
              <h2>New Mexico Ornamental Trees</h2>
        </div>
              <p>At Jericho Nursery, we offer a beautiful selection of ornamental and flowering trees that thrive in Albuquerque’s climate, bringing vibrant color, seasonal blooms, and unique textures to your landscape. These trees are perfect for adding curb appeal, attracting pollinators like bees and butterflies, and providing seasonal interest with stunning flowers, colorful foliage, and decorative bark. Whether you want a striking springtime display, a fragrant accent tree, or year-round beauty, the right ornamental tree can transform your outdoor space.</p>


      
              <p>Our experts at Jericho Nursery are here to help you choose the best flowering trees for your yard, ensuring they are well-suited to New Mexico’s dry climate, alkaline soil, and intense sun. From low-water favorites like the Vitex agnus-cactus and Chitalpa to stunning flowering fruit trees such as the bradford pear or Canada chokechery, we have an array of options to fit any landscape. Explore our selection below and visit us for expert advice on planting and caring for these eye-catching trees!</p>
          </div>



<div className='tree_catalog_body'>


    <div className='tree_catalog_sub_section'>
      <h2 className='tree_catalog_title'>Flowering Pear Trees</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.pears}/>

    


 
            </div>
          </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Flowering Cherry Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.cherries}/>


               
      
   
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Flowering Plum Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.plums}/>
  
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Crabapple Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.crabapples}/>
   
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Redbud Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.redbuds}/>
       
         
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Additional Flowering Tree Options</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={ornamentaldata.unique}/>
       
         
            
          </div>
        </div>
  </div>
  </div>      
</div>
  )
}

export default Ornamental
