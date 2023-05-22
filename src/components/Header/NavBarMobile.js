import React, { useState, useEffect } from 'react'
import './NavBarMobile.css'
import { NavLink } from 'react-router-dom'
import ContactUsIcon from '../../SVGs/ContactUsIcon'
import ProductsIcon from '../../SVGs/ProductsIcon'
import GiftCardIcon from '../../SVGs/GiftCardIcon'
import BlogIcon from '../../SVGs/BlogIcon'
import CommunityIcon from '../../SVGs/CommunityIcon'
import FFCIcon from '../../SVGs/FFCIcon'
import AHamburger from '../../SVGs/AHamburger'
import logo from '../../Assets/Logo.png' 
import AOS from 'aos'


function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [openProducts, setOpenProducts] =useState(false)
  const [openGC, setOpenGC] =useState(false)
  const [openBlog, setOpenBlog] =useState(false)
  const [openCommunity, setOpenCommunity] =useState(false)
  const [openFFC, setOpenFFC] =useState(false)
  const [openContact, setOpenContact] =useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleList = (list) => {
    setOpenProducts(false);
    setOpenGC(false);
    setOpenBlog(false);
    setOpenCommunity(false);
    setOpenFFC(false);
    setOpenContact(false);

    switch (list) {
      case 1:
        setOpenProducts(true);
        break;
      case 2:
        setOpenGC(true);
        break;
      case 3:
        setOpenBlog(true);
        break;
      case 4:
        setOpenCommunity(true);
        break;
      case 5:
        setOpenFFC(true);
        break;
      case 6:
        setOpenContact(true);
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <nav className="navbar__mobile">


      <button className="navbar-toggle" onClick={handleToggle}>
      <AHamburger />
      </button>

      {isOpen ? (
 
<div className='mobile_nav_container'>
  <div className='logo_and_nav'>
    <div className='mobile_logo_container'>
      <NavLink to='/'>
  <img src={logo} alt='' className='mobile_logo'/>

      </NavLink>
    </div>
            <div className='left_side_mobile_nav'>
            <div className='mobile_nav_icon' onClick={() => handleToggleList(1)}>
                <ProductsIcon />
                <p>Products</p>
            </div>
            <div className='mobile_nav_icon' onClick={() => handleToggleList(2)}>
                <GiftCardIcon />
                <p>Gift Card</p>
            </div>
            <div className='mobile_nav_icon' onClick={() => handleToggleList(3)}>
                <BlogIcon />
                <p>Blog and Gallery</p>
            </div>
            <div className='mobile_nav_icon' onClick={() => handleToggleList(4)}>
                <CommunityIcon />
                <p>Community</p>
            </div>
            <div className='mobile_nav_icon' onClick={() => handleToggleList(5)}>
                <FFCIcon />
                <p>Frequent Flower Club</p>
            </div>
            <div className='mobile_nav_icon' onClick={() => handleToggleList(6)}>
                    <ContactUsIcon />
                    <p>Contact Us</p>
            </div>   
            </div>
            </div>


            <div className='right_side_mobile_nav'>
            {openProducts ? (
      <ul className='green_mn'>
      <NavLink to='/sales'>
        <li className="navbar__dropdownItem_mobile">This Week's Specials</li>
      </NavLink>
      <NavLink to='/brands'>
        <li className="navbar__dropdownItem_mobile">Brands we Carry</li>
      </NavLink>
        <NavLink to='/delivery'>
        <li className="navbar__dropdownItem_mobile">Delivery and Planting</li>
        </NavLink>
    </ul>
      ) : null}
            {openGC ? (
         <ul className='brown_mn'>
      <NavLink to='/giftcard'>
        <li className="navbar__dropdownItem_mobile">Buy a Card </li>
      </NavLink>
      </ul>

      ) : null}
            {openBlog ? (
      <ul className='yellow_mn'>
      <NavLink to='/blog'>
     <li className="navbar__dropdownItem_mobile">Blog and Gallery</li>
    </NavLink>
    <NavLink to='/gardeningcalendar'>
     <li className="navbar__dropdownItem_mobile">Gardening Calendar</li>
    </NavLink>
    <NavLink to='/gardenresources'>
    <li className="navbar__dropdownItem_mobile">Garden Resrouces </li>
    </NavLink>
    <NavLink to='/login'>
    <li className="navbar__dropdownItem_mobile">Admin Login</li>
    </NavLink>
      </ul>
      ) : null}
            {openCommunity ? (
 <ul className='green_mn'>
 <NavLink to='/partners'>
<li className="navbar__dropdownItem_mobile">Partners</li>
</NavLink>
<NavLink to='/radio'>
<li className="navbar__dropdownItem_mobile">Radio Show</li>
</NavLink>
<NavLink to='/seminars'>
<li className="navbar__dropdownItem_mobile">Workshops</li>
</NavLink>
<NavLink to='/clubs'>
<li className="navbar__dropdownItem_mobile">Clubs around Abq</li>
</NavLink>
</ul>
      ) : null}
            {openFFC ? (
  <ul className='brown_mn'>
  <NavLink to='/ffc'>
  <li className="navbar__dropdownItem_mobile">Join the Frequent Flower Club</li>
</NavLink>
</ul>
      ) : null}
            {openContact ? (
            <ul className='yellow_mn'>
            <NavLink to='/contact'>
            <li className="navbar__dropdownItem_mobile">Contact Us</li>
            </NavLink>
            <NavLink to='/aboutus'>
            <li className="navbar__dropdownItem_mobile">About Us</li>
            </NavLink>
            <NavLink to='/employment'>
            <li className="navbar__dropdownItem_mobile">Why Work Here</li>
            </NavLink>
            <NavLink to='/map'>
            <li className="navbar__dropdownItem_mobile">Nursery Map</li>
            </NavLink>
                </ul>
      ) : null}


            </div>








</div>

        
      ) : (
        <div>
      
        </div>
      )}
    </nav>
  );
}

export default NavBarMobile;