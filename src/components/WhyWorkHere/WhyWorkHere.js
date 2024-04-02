import React from 'react'
import './WhyWorkHere.css'
import plants from '../../Assets/holding_plants.jpg'
import shovel from '../../Assets/shovel.jpg'
import { Helmet } from 'react-helmet'
import ApplicationPDF from '../../Assets/Jericho-Nursery-Application-for-Employment.pdf'
import cal from '../../Assets/Cal.png'
import sun from '../../Assets/sun.png'
import commuity from '../../Assets/Community.png'
import growth from '../../Assets/growth.png'

function WhyWorkHere() {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ApplicationPDF;
    link.download = 'JerichoNurseryApplication.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };









  return (
    <div className='employment'>
<Helmet>
        <title>Why Work Here - Jericho Nursery</title>
        <meta name="description" content="Discover why Jericho Nursery is a great place to work. Join our team of passionate individuals, enjoy a supportive work environment, and contribute to the joy of gardening in our community." />
        <meta property="og:title" content="Why Work Here - Join Our Passionate Team" />
        <meta property="og:description" content="Discover why Jericho Nursery is a great place to work. Join our team of passionate individuals, enjoy a supportive work environment, and contribute to the joy of gardening in our community." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/SEO_photos/swgarden.jpg" />
        <meta property="og:type" content="website" />
</Helmet>

<div className='employment_welcome'>
<h1>Employment at Jericho</h1>
<p>We offer seasonal and full time positions. Come grow with us!</p>
</div>

<div className='employment_body'>
<h3 className='employment_top_header'>
       Join Our Garden Center Team and Cultivate Your Passion for Nature!   
</h3> 
    <img src={plants} className='employment_plants' alt='Employment at Jericho Nursery'/>


        <p>
Are you a nature enthusiast with a green thumb yearning for a fulfilling seasonal job? Look no further! At our Garden Center, we are the perfect destination for individuals who find solace and joy in the wonders of plants, flowers, and all things green.
<br></br>
<br></br>
<br></br>
We encourage employees to be kind, compassionate and understanding with one another and find it bleeds over to the customer experience. We expect kindness to be reciprocated by our customers as well and will not tolerate poor treatment of our employees.
<br></br>
<br></br>
We offer health insurance, 401K & paid vacation after meeting longevity requirements.
</p>



<div className='work_icon_outer'>


<div className='work_icon_item'>
  <h4>Join a Passionate Community</h4>
  <img src={commuity} alt='' className='work_community'/>
</div>
<div className='work_icon_item'>
  <h4>Soak up the Sun</h4>
  <img src={sun} alt='' className='work_sun'/>
</div>
<div className='work_icon_item'>
  <h4>Seasonal Excitement</h4>
  <img src={cal} alt='' className='work_cal'/>
</div>
<div className='work_icon_item'>
  <h4>Growth Potential</h4>
  <img src={growth} alt='' className='work_growth'/>
</div>



</div>

{/* <h3>Embrace the Beauty of Nature</h3>
  <p>
    As a member of our Garden Center team, you'll have the opportunity to immerse yourself in a vibrant world of colors, fragrances, and serenity. With each passing season, you'll witness the magic of nature unfold, whether it's the blossoming flowers of spring or the vibrant hues of autumn foliage.
  </p>
<h3>Join a Passionate Community</h3>
<p>
 Our Garden Center is a place where like-minded individuals come together to celebrate their love for all things green. Join a team of fellow plant enthusiasts who share your passion and create lasting connections. Share stories, exchange ideas, and cultivate friendships while nurturing the beauty around you.
</p>
<h2>Seasonal Excitement</h2>
<p>
 While we primarily offer seasonal positions, it's precisely this aspect that adds a unique charm to working with us. Each season brings fresh energy and new opportunities to engage with customers, whether it's helping them find the perfect plants for their summer gardens or assisting in the transformation of our center for festive winter displays.
</p>
<h2>Growth Potential</h2>
<p>
 If you excel in your role and demonstrate dedication, our Garden Center offers the possibility of advancement. Take on leadership responsibilities, supervise seasonal staff, and expand your horizons within our growing organization. We believe in nurturing talent and empowering individuals to reach their full potential.
</p> */}

<img src={shovel} className='employment_shovel' alt='Employment at Jericho Nursery'/>



<div className='application'>
      <div className='application_inner'>
        <p>Download the Printable Application here</p>
        <button className='application_button' onClick={handleDownload}>
          Application Download
        </button>
      </div>
    </div>

        
        
</div>


    </div>
  )
}

export default WhyWorkHere