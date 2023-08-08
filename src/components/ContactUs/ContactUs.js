import React from 'react'
import './ContactUs.css'
import MapButton from './MapButton'
import EmailButton from './EmailButton'
import CallButton from './CallButton'

import { Helmet } from 'react-helmet'

function ContactUs() {
  return (
    <div className='contact_us'>
<Helmet>
        <title>Contact Us - Jericho Nursery</title>
        <meta name="description" content="Contact Jericho Nursery for any inquiries, questions, or feedback. We are here to assist you with your gardening needs and provide excellent customer service." />
        <meta property="og:title" content="Contact Us - Jericho Nursery" />
        <meta property="og:description" content="Contact Jericho Nursery for any inquiries, questions, or feedback. We are here to assist you with your gardening needs and provide excellent customer service." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/SEO_photos/swgarden.jpg" />
        <meta property="og:type" content="website" />
</Helmet>



        <div className='contact_us_welcome'>
                <h1>Contact Us</h1>
                <p>We would love to hear from you</p>
        </div>

        <div className='contact_us_body'>

        <div className='contact_pic_container'>
        <img alt='Jericho Nursery' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/EvergreenContent/cashHouse.jpg' className='contact_pic' />
        </div>



            <h1>Phone</h1>
            <p>+1 (505) 899-7555</p>
            <div className='call_button'>
            <CallButton />
            </div>


            <h1>Address</h1>
            <p>101 Alameda Blvd NW
            Albuquerque, NM 87114</p>
            <div className='map_button'>
            <MapButton />
            </div>


            <h1>Email</h1>
            <p>manager@jerichonursery.com</p>
            <div className='email_button'>
            <EmailButton />
            </div>
        </div>




    </div>
  )
}

export default ContactUs