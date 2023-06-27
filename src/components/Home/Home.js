import React, {useEffect} from 'react'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Banner2 from './Banners/Banner2'
import Banner3 from './Banners/Banner3';
import NewThisWeek from '../Home/Containers/ThisWeek'
import JerichoMap from './Containers/JerichoMap'
import GardeningCalendar from './Containers/GardeningCalendar'
import NewintheBlog from './Containers/NewintheBlog'
import Gallery from './Gallery/Gallery'
import MoreAboutJericho from './MoreAboutJericho/MoreAboutJericho'
import CallButton from '../ContactUs/CallButton';
import MapButtonHome from './MapButtonHome';
import HoursButton from './HoursButton';

import { Helmet } from 'react-helmet';





function Home() {



  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className='home'>


      <Helmet>
      <title>Jericho Nursery's Home Page</title>
        <meta name="description" content="Welcome to Jericho Nursery, a leading provider of quality plants and gardening supplies. Discover our wide selection of products and services for all your gardening needs." />
        <meta name="keywords" content="Jericho Nursery, plants, gardening, supplies, Albuqueruque, New Mexico, Southwest, xeric, xeriscape, flower, frequent, club, alameda, north valley, abq, horticulture, garden experts, hobson, jericho, nursery, all, your, yard, and, garden, needs" />
      </Helmet>
   



      <div className='welcome'>
<div className='w'>
        <h4 className='w_1'>Welcome to</h4>
        <h1 className='w_2'>Jericho Nursery</h1>
        <h4 className='w_3'>All you Yard and Garden needs</h4>
</div>
</div>

<div className='hours_and'>
<CallButton />
<MapButtonHome />
<HoursButton />
</div>




<Gallery />
    <div 
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
    >
          <NewintheBlog/>
    </div>
    <div 
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
    >
    <NewThisWeek />
    </div>
    <div 
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
    >
          <GardeningCalendar />
    </div>
    <div 
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
    >
          <JerichoMap />
    </div>

    <Banner2 />
    <MoreAboutJericho />
    <Banner3 />
    



    </div>
  )
}

export default Home