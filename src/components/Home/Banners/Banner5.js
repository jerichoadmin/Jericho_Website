import React, {useEffect} from 'react'
import './Banner5.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { NavLink } from 'react-router-dom';
import instagram from '../../../Assets/Instagram_Glyph_Gradient.png'
import corrales from '../../../Assets/CorralesGarden2024.png'


function Banner() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='banner'>
        <div className='b_img5'>
        <div className='b_1'
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className='b_2'>
            <h4 className='b_h52'>Corrales Garden Tour 2024</h4>
            </div>
            <div>
            <img className='corrales' src={corrales}/>
            </div>


<h4 className='b_h4'>You can buy your tickets in person at Jericho Nursery, or online by clicking the button below</h4>

<a href='https://corrales-gardentour.com/' target="_blank" rel="noreferrer">
            <button className='banner_button5'>Buy Tickets</button>
</a>

<div className='instagram_lower'>
<p>...have fun!</p>
</div>



           
        </div>
        </div>
    </div>
  )
}

export default Banner