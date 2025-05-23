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
                    
                     <li>Workshops will start back at a later date</li>
                    <span>Thank you to all who attended</span>

           
                    {/* <div className="seminar_inner_container">
                        <li>Principals of Landscape Design with Jennifer Hobson</li>
                        <span>(February 1st; 2:00 p.m.)</span>
                        <a href="https://link.lightworkdigital.com/widget/form/vLlzQeIgoQN6azYxdwJB">
                            <button className="seminar_button">Sign Up</button>
                        </a>
                    </div> */}

                    {/* <div className="seminar_inner_container">
                        <li>Beekeeping 1.0 with Justin Armstrong</li>
                        <span>(February 8th; 2:00 p.m.)</span>
                        <a href="https://link.lightworkdigital.com/widget/form/1gcIVKFw9QeLF98OHiBm">
                            <button className="seminar_button">Sign Up</button>
                        </a>
                    </div> */}

                    {/* <div className="seminar_inner_container">
                        <li>Licensed Irrigation Specialist Tony Lello</li>
                        <span>(February 15th; 2:00 p.m.)</span>
                        <a href="https://link.lightworkdigital.com/widget/form/7XXB1ObBKCaQHfxUdIQ1">
                            <button className="seminar_button">Sign Up</button>
                        </a>
                    </div>

                    <div className="seminar_inner_container">
                        <li>Fruit Tree Pruning with Steve Bell</li>
                        <span>(February 22nd; 2:00 p.m.)</span>
                        <a href="https://link.lightworkdigital.com/widget/form/zFmKMJa52o4xfYP8liPM">
                            <button className="seminar_button">Sign Up</button>
                        </a>
                    </div> */}

                    {/* <div className="seminar_inner_container">
                        <li>Container Gardening with Jennifer Hobson (Price TBA)</li>
                        <span>(March 1st; 2:00 p.m.)</span>
                        <a href="https://link.lightworkdigital.com/widget/form/naREuEjOATU32yfpCnpR">
                            <p>Sold Out</p>
                        </a>
                    </div> */}

                    {/* <div className="seminar_inner_container">
                        <li>Rose Pruning with Marisa Thompson</li>
                        <span>(March 8th; 2:00 p.m.)</span>
                        <a href="https://link.lightworkdigital.com/widget/form/HNM0TmIzHiQKsaocJveq">
                            <button className="seminar_button">Sign Up</button>
                        </a>
                    </div> */}

                    {/* <div className="seminar_inner_container">
                        <li>Know Your Snakes with Herpetologist, Jerry Tuttle</li>
                        <span>(March 15th; 2:00 p.m.)</span>
                        <a href="https://link.lightworkdigital.com/widget/form/UHHGdr135kBXqW0tE5UF">
                            <button className="seminar_button">Sign Up</button>
                        </a>
                    </div>

                    <div className="seminar_inner_container">
                        <li>Beekeeping 2.0 with Justin Armstrong</li>
                        <span>(March 22nd; 2:00 p.m.)</span>
                        <a href="https://link.lightworkdigital.com/widget/form/bTT6YVD9BQXxg7RtYo6R">
                            <button className="seminar_button">Sign Up</button>
                        </a>
                    </div> */}
                </ul>
            </div>
            </div>
      

  <div className='seminar_pic_section'>
  </div>

 
      {/* <div className='seminars_body_bottom'>
                <h1>Click the Button Below to Sign up for Workshops</h1> 
        <div className='seminar_form'>
        <h2>This week's Workshop</h2>
        <a href="https://link.lightworkdigital.com/widget/form/vLlzQeIgoQN6azYxdwJB">
        <button className="seminar_button">Landscape Design</button>
       </a> 
        </div>
      </div> */}
        </div>
</div>
  )
}

export default Seminars;