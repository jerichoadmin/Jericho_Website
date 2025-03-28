import React, {useState} from "react";
import './Cacti.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import cactusdata from "../../PlantData/Xeric/CactusData";




function Cacti() {

  
const [visibleAttribution, setVisibleAttribution] = useState();
  
const toggleVisible = () => {
setVisibleAttribution(!visibleAttribution)
}


  return (
<div className='Cacti'> 



    <div className='xeric_tree_container'>
      <div className='xeric_top_text'> 

        <div className='xeric_header_background_image'>
              <h2>Cactus, Yucca & Agave: The Icons of Xeriscaping</h2>
        </div>
              <p>Cacti, yucca, and agave are the ultimate low-water plants, perfectly adapted to thrive in Albuquerque’s arid climate. These striking desert plants not only survive on minimal rainfall but also add bold texture, dramatic structure, and year-round interest to any xeric landscape. With their water-storing capabilities, spiky silhouettes, and stunning seasonal blooms, they are a must-have for anyone looking to create a sustainable, water-wise garden. From the towering Soaptree Yucca to the sculptural Whale’s Tongue Agave and the ever-popular Prickly Pear Cactus, these plants provide unmatched beauty and resilience. Many also support local wildlife, offering nectar-rich flowers for pollinators and shelter for birds.</p>
 
      
              <p>At Jericho Nursery, we carry a diverse selection of cacti, yucca, and agave that are perfectly suited to New Mexico’s climate. Whether you’re searching for a Golden Barrel Cactus as a showpiece, a Blue Agave to bring an architectural element to your yard, or a fast-growing Yucca rostrata for a striking focal point, our knowledgeable team is here to help. These hardy plants require little maintenance beyond occasional pruning and proper placement, making them an excellent choice for a stunning, hassle-free xeric landscape. Explore our collection below and let us help you design a bold and water-wise outdoor space!</p>
          </div>



<div className='xeric_catalog_body'>


    <div className='xeric_catalog_sub_section'>
      <h2 className='xeric_catalog_title'>Cacti</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={cactusdata.cactus}/>

    


 
            </div>
          </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Yuccas</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={cactusdata.yuccas}/>
      
     
  

               
      
   
          </div>
        </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Agaves</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={cactusdata.agaves}/>
      
     
  

               
      
   
          </div>
        </div>

        {/* <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Aloe</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={cactusdata.aloes}/>
      
     
  

               
      
   
          </div>
        </div> */}



        <div className="attribution-container">
      <button className="attribution-button" onClick={toggleVisible}>
        {visibleAttribution ? "Hide Image Attributions" : "View Image Attributions"}
      </button>
      
      {visibleAttribution && (
        <div className="attribution-content">
          
          <div className="single_attribution">
          <span><strong>Red Yucca Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Hesperaloe parviflora, Ponteilla.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Sylenius" target="_blank" rel="noopener noreferrer">
              Sylenius
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Hesperaloe_parviflora,_Ponteilla.jpg" target="_blank" rel="noopener noreferrer">
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
          <div className="single_attribution">
          <span><strong>Navajo Yucca Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Yucca baileyi in Christchurch Botanic Gardens 03.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Tournasol7" target="_blank" rel="noopener noreferrer">
              Krzysztof Golik
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Yucca_baileyi_in_Christchurch_Botanic_Gardens_03.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
              </a>
            </li>
            <li><strong>Modifications:</strong> Resized and cropped into a circular frame</li>
          </ul>
        </div>
        <div className="single_attribution">
          <span><strong>Twin-flowered Agave Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Agave geminiflora - Twin-flowered agave 01-1.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Zcebeci" target="_blank" rel="noopener noreferrer">
              Zeynel Cebeci
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Agave_geminiflora_-_Twin-flowered_agave_01-1.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener noreferrer">
                CC BY-SA 4.0
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

export default Cacti;
