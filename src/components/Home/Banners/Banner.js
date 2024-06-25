import React, {useEffect} from 'react'
import './Banner.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { NavLink } from 'react-router-dom';



function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='banner'>
        <div className='b_img'>
        <div className='b_1'
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className='b_2'>
            <h4 className='b_h42'> Garden Talk with Rick Hobson</h4>
            <img src='https://www.omnycontent.com/d/programs/a7b0bd27-d748-4fbe-ab3b-a6fa0049bcf6/fdd9f235-b300-4ebc-93c5-afe200dfddf2/image.jpg?t=1681320560&size=small' alt='zebra_plant' className='banner_img1'/>
            </div>
<NavLink to='/radio'>
            <button className='banner_button'>Go to Radio & Podcast Page</button>
</NavLink>

<h4 className='b_h4'>Listen Live every other Saturday on KKOB | 96.3 FM</h4>

<div className='spotify_container'>
<p className='spotify_p'>Podcast Episodes available on Spotify</p>
<img className='spotify' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png' alt='spotify' />
</div>



           
        </div>
        </div>
    </div>
  )
}

export default Banner