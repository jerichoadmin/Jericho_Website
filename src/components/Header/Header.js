import React, {useState, useEffect} from 'react'
import NavBarDesktop from './NavBarDesktop'
import NavBarMobile from './NavBarMobile'
import './Header.css'
import { NavLink } from 'react-router-dom'
import banner from '../../Assets/Cropped_balloons.jpg'
import logo from '../../Assets/Logo.png'

function Header() {
  const [isMobile, setIsMobile] = useState(false)



  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  }, [isMobile]);

  return (
    <div>
    {isMobile ? (

      <div>
              <NavBarMobile />
     <div className='photo_banner'>
    <img className='mobile_banner' src={banner} alt='ballons'/>
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
