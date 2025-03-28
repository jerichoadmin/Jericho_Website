import React from "react";
import './Fruit.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import fruitdata from '../../PlantData/Trees/FruitData'

function Fruit() {





  return (
<div className='Fruit'> 



    <div className='fruit_tree_container'>
      <div className='fruit_top_text'> 

        <div className='fruit_header_background_image'>
              <h2>New Mexico Fruit Trees</h2>
        </div>
              <p>Growing fruit and nut trees in New Mexico is a rewarding way to enjoy fresh, homegrown produce while adding beauty and value to your landscape. Albuquerque, located in USDA Hardiness Zone 7, is one of the best places in the country to grow a wide variety of fruit and nut trees. Our warm summers provide the heat needed for excellent fruit development, while our cold winters supply the necessary chill hours—the number of cold hours between 32–45°F that many fruit trees require to produce a successful crop. This balance makes Albuquerque an ideal environment for growing everything from peaches and apples to pecans and almonds.</p>

              <p>Pollination is another key factor when selecting fruit trees. Some varieties, like peaches, apricots, and almonds, are self-pollinating, meaning they can produce fruit on their own. Others, such as apples, pears, and many plums, need a second compatible tree nearby for cross-pollination to ensure a bountiful harvest. Nut trees, including pecans and walnuts, often require ample space and deep, well-draining soil to thrive.</p>

      
              <p>At Jericho Nursery, we carry a wide selection of fruit and nut trees suited for New Mexico’s unique climate, including low-chill apples, cold-hardy peaches, and resilient pecan trees. Whether you're a seasoned grower or just starting out, our experts are here to help you choose the right trees, understand their care requirements, and maximize your harvest. Visit us today to explore our selection and get personalized advice on planting, pollination, and long-term tree care!</p>
          </div>



<div className='tree_catalog_body'>


    <div className='tree_catalog_sub_section'>
      <h2 className='tree_catalog_title'>Apple Trees</h2>
          <div className='catalog_cards'>

        <PlantSlider plants={fruitdata.apples}/>
    


 
            </div>
          </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Cherry Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.cherries}/>
  

               
      
   
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Peach Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.peaches}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Nectarine Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.nectarines}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Apricot Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.apricots}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Plum Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.plums}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Pear Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.pears}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Fig Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.figs}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Pomegranate Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.pomegranates}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Unique Fruit Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.others}/>
      
            
          </div>
        </div>


        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Almond Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.almonds}/>
      
            
          </div>
        </div>
        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Pecan Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.pecans}/>
      
            
          </div>
        </div>

        <div className='tree_catalog_sub_section'>
            <h2 className='tree_catalog_title'>Pistachio Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider plants={fruitdata.pistachios}/>
      
            
          </div>
        </div>


  </div>
  </div>      
</div>
  )
}

export default Fruit
