import React from 'react'
import './Newsletter.css'


function Newsletter() {


  return (
    <div className='newsletter'>
{/* <Helmet>
        <title>Newsletter- Jericho Nursery</title>
        <meta name="description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:title" content="Frequent Flower Club - Exclusive Benefits and Discounts" />
        <meta property="og:description" content="Join the Frequent Flower Club at Jericho Nursery and enjoy exclusive benefits, discounts, and special offers on a wide variety of flowers and plants. Enhance your gardening experience and save with our loyalty program." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />
</Helmet> */}



        <div className='partners_welcome'>

       
                <div className='welcome_text'>
                            <h1>Newsletter</h1>
                                <p>
                                  Signup for our Digital Newsletter and Text Alerts 
                            </p>
                </div>
               

        </div>


            <div className='newsletter_body'>

                        <div className='newsletter_body_top'>
                         
                 <div className='newsletter_introduction'>
                    <h1>Want more Jericho?</h1>
                    <img className='garden-phone' src="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/VARIOUS/SEO_photos/gardenphone.jpg" alt="Join Jericho Nursery's Newsletter for all your garden updates"/>
                      <p>Sign up for Jericho Nursery’s free Newsletter and Text Alerts to stay updated on everything happening at the nursery each week! Our weekly email brings you the latest news, gardening tips, special promotions, and event announcements, so you never miss out on what’s blooming. Plus, our text alerts provide quick reminders about sales, workshops, and seasonal updates straight to your phone. It’s the best way to stay connected with Jericho Nursery and get expert advice for your garden—all at no cost to you!</p>       
                         
                </div>

                        <div className='newsletter_sign_up'>
                            <h3 className='newsletter_join'>Join Today</h3> 
                            <a href='https://link.lightworkdigital.com/widget/form/AKN6KeaUJe5kCpr3DfAc'>
                                <button>Newsletter</button>
                            </a>
                            <a href='https://link.lightworkdigital.com/widget/form/JfFCfhH8lBBfZP26DxXr'>
                                <button>Text Alerts</button>
                            </a>                       
                        
                    </div>

                        
         </div>
     </div>
</div>
  )
}

export default Newsletter