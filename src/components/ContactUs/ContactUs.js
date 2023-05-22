import React from 'react'
import './ContactUs.css'
import MapButton from './MapButton'
import EmailButton from './EmailButton'
import cashhouse from '../../Assets/CashHouse.jpg'

function ContactUs() {
  return (
    <div className='contact_us'>



        <div className='contact_us_welcome'>
                <h1>Contact Us</h1>
                <p>We would love to hear from you</p>
        </div>

        <div className='contact_us_body'>

        <div className='contact_pic_container'>
        <img alt='' src={cashhouse} className='contact_pic'/>
        </div>



            <h1>Phone</h1>
            <p>+1 (505) 899-7555</p>
            <button href='tel:15058997555'>Call Now</button>

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