import React, {useState} from 'react'
import './Partners.css'
import logo1 from '../../Assets/bacastrees.jpg'
import logo2 from '../../Assets/justsprinklers.jpg'
import logo3 from '../../Assets/rehms.jpg'
import logo4 from '../../Assets/soilmender.jpg'
import logo5 from '../../Assets/505outside.jpg'
import soil from '../../Assets/soilutionslogo.png'
import suregreen from '../../Assets/suregreen.png'
import { Helmet } from 'react-helmet'

function Partners() {



  const [expandedBio, setExpandedBio] = useState(null);

  const toggleBio = (partner) => {
      setExpandedBio(prevBio => (prevBio === partner ? null : partner));
  };


  return (

    


    <div className='Partners'>
<Helmet>
        <title>Our Partners - Jericho Nursery</title>
        <meta name="description" content="Discover our trusted partners who collaborate with Jericho Nursery to bring you the best gardening products and services." />
        <meta property="og:title" content="Partners of Jericho - Jericho Nursery" />
        <meta property="og:description" content="Discover our trusted partners who collaborate with Jericho Nursery to bring you the best gardening products and services." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />
</Helmet>
            <div className='partners_welcome'>
            <h1>Partners of Jericho</h1>
                <p>
                These are our proud sponsors. We can guarantee that these brands are some of the most reliable in Albuquerque, other than us.
                </p>
        </div>


<div className='partners_body'>
            <div className='partners_body_top'>
                <h1>Garden Talk Sponsors</h1>

                <p>
                 Support the proud sponsors of Jericho Nursery's Garden Talk Radio Show.
                </p>      
                <div className='gts_pics'>
                    <a href='https://www.bacastrees.com/' target="_blank"  rel="noreferrer"  title='Take me to their Website!'>
                    <img src={logo1} alt='Baca Trees' className='partner_logos'/>
                    </a>
                    <a href='https://www.justsprinklers.com/' target="_blank"  rel="noreferrer"  title='Take me to their Website!'>
                    <img src={logo2} alt='Just Sprinklers' className='partner_logos'/>
                    </a>
                    <a href='http://www.soilmender.com/' target="_blank"  rel="noreferrer"  title='Take me to their Website!'>
                    <img src={logo4} alt='Soil Mender' className='partner_logos'/>
                    </a>
                    <a href='https://soilutions.net/' target="_blank"  rel="noreferrer"  title='Take me to their Website!'>
                    <img src={soil} alt='Soilutions' className='partner_logos'/>
                    </a>
                </div>
                
                <div className='gts_bios'>
            <div className={`gts_bio_one ${expandedBio === 'Baca' ? 'expanded' : ''}`} onClick={() => toggleBio('Baca')}>
              <div className='gts_bio_one_inner'>
                <button>
                    {expandedBio === 'Baca' ? '-' : '+'}
                </button>
                <h2>Baca's Trees</h2>
              </div>
                {expandedBio === 'Baca' && (
                    <p>Since 1980, Baca’s Trees has been caring for trees and shrubs throughout the community, offering ISA Certified Arborist Services in Albuquerque and throughout New Mexico.</p>
                )}
            </div>
            
            <div className={`gts_bio_two ${expandedBio === 'Sprinklers' ? 'expanded' : ''}`} onClick={() => toggleBio('Sprinklers')}>
              <div className='gts_bio_two_inner'>
                <button>
                    {expandedBio === 'Sprinklers' ? '-' : '+'}
                </button>
                <h2>Just Sprinklers</h2>
              </div>
                {expandedBio === 'Sprinklers' && (
                    <p>Whether you need help from a team of specialists to install your new sprinkler system, need repairs for your current system, or you want to do-it-yourself, Just Sprinklers™ is here for all your needs.</p>
                )}
            </div>

            <div className={`gts_bio_three ${expandedBio === 'SoilMender' ? 'expanded' : ''}`} onClick={() => toggleBio('SoilMender')}>
              <div className='gts_bio_three_inner'>
                <button>
                    {expandedBio === 'SoilMender' ? '-' : '+'}
                </button>
                <h2>Soil Mender Products</h2>
              </div>
                {expandedBio === 'SoilMender' && (
                    <p>At Soil Mender, we have the tools and technologies to help growers address old and new challenges to yield and quality potential. </p>
                )}
            </div>

            <div className={`gts_bio_four ${expandedBio === 'Soilutions' ? 'expanded' : ''}`} onClick={() => toggleBio('Soilutions')}>
             <div className='gts_bio_four_inner'>
                <button>
                    {expandedBio === 'Soilutions' ? '-' : '+'}
                </button>
                <h2>Soilutions</h2>
             </div>
                {expandedBio === 'Soilutions' && (
                    <p>Soilution's promise is to maintain the utmost focus on providing premium quality compost, soil and mulch, top notch customer service and on helping to create a sustainable future for our children and the next generation.</p>
                )}
            </div>
        </div>

  </div>
    </div>


<div className='partners_body_two'>

    <div className='partners_body_bottom'>
              <h1>Local Companies We Do Business With</h1>
  
<div className='lp_img_container'>

              <img src='https://lirp.cdn-website.com/d0a1fad2/dms3rep/multi/opt/logo-468x143-255w.png' alt='Millers Feed and Supply LLC' className='millers'/>

              <img src={suregreen} alt='Sure Green'/>

              <img src={logo5} alt='505 Outside' />

              <img src='https://images.squarespace-cdn.com/content/v1/619d2e8fd4dd083c86697cc9/223556e8-8c18-4fae-a4a2-7a60ca3d3ffb/ECM+logo+1.jpg?format=1500w' alt='East Central Ministries' className='ecm'/>

              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/elpinto.webp' alt='El Pinto' className='elpinto'/>

              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/vics.png' alt='Vics Daily Cafe' className='vics'/>

              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/daves.png' alt='Daves Valley Grill' className='daves'/>

              <img src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/Construction.jpg' alt='Construction Rental & Supply' className='daves'/>

   

</div>
         
                </div>

</div>

    <div className='partners_conclusion'>
        <h1>A Special thanks to all our Supporters</h1>
    </div>
</div>


        

  )
}

export default Partners;