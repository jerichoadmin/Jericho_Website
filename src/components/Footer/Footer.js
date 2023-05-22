import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>

    <div className='f_1'>
        <div className='f_products'>
            <ul>
            <h4>Products</h4>
            <NavLink className='na' to='/sales'>
            <li>This Week's Specials</li>
            </NavLink>
            <NavLink className='na' to='/brands'>
            <li>Brands We Carry</li>
            </NavLink>
            <NavLink className='na' to='/delivery'>
            <li>Delivery and Planting</li>
            </NavLink>
            </ul>
        </div>

        <div className='f_gardening'>
            <ul>
            <h4>Blog</h4>
            <NavLink className='na' to='/blog'>
            <li>Blog </li>
            </NavLink>
            <NavLink className='na' to='/gardeningcalendar'>
            <li>Gardening Calendar</li>
            </NavLink>
            <NavLink className='na' to='/gardenresources'>
            <li>Garden Resources</li>
            </NavLink>
            <NavLink className='na' to='/adminhome'>
            <li>Admin Login</li>
            </NavLink>
            </ul>

        </div>
        <div className='f_services'>
            <ul>
            <h4>Community</h4>
            <NavLink className='na' to='/partners'>
            <li>Partners</li>
            </NavLink>
            <NavLink className='na' to='/radio'>
            <li>Radio Show</li>
            </NavLink>
            <NavLink className='na' to='/seminars'>
            <li>Seminars</li>
            </NavLink>
            <NavLink className='na' to='/clubs'>
            <li>Clubs around ABQ</li>
            </NavLink>
            </ul>

        </div>
        <div className='f_about'>
            <ul>
            <h4>Contact Us</h4>
            <NavLink className='na' to='/contact'>
            <li>Contact Info</li>
            </NavLink>
            <NavLink className='na' to='/aboutus'>
            <li>About Us</li>
            </NavLink>
            <NavLink className='na' to='/employment'>
            <li>Why Work Here</li>
            </NavLink>
            <NavLink className='na' to='/map'>
            <li>Nursery map</li>
            </NavLink>
            </ul>
        </div>
    </div>

        <div className='social_icons'>

<a href='https://www.facebook.com/people/Jericho-Nursery/100047121475577/'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='facebook'><path id='fb' d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
</a>
<a href='https://www.instagram.com/jerichonursery/?hl=en'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='instagram'> <path id='insta' d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
</a>
<a href='https://www.youtube.com/@JerichoNursery'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='youtube'><path id='yt'  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
</a>
        </div>

        <div className='privacy'>
            <p>Jericho Nursery | 101 Alameda Blvd | (505) 899-7555</p>
            <p>Trademarked by Jericho Incoroprated -Privacy Policy</p>
            <p>Hours: Monday-Saturday 9-6 | Sundays 11-5</p>

        </div>

    </div>
  )
}

export default Footer