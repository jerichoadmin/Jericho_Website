import React from "react";
import './Flowering.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import floweringshrubdata from "../../PlantData/Shrubs/FloweringShrubData";



function Flowering() {


  return (
<div className='Flowering'> 



    <div className='flowering_tree_container'>
      <div className='flowering_top_text'> 

        <div className='flowering_header_background_image'>
              <h2>New Mexico Flowering Shrubs</h2>
        </div>
              <p>Flowering shrubs bring vibrant color, fragrance, and pollinator activity to New Mexico landscapes, making them a favorite choice for homeowners looking to enhance their outdoor spaces. Many of these shrubs are drought-tolerant and well-adapted to Albuquerque’s arid climate, offering stunning seasonal blooms with minimal water needs. Popular choices like butterfly bush, Texas sage, and caryopteris not only add beauty but also attract essential pollinators like bees, butterflies, and hummingbirds, helping to support local ecosystems.</p>

              <p>At Jericho Nursery, we carefully select flowering shrubs that thrive in New Mexico’s unique soil and climate conditions, ensuring long-lasting performance in your yard. Whether you're looking for low-maintenance options, native selections, or continuous bloomers for color throughout the seasons, we have a variety of options to suit your needs. Explore our collection below, and visit us today for expert advice on planting, care, and creating a stunning flowering landscape!</p>
          </div>



<div className='shrub_catalog_body'>


    <div className='shrub_catalog_sub_section'>
      <h2 className='shrub_catalog_title'>Butterfly Bushes</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.butterflybushes}/>

    


 
            </div>
          </div>


        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Indian Hawthornes</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.indianhawthornes}/>
     
  

               
      
   
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Potentillas</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.potentillas}/>
  
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Salvias</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.salvias}/>

          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Texas Sages</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.texassage}/>

          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Lilacs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.lilacs}/>

         
            
          </div>
        </div>

        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Crape Myrtles</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.crapemyrtles}/>
    
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Lavendars</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.lavendars}/>
    
         
            
          </div>
        </div>

        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Rose of Sharons</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.roseofsharons}/>

         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Forsythias</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.forsythias}/>
     
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Caryopteris Varieties</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.spireas}/>
     
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Drought Tolerant Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.xerics}/>
     
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>More Great Flowering Shrubs</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={floweringshrubdata.others}/>
     
         
            
          </div>
        </div>


  </div>
  </div>      
</div>
  )
}

export default Flowering;
