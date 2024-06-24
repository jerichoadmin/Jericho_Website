import React from 'react'
import ffc3 from '../../Assets/ffc3.png'
import arches from '../../Assets/arch.jpg'
import { Helmet } from 'react-helmet'
import newffc from '../../Assets/newnewffc.png'

import './FFC.css'

function FFC() {


  return (
    <div className='ffc'>
<Helmet>
        <title>Frequent Flower Club - Jericho Nursery</title>
        <meta name="description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:title" content="Frequent Flower Club - Exclusive Benefits and Discounts" />
        <meta property="og:description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/SEO_photos/swgarden.jpg" />
        <meta property="og:type" content="website" />
</Helmet>



        <div className='ffc_welcome'>

        <div>
        <img className='newffc_logo' src={newffc} alt=''/>
        </div>
  <div className='welcome_text'>
            <h1>Frequent Flower Club</h1>
                <p>
                    A new and imporved points system, with all the same connectedness you know and love
               </p>
  </div>
               

        </div>


            <div className='ffc_body'>

                        <div className='ffc_body_top'>
                            <div className='header_container'>
                        <h1>Welcome to Jericho's Frequent Flower Club</h1>
                            </div>
                        
                    

                        <div className='ffc_introduction'>
                            <img className='jericho_ffc_flower' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/main-Flower' alt='Jericho FFC homepage'/>

                            <div className='ffc_intro_paragraph'>
                                <h2>Introducing Jericho's new FFC Rewards Program</h2>
                                <p>Every purchase you make, every interaction with us – it all counts towards unlocking amazing rewards. Plus, with our special bonuses, reaching new levels of loyalty means unlocking even more exclusive perks.</p>
                                <p>
                                Whether you're a longtime supporter or just joining our community, there's never been a better time to start earning rewards. Join now!</p>

 

                            </div>
                <div className='ffc_grid-wrapper'>
                        <div className="ffc_grid-container">
                        <div className="ffc_grid-item">
                            <img src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/+100.png" alt="Icon 1" className="ffc_icon" />
                            <span>Earn points for purchases</span>
                        </div>
                        <div className="ffc_grid-item">
                            <img src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/5%25.png" alt="Icon 2" className="ffc_icon" />
                            <span>Redeem points for discounts</span>
                        </div>
                        <div className="ffc_grid-item">
                            <img src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/Thumbsup.png" alt="Icon 3" className="ffc_icon" />
                            <span>Get points for interacting with our socials</span>
                        </div>
                        <div className="ffc_grid-item">
                            <img src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/VIP.png" alt="Icon 4" className="ffc_icon" />
                            <span>Become a Jericho VIP</span>
                        </div>
                        </div>
                </div>


                        <div className='ffc_sign_up'>
                            <a href='https://app.marsello.com/Manage/Forms/SubmitForm/66557a94d7360cc839168515'>
                                <button>Sign Up</button>
                            </a>
                        </div>




                    </div>





                        </div>


            </div>






</div>
  )
}

export default FFC;