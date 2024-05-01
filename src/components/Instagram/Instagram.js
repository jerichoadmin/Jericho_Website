import React from 'react'
import './Instagram.css'
import InstagramWidget from './InstagramWidget'


function Instagram() {




  return (


    <div className='instagram_outer_shell'>

        <div className='instagram_welcome'>
        <h1>Instagram Gallery</h1>
        <br></br>
        <p>Check out our most recent Instagram posts</p>
        </div>


        <div className='instagram_body'>

        <InstagramWidget beholdId="hJXqtcIy46tZjdJmvtEz" />


<div className='instagram_bottom_container'>
  
<div className='instagram_bottom'>
          <h2>Wanna see more? </h2>
           <h2> Follow us on Instagram</h2>
          <a href="https://www.instagram.com/jerichonursery/?hl=en" target="_blank"  without rel="noreferrer">
    <button>Instagram Page</button>
</a>
</div>

</div>



        </div>



    </div>
  )
}

export default Instagram