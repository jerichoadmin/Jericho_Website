import React, { useEffect, useRef, useState } from "react";
import './Seminars.css'
import SeminarIcon from '../../SVGs/SeminarIcon';
import SeminarForm from './SeminarForm';
import seminar_pic from '../../Assets/seminar_pic.jpg'



function Seminars() {

    const revealRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      const revealElement = revealRef.current; 
      if (revealElement) {
        const revealTop = revealElement.getBoundingClientRect().top; 
        const windowHeight = window.innerHeight; 

        if (revealTop < windowHeight) {
            setTimeout(() => {
            setIsVisible(true);

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


    <div className='seminars_body_mid'>
                <div className="reveal-container">
      <div
        ref={revealRef}
        className={`seminar_reveal-content ${isVisible ? "seminar_visible" : ""}`}
      >
        <div className="sized_svg">
<SeminarIcon />
        </div>
      </div>
    </div>

           <div className='seminars_list'>
                <ul>
                    <h3>No Workshops Scheduled Currently</h3>
                    <p>They will resume after Spring</p>
                </ul>
            </div>



            </div>

  <div className='seminar_pic_section'>
  </div>
</div>
            <img alt='' src={seminar_pic} className='seminar_pic'/>
            <div className='seminars_body_bottom'>
                <h1> Sign Up For the Next Workshop Here</h1>
        <div className='seminar_form'>
        <SeminarForm />
        </div>
            </div>
        </div>
</div>
  )
}

export default Seminars;