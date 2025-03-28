import React, {useState} from "react";
import './XericTrees.css'
import PlantSlider from "../../PlantSlider/PlantSlider";
import xerictrees from "../../PlantData/Xeric/XericTreeData";




function XericTrees() {

    const [visibleAttribution, setVisibleAttribution] = useState();
  
    const toggleVisible = () => {
      setVisibleAttribution(!visibleAttribution)
    }
  


  return (
<div className='XericTrees'> 



    <div className='xeric_tree_container'>
      <div className='xeric_top_text'> 

        <div className='xeric_tree_header_background_image'>
              <h2>Xeric Trees for New Mexico</h2>
        </div>
              <p>Xeric trees are the foundation of a water-wise landscape, providing essential shade, structure, and beauty while requiring minimal irrigation. In Albuquerque’s arid climate, choosing drought-tolerant trees ensures your yard stays lush and inviting without excessive water use. Many xeric trees, such as the Golden Train Tree and Velvet Mesquite, have deep root systems that help them withstand prolonged dry periods while still delivering seasonal beauty with stunning blooms, unique foliage, and vibrant fall color. These trees not only enhance the aesthetic appeal of your landscape but also create cooler microclimates, helping to reduce overall water loss and providing relief from the intense New Mexico sun.</p>
      
              <p>At Jericho Nursery, we specialize in xeric trees that thrive in our region, offering a variety of native and well-adapted species suited for low-water landscapes. Whether you’re looking for a Chitalpa for its pink trumpet-shaped flowers, a Pistache for its fiery autumn foliage, or an Arizona Cypress for year-round greenery, our selection has something for every landscape style. Our experts can help you choose the right tree for your space, ensuring it meets your needs for shade, size, and aesthetic appeal. Explore our collection below and discover how xeric trees can transform your yard into a sustainable, low-maintenance oasis!</p>
          </div>



<div className='xeric_catalog_body'>


    <div className='xeric_catalog_sub_section'>
      <h2 className='xeric_catalog_title'>Xeric Shade Trees</h2>
          <div className='catalog_cards'>
            <PlantSlider  plants={xerictrees.shadetrees}/>

    


 
            </div>
          </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Xeric Flowering Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xerictrees.floweringtrees}/>
     
      
     
  

               
      
   
          </div>
        </div>

        <div className='xeric_catalog_sub_section'>
            <h2 className='xeric_catalog_title'>Xeric Coniferous Trees</h2>
            <div className='catalog_cards'>
            <PlantSlider  plants={xerictrees.coniferoustrees}/>
   
      
     
  

               
      
   
          </div>
        </div>

        <div className="attribution-container">
      <button className="attribution-button" onClick={toggleVisible}>
        {visibleAttribution ? "Hide Image Attributions" : "View Image Attributions"}
      </button>
      
      {visibleAttribution && (
        <div className="attribution-content">
          
          <div className="single_attribution">
          <span><strong>New Mexico Olive Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Forestiera neomexicana.JPG</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/Special:Contributions/Miguel_%C3%81ngel_Sep%C3%BAlveda" target="_blank" rel="noopener noreferrer">
              Miguel Ángel Sepúlveda
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Forestiera_neomexicana.JPG" target="_blank" rel="noopener noreferrer">
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
          <span><strong>Arizona Rosewood Image</strong></span>
          <ul>
            <li><strong>Title:</strong> <em>Vauquelinia californica 1.jpg</em></li>
            <li>
              <strong>Photographer:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/User:Stan_Shebs" target="_blank" rel="noopener noreferrer">
              Stan Shebs
              </a>
            </li>
            <li>
              <strong>Source:</strong>{" "}
              <a href="https://commons.wikimedia.org/wiki/File:Vauquelinia_californica_1.jpg" target="_blank" rel="noopener noreferrer">
                Wikimedia Commons
              </a>
            </li>
            <li>
              <strong>License:</strong>{" "}
              <a href="https://creativecommons.org/licenses/by-sa/2.5/deed.en" target="_blank" rel="noopener noreferrer">
              CC BY-SA 2.5
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

export default XericTrees;
