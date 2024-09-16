import React from 'react'
import { NavLink } from 'react-router-dom';
import './GardenResources.css'
import { Helmet } from 'react-helmet';
import pumpkin from '../../Assets/pumpkin.png'


function GardenResources() {
  return (
    <div className='GardenResources'>
         <Helmet>
        <title>Garden Resources - Jericho Nursery</title>
        <meta name="description" content="Explore a collection of helpful garden resources and guides provided by Jericho Nursery." />
        <meta property="og:title" content="Garden Resources - Jericho Nursery" />
        <meta property="og:description" content="Explore a collection of helpful garden resources and guides provided by Jericho Nursery." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

        <div className='gr_welcome'>
            <h1>Gardening Resources</h1>
            <p>Check out some of the great gardening knowledge provided by the Jericho Nursery Staff. These tidbits are must haves for growing you gardening knowledge. 
</p>
        </div>
        <div className='gr_gallery'>
       
        </div>
        <div className='gr_body_main'>
            <div className='gr_body_top'>




              {/* <div className='pumpkin_growing'>

              <h1>Pumpkin Growing Contest Info</h1>

                <img className='pumpkin_photo' src={pumpkin} alt=''/>
                
                <h4>
                It's time to plant the seeds of GIANTS!
                  </h4>
                <p>
                We have free pumpkin seeds for those who would like to enter this year's TJ'S SEED SACK pumpkin growing contest. We also have a free 8 page "how to" guide which can be downloaded via the link below:
                </p>

            <a href='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/April25-2024/PUMPKINGROWING.pdf' target="_blank"  without rel="noreferrer" >
                            <button className='green_gr_button'>
                                      Check out the Guide
                              </button>
            </a>

              </div> */}





                <div className='fbt_header'>
                         <h1>Know Your Zone</h1>
                </div>
            <p>
              Most people don't realize New Mexico has 6 different Planting Zones across the state from Gallup to Carlsbad; but even fewer might realize these zones can have subsections, giving New Mexicans 10 different zones to keep track of depedning on where you live. 
              <br></br>
              <br></br>
            Nothing to fear, our Gardening Angels have you covered. Check out these resources to familiiarize yourself with every zone New Mexico has to offer. 
            </p>
            <div className='gr_body_top_img'>
                 <img alt='New Mexico Garden Zone Map'  target="_blank"  rel="noreferrer"src='https://treevitalize.com/wp-content/uploads/2022/06/New-Mexico-Plant-Hardiness-Zone-Map.png'/>
            </div>

<NavLink to='https://treevitalize.com/planting-zones-new-mexico/'>
                 <button className='yellow_gr_button'>Read More from Treevitalize</button>
</NavLink>
<NavLink to='https://www.plantmaps.com/interactive-new-mexico-usda-plant-zone-hardiness-map.php'>
                 <button  className='yellow_gr_button'>Check out your town or city specifically with Plant Maps </button>
</NavLink>
            </div>


        <div className='gr_body_bottom'>
            <h1>Did you know the Albuquerque and Bernallio County Public Library offer a seed library?</h1>
    <div className='gr_bb_bottom'>

<div className='gr_bt_img'>
        <img alt='Bernallio Country Seed Library'  target="_blank"  rel="noreferrer" src='https://images.unsplash.com/photo-1591989331039-f645c3d7888c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'/>
</div>
            <h3>Check it out for yourself!</h3>

            <p>
            "The ABQ-BERNCO Seed Library was established in 2014 and has a mission of encouraging a community of water-wise home gardeners. The Seed Library aims to provide the access, helpful hints, and skills to enable everyone to participate in this gardening community by offering free vegetable, herb and flower seeds to card holders and by offering free monthly garden-related programs to foster all levels of gardeners through growing, harvesting, seed saving and more—all within our unique high desert environment."
            </p>

<NavLink to='https://abqlibrary.org/seeds/Overview'>
            <button className='green_gr_button'>Click Here to visit the ABQ Seed Library Information Page</button>
</NavLink>
            
            
           </div>
       </div>
    </div>
</div>
  )
}

export default GardenResources;