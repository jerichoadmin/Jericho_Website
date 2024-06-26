import React, {useEffect} from 'react'
import './Banner6.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import { NavLink } from 'react-router-dom';
import newffc from '../../../Assets/newnewffc.png'



function Banner6() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='banner6'>
        <div className='b_img6'>
        <div className='b_6'
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        >
            <div className='b_2'>
                <div className='inner_banner_ffc'>
            <img className='banner_ffc_logo' src={newffc}/>
                </div>
                <h4 className='b_h52'>Introducing the New 
            <span id="word1">Frequent</span>
            <span id="word2">Flower</span>
            <span id="word3">Club</span>
            </h4>
            </div>
            <div>
            <img className='banner_ffc' src='https://jericho-content.nyc3.cdn.digitaloceanspaces.com/New_FFC/main-Flower'/>

            </div>


<h4 className='b_h46'>with a new points program, rewards and more. Click below for more info!</h4>
<div className='banner_6_lower'>

<NavLink to='/ffc'>
            <button className='banner_button6'>Learn More</button>
</NavLink>

</div>





           
        </div>
        </div>
    </div>
  )
}

export default Banner6;