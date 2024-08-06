import React, {useEffect} from 'react'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 
import Banner from './Banners/Banner'
import Banner2 from './Banners/Banner2'
import Banner3 from './Banners/Banner3';
import Banner4 from './Banners/Banner4';
import Banner5 from './Banners/Banner5'
import Banner6 from './Banners/Banner6';
import NewThisWeek from '../Home/Containers/ThisWeek'
import JerichoMap from './Containers/JerichoMap'
import VideosContainer from './Containers/VideosContainer'
import GardeningCalendar from './Containers/GardeningCalendar'
import NewintheBlog from './Containers/NewintheBlog'
import Gallery from './Gallery/Gallery'
import Gallery2 from './Gallery/Gallery2';
import MoreAboutJericho from './MoreAboutJericho/MoreAboutJericho'
import CallButton from '../ContactUs/CallButton';
import MapButtonHome from './MapButtonHome';
import HoursButton from './HoursButton';
import Popup from './Popup/Popup';
import PromotionsContainer from './Containers/PromotionsContainer';


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
        <h4 className='w_3'>All your Yard and Garden needs</h4>
</div>
</div>

<Popup />

<div className='hours_and'>
<CallButton />
<MapButtonHome />
<HoursButton />
</div>

<div className='desktop_hours_and'>
<h3>
505-899-7555
</h3>
<h3>
Monday-Saturday 9-5 | Sundays 11-5
</h3>
<h3>
101 Alameda Blvd
</h3>
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
     
    <PromotionsContainer />
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
      <Banner6 />
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

          <VideosContainer /> 
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
       <Banner />
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

    </div>


    <Gallery2 />
    <MoreAboutJericho />
    <Banner3 />
    



    </div>
  )
}

export default Home