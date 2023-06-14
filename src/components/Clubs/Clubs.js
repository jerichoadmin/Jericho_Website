import React from 'react'
import './Clubs.css'
import { listData } from './listData'
import { Helmet } from 'react-helmet'

function Clubs() {
  return (
    <div className='Clubs'>

<Helmet>
        <title>Gardening Clubs in Albuquerque - Jericho Nursery</title>
        <meta name="description" content="Explore gardening clubs in Albuquerque and connect with like-minded individuals who share your passion for gardening. Discover the joy of community gardening and exchange knowledge and experiences." />
        <meta property="og:title" content="Gardening Clubs in Albuquerque - Connect with Local Gardeners" />
        <meta property="og:description" content="Explore gardening clubs in Albuquerque and connect with like-minded individuals who share your passion for gardening. Discover the joy of community gardening and exchange knowledge and experiences." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/SEO_photos/swgarden.jpg" />
        <meta property="og:type" content="website" />

</Helmet>

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
      <p>For more information, visit the Albuqueruque Garden Center website. They have tons of information on joining clubs, syndication, and much more. Click the button below to visit their website</p>
      <a href='https://www.albuquerquegardencenter.org/' target="_blank" rel="noreferrer">
      <button>ABQGardenCenter.org</button>
      </a>
            </div>

        </div>
    </div>
  )
}

export default Clubs