import React, {useState, useEffect} from 'react'
import NavBarDesktop from './NavBarDesktop'
import NavBarMobile from './NavBarMobile'
import './Header.css'
import { NavLink } from 'react-router-dom'

import logo from '../../Assets/Logo.png'
import RotatingBanner from './RotatingBanner'
function Header() {
  const [isMobile, setIsMobile] = useState(false)



  useEffect(() => {
    const isMobile = window.innerWidth < 500;
    setIsMobile(isMobile);
  }, [isMobile]);

  return (
    <div>
  


    {isMobile ? (

      <div>
      <NavBarMobile />
     <div className='mobile_photo_banner'>
      <RotatingBanner />


      <NavLink to='/'>
        <div className='logo_div'>
            <img className='mobile_banner_logo' src={logo} alt='logo'/>
        </div>
      </NavLink>
    </div>
      </div>
    ) : (
      <NavBarDesktop />
    )}
  </div>

  )
}



export default Header;
