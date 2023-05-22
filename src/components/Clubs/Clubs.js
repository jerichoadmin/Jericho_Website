import React from 'react'
import './Clubs.css'
import { listData } from './listData'

function Clubs() {
  return (
    <div className='Clubs'>

<div className='clubs_welcome'>
    <h1>Garden Clubs Around Albuquerque</h1>
</div>



        <div className='clubs_body_main'>

            <h1>Consider Joining!</h1>





            <div className="garden_club_list">
      {listData.map((item, index) => (
        <div key={index} className="list-item">
          <h3 className="club_item_title">{item.title}</h3>
          <p className="club_item_paragraph">{item.paragraph}</p>
          <div className="club_item_contact">{item.contactInfo}</div>
        </div>
      ))}
    </div>


    <div className='club_statement'>
      <p>For more information, visit the Albuqueruq Garden Center website. They have tons of information on joining clubs, syndication, and much more. Click the button below to visit their website</p>
      <a href='https://www.albuquerquegardencenter.org/' target="_blank" rel="noreferrer">
      <button>ABQGardenCenter.org</button>
      </a>
            </div>

        </div>
    </div>
  )
}

export default Clubs