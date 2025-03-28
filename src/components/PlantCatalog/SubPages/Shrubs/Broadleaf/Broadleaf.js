import React, {useState} from "react";
import './Broadleaf.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import broadleafevergreens from "../../PlantData/Shrubs/BroadleafEvergreenData";


function Broadleaf() {


  const [visibleAttribution, setVisibleAttribution] = useState();

  const toggleVisible = () => {
    setVisibleAttribution(!visibleAttribution)
  }


  return (
<div className='Broadleaf'> 



    <div className='broadleaf_tree_container'>
      <div className='broadleaf_top_text'> 

        <div className='broadleaf_header_background_image'>
              <h2>NM Broadleaf Evergreen Shrubs</h2>
        </div>
              <p>Broadleaf evergreen shrubs provide lush greenery year-round, making them an excellent choice for adding structure, privacy, and color to your landscape, even in the depths of winter. Unlike deciduous plants that lose their leaves in the fall, these shrubs maintain their dense foliage throughout the seasons, offering a natural windbreak, noise barrier, and habitat for birds. Many broadleaf evergreens, such as Indian hawthorn, red-tip photinia, and yaupon holly, are also heat and drought tolerant, making them well-suited for Albuquerque’s dry climate.</p>
      
              <p>For homeowners looking to create a low-maintenance, resilient landscape, broadleaf evergreens are a smart investment. Our selection includes climate-adapted varieties that thrive in New Mexico’s unique growing conditions, from hedges that provide privacy to flowering evergreens that add seasonal interest. Explore our collection below, and visit Jericho Nursery for expert advice on planting, pruning, and keeping your landscape vibrant year-round!</p>
          </div>



<div className='shrub_catalog_body'>


    <div className='shrub_catalog_sub_section'>
      <h2 className='shrub_catalog_title'>Boxwoods</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.boxwoods}/>

    

            </div>
          </div>


        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Euonomys</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.euonomys}/>
  
          
   
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Photinias</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.photinias}/>
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Nandinas</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.nandinas}/>
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Mahoganies</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.mahogonies}/>
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Cotoneasters</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.cotoneasters}/>
      
         
            
          </div>
        </div>

        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Burning Bushes</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.burningbush}/>
  
         
            
          </div>
        </div>
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Barberries</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.barberries}/>
  
         
            
          </div>
        </div>
   
        <div className='shrub_catalog_sub_section'>
            <h2 className='shrub_catalog_title'>Additional Broadleaf Evergreens</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={broadleafevergreens.others}/>
  
         
            
          </div>
        </div>

        <div className="attribution-container">
      <button className="attribution-button" onClick={toggleVisible}>
        {visibleAttribution ? "Hide Image Attributions" : "View Image Attributions"}
      </button>
      
      {visibleAttribution && (
        <div className="attribution-content">
          
          <div className="single_attribution">
          <span><strong>Manhattan Euonymus Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Euonymus kiautschovicus Manhattan 0zz.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/Special:Contributions/David_Stang" target="_blank" rel="noopener noreferrer">
                David J. Stang
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Euonymus_kiautschovicus_Manhattan_0zz.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        
          
          <div className="single_attribution">
          <span><strong>Alderleaf Mountain Mahogany</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Cercocarpus montanus kz07.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Kenraiz" target="_blank" rel="noopener noreferrer">
              Krzysztof Ziarnek
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Cercocarpus_montanus_kz07.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        
          <div className="single_attribution">
          <span><strong>Curl-leaf Mountain Mahogany</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Cercocarpus ledifolius 8219.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Wsiegmund" target="_blank" rel="noopener noreferrer">
              Walter Siegmund
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Cercocarpus_ledifolius_8219.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 3.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        
    



        </div>
      )}
      </div> 

  </div>
  </div>      
</div>
  )
}

export default Broadleaf;
