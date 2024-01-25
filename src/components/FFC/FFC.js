import React from 'react'
import ffc3 from '../../Assets/ffc3.png'
import arches from '../../Assets/arch.jpg'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

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
            <h1>Frequent Flower Club</h1>
                <p>
                    Join Jericho's Newsletter, Email and Rewards Club
               </p>
        </div>


<div className='ffc_body'>
            <div className='ffc_body_top'>
           
                {/* <img alt='Frequent Flower Club Logo' src={ffc3} className='ffc3'/> */}



                <h2 className='changes'>There are changes coming soon!</h2>

                <p className='changes_p'>
                Thank you so much for your interest in Jericho’s Frequent Flower Club. We are in the process of
                transitioning to a more user-friendly platform. For the time being, we will not be mailing out discount
                postcards, but you can go ahead and sign-up now so that you’re entered and ready when we launch. Our
                new program will enable us to give you coupons, discounts, &amp; other special advantages in a variety of
                ways. We hope this will include using your loyalty rewards towards purchases at the register and so much
                more. Please fill the form out completely to take advantage of every benefit we want to offer our loyalty
                customers. We hope to have our new program up and running sometime this spring. Keep an eye on our
                website for more information. Come and grow with us as we venture into a more innovative way to
                reward your loyalty!

                <br></br>
                <br></br>
         
                </p>
                <img alt='Frequent Flower Club at Jericho Nursery' src='https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' className='ffc_sunflowers'/>

            </div>

            <div className='ffc_body_bottom'>

              


                <h1 className='h_to_join'>How to Join</h1>

                <div className='ffc_form_container_2'>
                    <h3>Sign Up for more Jericho Nursery Below</h3>
                </div>
            </div>
                <div className='f_f'>   

<NavLink to='https://link.lightworkdigital.com/widget/form/cU7aGRQlf1PU7rGutp41'>
                <button className='ffc_1'>Frequent Flower Club</button>
</NavLink>

<NavLink to='https://link.lightworkdigital.com/widget/form/AKN6KeaUJe5kCpr3DfAc'>
                <button className='ffc_2'>Email Newsletter</button>
</NavLink>

<NavLink to='https://link.lightworkdigital.com/widget/form/JfFCfhH8lBBfZP26DxXr'>
                <button className='ffc_3'>Text Alerts</button>
</NavLink>
            
                </div>
</div>
    </div>
  )
}

export default FFC;