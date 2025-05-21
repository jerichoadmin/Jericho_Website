import React from 'react';
import './NavBarDesktop.css';
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/Logo.png'
import ContactUsIcon from '../../SVGs/ContactUsIcon'
import ProductsIcon from '../../SVGs/ProductsIcon'
import GiftCardIcon from '../../SVGs/GiftCardIcon'
import BlogIcon from '../../SVGs/BlogIcon'
import CommunityIcon from '../../SVGs/CommunityIcon'
import FFCIcon from '../../SVGs/FFCIcon'
import RotatingBanner from './RotatingBanner';


function NavBarDesktop() {
  return (
<div className='header'>
    <div className='photo_banner'>
<RotatingBanner />
      <NavLink to='/'>
        <div className='logo_div'>
            <img className='logo' src={logo} alt='logo'/>
        </div>
      </NavLink>
    </div>
    <nav className="navbar">

      <ul className="navbar__menu">
      <li className="navbar__menuItem navbar__menuItem--hasDropdown">
<div className='nav_svg_and_p'>
        <div className='nav_svg'>
      <ProductsIcon /> 
        </div>
     <p>Products</p> 
</div>


      <ul className="navbar__dropdownMenu_green">
          <NavLink to='/sales'>
            <li className="navbar__dropdownItem">This Week's Specials</li>
          </NavLink>
          <NavLink to='/promotions'>
            <li className="navbar__dropdownItem">Promotions</li>
          </NavLink>
          <NavLink to='/plantcatalog'>
            <li className="navbar__dropdownItem">Plant Catalog</li>
            </NavLink>
          <NavLink to='/brands'>
            <li className="navbar__dropdownItem">Brands we Carry</li>
          </NavLink>
            <NavLink to='/delivery'>
            <li className="navbar__dropdownItem">Delivery and Planting</li>
            </NavLink>
        </ul>
      </li>


         <li className="navbar__menuItem navbar__menuItem--hasDropdown">
          <div className='nav_svg_and_p'>
         <div className='nav_svg'>
         <GiftCardIcon />
         </div>
            <p>Giftcard</p>
          </div>

            <ul className="navbar__dropdownMenu_brown">
      <NavLink to='/giftcard'>
        <li className="navbar__dropdownItem">Buy a Card </li>
      </NavLink>
      </ul>
  
        </li>

        <li className="navbar__menuItem navbar__menuItem--hasDropdown">
          <div className='nav_svg_and_p'>
        <div className='nav_svg'>
        <BlogIcon />
        </div>
          <p>Blog and Gallery</p>
          </div>

          <ul className="navbar__dropdownMenu_yellow">
          <NavLink to='/blog'>
         <li className="navbar__dropdownItem">Blog and Gallery</li>
        </NavLink>
        <NavLink to='/videos'>
          <li className="navbar__dropdownItem">Videos</li>
        </NavLink>
        <NavLink to='/instagram'>
         <li className="navbar__dropdownItem">Instagram</li>
        </NavLink>
        <NavLink to='/gardeningcalendar'>
         <li className="navbar__dropdownItem">Gardening Calendar</li>
        </NavLink>
        <NavLink to='/login'>
        <li className="navbar__dropdownItem">Admin Login</li>
        </NavLink>
          </ul>
        </li>

        <li className="navbar__menuItem navbar__menuItem--hasDropdown">
          <div className='nav_svg_and_p'>
        <div className='nav_svg'>
        <CommunityIcon />
        </div>
          <p>Community</p>
          </div>

          <ul className="navbar__dropdownMenu_green">
               <NavLink to='/partners'>
         <li className="navbar__dropdownItem">Partners</li>
        </NavLink>
        <NavLink to='/radio'>
         <li className="navbar__dropdownItem">Radio Show</li>
        </NavLink>
        <NavLink to='/seminars'>
         <li className="navbar__dropdownItem">Workshops</li>
        </NavLink>
        <NavLink to='/gardenresources'>
        <li className="navbar__dropdownItem">Garden Resources</li>
        </NavLink>
        <NavLink to='/clubs'>
         <li className="navbar__dropdownItem">Clubs around Abq</li>
        </NavLink>
          </ul>
        </li>

        
        <li className="navbar__menuItem navbar__menuItem--hasDropdown">

        <div className='nav_svg_and_p'>
        <div className='nav_svg'>
         <FFCIcon />
         </div>
            <p>Frequent Flower Club</p>
          </div>

            <ul className="navbar__dropdownMenu_brown_ffc">
          <NavLink to='/ffc'>
          <li>Join the Frequent Flower Club </li>
          </NavLink>
          <NavLink to='/newsletter'>
          <li>Newsletter and Text Alerts</li>
          </NavLink>
      </ul>
  
        </li>

        <li className="navbar__menuItem navbar__menuItem--hasDropdown">
          <div className='nav_svg_and_p'>
        <div className='nav_svg'>
        <ContactUsIcon />
        </div>
          <p>Contact Us</p>
          </div>

        <ul className="navbar__dropdownMenu_yellow">
      <NavLink to='/contact'>
        <li>Contact Info</li>
      </NavLink>
      <NavLink to='/aboutus'>
        <li>About Us</li>
      </NavLink>
      <NavLink to='/employment'>
        <li>Why Work Here</li>
      </NavLink>
      <NavLink to='/growersassurance'>
        <li>Grower's Assurance</li>
      </NavLink>
          </ul>
        </li>

  
      </ul>
    </nav>
</div>
  );
}

export default NavBarDesktop;
