import React from 'react'
import ffc3 from '../../Assets/ffc3.png'
import arches from '../../Assets/arch.jpg'
import { Helmet } from 'react-helmet'

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
                <p>Welcome Statement:  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
        </div>


<div className='ffc_body'>
            <div className='ffc_body_top'>
                <h1 className='w_it_is'>What it is</h1>
                <img alt='' src={ffc3} className='ffc3'/>
                <p>
                We are asked for our email address hundreds of times for every time we are asked for our mailing address, right? Well, the form you see on this screen really does ask for your mailing address, because several times a year we will be sending cards to members of the Jericho Frequent Flower Club. The cards will contain something of value, and we will be asking for your phone number as you check out in order to have a record of your choice to shop Jericho for all your yard and garden needs. 

                <br></br>
                <br></br>
         
                </p>
                <img alt='' src='https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' className='ffc_sunflowers'/>

            </div>

            <div className='ffc_body_bottom'>
                <h1 className='w_you_get'>What you Get</h1>
                <div className='b_h'>
               
               <div className='b_h_list'>
                   <h2> These are the things we gurantee: </h2>
                        <li>One Postcard Quarterly</li>
                        <li>That Postcard will have a discount</li>
                        <li>Enrollment to our email Newsletter to stay up to date with all Jericho events</li>
                <img alt='' src={ffc3} className='ffc3_s'/>
               </div>
                
             
                <img alt='' src={arches} className='ffc_arches'/>
                </div>


                <h1 className='h_to_join'>How to Join</h1>

                <div className='ffc_form_container_2'>
                    <h3>Click the button below to open our Frequent Flower Club Sign Up Page</h3>
                </div>
            </div>
                <div className='f_f'>   


                <a href=
                'https://link.lightworkdigital.com/widget/form/cU7aGRQlf1PU7rGutp41'>
                <button>Join the Frequent Flower Club</button>
                </a>

             
                </div>
</div>
    </div>
  )
}

export default FFC;