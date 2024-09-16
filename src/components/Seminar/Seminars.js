import React, { useEffect, useRef, useState } from "react";
import './Seminars.css'
import SeminarIcon from '../../SVGs/SeminarIcon';
import seminar_pic from '../../Assets/seminar_pic_new.png'
import { Helmet } from "react-helmet";




function Seminars() {

  const revealRef1 = useRef(null); 
  const [isAnimateds, setIsAnimateds] = useState(false); 

  const handleScroll = () => {
    const revealElement = revealRef1.current; 
    if (revealElement) {
      const revealTop = revealElement.getBoundingClientRect().top; 
      const windowHeight = window.innerHeight; 

      if (revealTop < windowHeight) {
          setTimeout(() => {
          setIsAnimateds(true);
          }, 1000)
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div className='Seminars'>
<Helmet>
        <title>Gardening Workshops - Jericho Nursery</title>
        <meta name="description" content="Join our gardening workshops at Jericho Nursery to enhance your gardening skills, learn new techniques, and connect with fellow gardeners." />
        <meta property="og:title" content="Gardening Workshops - Enhance Your Gardening Skills" />
        <meta property="og:description" content="Join our gardening workshops at Jericho Nursery to enhance your gardening skills, learn new techniques, and connect with fellow gardeners." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/Photos_from_Jericho_Gallery/CashHouse.jpg" />
        <meta property="og:type" content="website" />
</Helmet>
        <div className='seminars_welcome'>
            <h1>Workshops</h1>
        <p>
        Ignite your passion for gardening at Jericho Nursery's engaging workshops! Join us as we delve into the world of practical plant knowledge and hands-on experience.
        </p>
        </div>
        <div className='seminars_body_main'>
            <div className='seminars_body_top'>
                <h1>This Year's Workshops</h1>
                <img alt='Workshops at Jericho Nursery' src={seminar_pic} className='seminar_pic'/>
                <p>
                For a limited time, Jericho Nursery is offering their enriching workshops at an affordable price of just $10. As an added bonus, participants will receive a complimentary $10 gift card to the nursery, allowing you to kick-start your gardening journey with a selection of top-quality plants and gardening supplies. Take advantage of this exclusive offer during the off-season, in the fall and early spring, when you can devote ample time to learning and preparing for a bountiful gardening season ahead. 
                </p>
            </div>

    <div className='seminars_body_mid'>
    <div className="reveal-container">
<div className='s_inner_decoy'>
            <div className='s_decoy'>
            </div>
<div className="center_seminar_icon">
            <div id='movingDiv'>
    <div className={isAnimateds ? "s_visible" : "reveal-content"}><SeminarIcon /></div>
            </div>
</div>
    </div>
</div>

           <div className='seminars_list'>
           <div ref={revealRef1}>
          </div>
                <ul>
                    <h3>Workshops are over for the Year!</h3>
                    <li>They will start back at a later date</li>
                    <span>Thank you to all who attended</span>

                    {/* <h3>Workshops this Month:</h3> */}

                    {/* <li>Introductory Beekeeping with Justin Armstrong</li>
                    <span>(Saturday January 13th, 2:00 pm)</span>

                    <li>Tree pruning with certified arborist Steve Bell</li>
                    <span>(Saturday January 27th, 2:00 pm)</span>

                    <li>Gardening Q&A with Richard Hobson</li>
                    <span>(February 10th, 2:00 pm)</span>

                    <li>Beekeeping 102 with Justin Armstrong</li>
                    <span>(February 24th, 2:00 pm)</span>

                    <li>Creating Combo Baskets with Milt McLain</li>
                    <span>(Saturday March 2nd, 2:00 pm)</span>

                    <li>Growing Food with Jennifer Hobson</li>
                    <span>(Saturday March 9th, 2:00 pm)</span>

                    <li>Q&A with Richard and Jennifer</li>
                    <span>(Saturday March 16th, 2:00 pm)</span>

                    <li>Rose Pruning with Marisa Thompson</li>
                    <span>(Saturday March 23rd, 2:00 pm)</span>

                    <li>Growing Chile with "Big Jim" Wagne</li>
                    <span>(Saturday March 30th, 2:00 pm)</span> */}


                </ul>
            </div>
            </div>
      

  <div className='seminar_pic_section'>
  </div>

 
            <div className='seminars_body_bottom'>
                {/* <h1>Click the Button Below to Sign up for Workshops</h1> */}
        <div className='seminar_form'>
       
       {/* <a href="https://link.lightworkdigital.com/widget/form/3qaO8XFwZsIzsspf04OE">
        <button className="seminar_button">Workshop Signup</button>
       </a> */}
       


        </div>
            </div>
        </div>
</div>
  )
}

export default Seminars;