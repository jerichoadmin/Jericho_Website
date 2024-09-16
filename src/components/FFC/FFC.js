import React from 'react'
import ffc3 from '../../Assets/ffc3.png'
import arches from '../../Assets/arch.jpg'
import { Helmet } from 'react-helmet'
import newffc from '../../Assets/newnewffc.png'
import plant from '../../Assets/newffc/plant.png'
import vip from '../../Assets/newffc/vip2.png'
import purchase from '../../Assets/newffc/purchase.png'
import account from '../../Assets/newffc/account.png'
import instagram from '../../Assets/newffc/insta.png'
import facebook from '../../Assets/newffc/facebook.png'
import profile from '../../Assets/newffc/profile.png'
import like from '../../Assets/newffc/like.png'
import refer from '../../Assets/newffc/refer.png'



import './FFC.css'

function FFC() {


  return (
    <div className='ffc'>
<Helmet>
        <title>Frequent Flower Club - Jericho Nursery</title>
        <meta name="description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:title" content="Frequent Flower Club - Exclusive Benefits and Discounts" />
        <meta property="og:description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />
</Helmet>



        <div className='ffc_welcome'>

        <div>
        <img className='newffc_logo' src={newffc} alt=''/>
        </div>
  <div className='welcome_text'>
            <h1>Frequent Flower Club</h1>
                <p>
                    A new and improved points system, with all the same connectedness you know and love
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
                {/* <div className='ffc_grid-wrapper'>
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
                </div> */}

                <div className='ffc_rewards'>

                    <div className='rewards'>
                        <h3>Rewards</h3>

                <div className='rewards_inner_horizantal'>
                        <div className='reward_1'>
                            <img className='plant_ffc' src={plant} alt='Jericho Rewards Program'  />
                            <h6>$10 off</h6>
                            <span>200 points to redeem</span>
                        </div>
                        <div className='reward_2'>
                        <img className='plant_ffc' src={plant} alt='Jericho Rewards Program'  />
                            <h6>$20 off</h6>
                            <span>400 points to redeem</span>
                        </div>
                </div>
                    </div>

                    <div className='rewards'>
                        <h3>VIP</h3>
        <div className='rewards_inner_horizantal'>

                        <div className='reward_1'>
                            <img className='plant_ffc' src={vip} alt='Jericho Rewards Program'  />
                            <h6>$15 off</h6>
                            <span>200 points to redeem</span>
                        </div>
                        <div className='reward_2'>
                        <img className='plant_ffc' src={vip} alt='Jericho Rewards Program'  />
                            <h6>$25 off</h6>
                            <span>400 points to redeem</span>
                        </div>
                </div>
         </div>

                    <div className='rewards'>
                        <h3>Ways to Earn</h3>

                        <div className='earning_details'>

                            <div className='earnings_main'>
                                <img className='ffc_purchase' src={purchase} alt='Jericho_FFC'/>
                                <h4>Make a purchase</h4>
                                <span>Earn 1 point for every $1 spent in-store</span>
                            </div>
            <div className='earning_horizantal'>
                    <div className='earning_details_inner'>
                            <div className='earnings'>
                                <img className='ffc_account' src={account} alt='Jericho_FFC'/>
                                <h4>Create and Account</h4>
                                <span>50 points</span>
                            </div>
                            <div className='earnings'>
                                <img className='ffc_insta' src={instagram} alt='Jericho_FFC' />
                                <h4>Follow on Instagram</h4>
                                <span>20 points</span>
                            </div>
                            <div className='earnings'>
                            <img className='ffc_facebook' src={facebook} alt='Jericho_FFC' />
                                <h4>Share on Facebook</h4>
                                <span>20 points</span>
                            </div>
                    </div>


                    <div className='earning_details_inner'>
                            <div className='earnings'>
                            <img className='ffc_profile' src={profile} alt='Jericho_FFC' />
                                <h4>Complete Profile</h4>
                                <span>30 points</span>
                            </div>
                            <div className='earnings'>
                            <img className='ffc_like' src={like} alt='Jericho_FFC' />
                                <h4>Like on Facebook</h4>
                                <span>20 points</span>
                            </div>
                            <div className='earnings'>
                            <img className='ffc_refer' src={refer} alt='Jericho_FFC' />
                                <h4>Refer a Friend</h4>
                                <div className='refer_earning'>
                                <span>Give 10% off, Get 100 points</span>
                                <a href='https://a.marsello.com/r/f3d1d359e082c0ffc79ff1e49366'>
                                <button className='ffc_referal'>
                                    Referal Link
                                </button>
                                </a>
                                </div>
                            </div>
                    </div>
            </div>







                        </div>


             

                    </div>


                </div>


                        <div className='ffc_sign_up'>
                            <h3 className='ffc_join'>Join Today</h3>
                            <span>Click the button below to begin setting up your account and start earning points now!</span>
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