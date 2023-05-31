import React, { useEffect, useRef, useState } from "react";
import './Seminars.css'
import SeminarIcon from '../../SVGs/SeminarIcon';
import SeminarForm from './SeminarForm';
import seminar_pic from '../../Assets/seminar_pic.jpg'



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
        <div className='seminars_welcome'>
            <h1>Workshops</h1>
        <p>
        Welcome Statement:  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        </div>
        <div className='seminars_body_main'>
            <div className='seminars_body_top'>
                <h1>This Year's Workshops</h1>
                <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
            </div>

    <div className='seminars_body_mid'>
    <div className="reveal-container">
<div className='s_inner_decoy'>
            <div className='s_decoy'>
            </div>
            <div id='movingDiv'>
    <div className={isAnimateds ? "s_visible" : "reveal-content"}><SeminarIcon /></div>
            </div>
    </div>
</div>

           <div className='seminars_list'>
           <div ref={revealRef1}>
          </div>
                <ul>
                    <h3>No Workshops Scheduled Currently</h3>
                    <p>They will resume after Spring</p>
                </ul>
            </div>
            </div>
      

  <div className='seminar_pic_section'>
  </div>

            <img alt='' src={seminar_pic} className='seminar_pic'/>
            <div className='seminars_body_bottom'>
                <h1> Sign Up For Workshops by clicking the button below</h1>
        <div className='seminar_form'>
       
       <a href="https://link.lightworkdigital.com/widget/form/3qaO8XFwZsIzsspf04OE">
        <button className="seminar_button">Workshop Sign Up</button>
       </a>


        </div>
            </div>
        </div>
</div>
  )
}

export default Seminars;