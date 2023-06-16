import React, {useState, useRef, useEffect} from 'react'
import './Radio.css'
import radiorick from '../../Assets/radiorick2.JPG'
import RadioMic from '../../SVGs/RadioMic'
import { Helmet } from 'react-helmet'

function Radio() {
    const revealRefRadio = useRef(null); 
    const [isAnimatedr, setIsAnimatedr] = useState(false);

    const handleScroll = () => {
      const revealElement = revealRefRadio.current; 
      if (revealElement) {
        const revealTop = revealElement.getBoundingClientRect().top; 
        const windowHeight = window.innerHeight; 

        if (revealTop < windowHeight) {
            setTimeout(() => {
            setIsAnimatedr(true);

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
    <div className='Radio'>
<Helmet>
        <title>Jericho Nursery Radio Show - Gardening Tips and Discussions</title>
        <meta name="description" content="Tune in to the Jericho Nursery Radio Show for insightful gardening tips, plant discussions, and expert advice." />
        <meta property="og:title" content="Jericho Nursery Radio Show - Gardening Tips and Discussions" />
        <meta property="og:description" content="Tune in to the Jericho Nursery Radio Show for insightful gardening tips, plant discussions, and expert advice." />
        <meta property="og:image" content="https://jericho-content.nyc3.cdn.digitaloceanspaces.com/SEO_photos/bowls.jpg" />
        <meta property="og:type" content="website" />
   
</Helmet>
        <div className='radio_welcome'>
            <h1> We have been on air since 2005</h1>
            <p>
            Garden Talk with Rick Hobson has been on the air for over 15 years and counting. Tune in every other Saturday to hear everything you need to know about Albuquerque gardening, southwestern horticulture, and all kinds of plants from zone 5-8.
            </p>
    
        </div>


        <div className='radio_body_main'>

            <div className='radio_body_top'>

            <h1>Garden Talk</h1>
            <h3>
                TUNE IN TO "GARDEN TALK" 11:00 AM SATURDAYS
            </h3>
            <h2>
                KKOB | 96.3 FM | 770 AM 
            </h2>
</div>



<div>

<div className="reveal-container">
<div className='inner_decoy'>
            <div className='decoy-radio'>
            </div>
            <div id='movingDiv'>
    <div className={isAnimatedr ? "visible-radio" : "reveal-content"}><RadioMic /></div>
            </div>
    </div>

</div>
</div>


<div ref={revealRefRadio}> </div>
            <div className='radio_rick_container'>
        <img alt='' src={radiorick} className='radio_rick'/>
            </div>
    


     <div className='radio_body_mid'>
<div className='rbm_section'>
        <h2>Meet the Host</h2>
        <p>
        Rick Hobson is the owner of his own thriving business, Jericho Nursery, and host of the successful call-in gardening show, New Mexico Garden Talk on KKOB. Rick Hobson worked at Rowland’s for over 25 years and is considered an expert in the Albuquerque gardening community and around the state. Rick is on numerous boards, including the Japanese beetle taskforce; was acting president of the New Mexico Association of Independent Nursery Industries and is currently assisting the New Mexico chapter of the Colorado Nursery and Greenhouse Association to create testing programs for nursery, landscape, and greenhouse employees.
        </p>
</div>
     </div>
<div className='radio_body_bottom'>
  <div className='rbb_left'>
    <div className='rbb_pic'>
            <img className='kkob_banner' src='https://express-images.franklymedia.com/6616/sites/124/2020/12/14121100/GARDENTALK-768x180.jpg' alt=''/>
    </div>
            <span>You can listen to Garden Talk over the internet by visiting KKOB.com. Click the "Listen LIVE " button below to tune in</span>

            <a target="_blank" rel='noreferrer' href="https://www.newsradiokkob.com/new-mexico-garden-talk/">
            <button>Listen LIVE </button>
            </a>
  </div>
  <div className='rbb_right'>
    <div className='rbb_pic'>
        <img className='gardentalk' src='https://www.omnycontent.com/d/programs/a7b0bd27-d748-4fbe-ab3b-a6fa0049bcf6/fdd9f235-b300-4ebc-93c5-afe200dfddf2/image.jpg?t=1681320560&size=small' alt=''/>
    </div>

    <span>You can also listen to past boardcasts on our podcast, Garden Talk. Click the 'Podcast Link' button below to listen</span>

    <a target="_blank" rel='noreferrer' href="https://omny.fm/shows/garden-talk-new-mexico">
            <button>Podcast Link</button>
            </a>


  </div>


</div>

        </div>
    </div>
  )
}

export default Radio;