import React, {useState} from 'react'
import plantListData from './plantListData'
import './TypesofPlants.css'

function TypesofPlants() {
    let dialogRef = null;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPlant, setSelectedPlant] = useState(null);
  
    const openModal = (plant) => {
      setSelectedPlant(plant);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedPlant(null);
      setIsOpen(false);
    };
  
    const handleOutsideClick = (event) => {
      if (event.target === dialogRef) {
        closeModal();
      }
    };



  return (
    <div className='TypesofPlants'>
    <div className='top_welcome'>
        <h1>Types of Plants</h1>
    <p>Discover all the plant types that Jericho has to offer with this small directory</p>
    </div>

        




        <div className='top_body_main'>

        <div>
      {plantListData.map((plant, index) => (
        <div key={index} className='top_card'>
          <h2>{plant.name}</h2>
          <img
            className='type_of_image'
            alt='type_of_products'
            src={plant.image_url}
            onClick={() => openModal(plant)}
          />

          {isOpen && selectedPlant === plant && (
            <dialog
              open
              ref={(ref) => (dialogRef = ref)}
              onClick={handleOutsideClick}
              className='modal'
            >
              <button onClick={closeModal}>Close</button>
              <p>{plant.paragraph}</p>
            </dialog>
          )}
        </div>
      ))}
    </div>

        






        </div>
    </div>
  )
}

export default TypesofPlants