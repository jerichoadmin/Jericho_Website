import React from 'react'
import './Videos.css'
import LatestYouTube from './LatestYoutube'



function Videos() {


    const channelId = 'UCzQXGhQyfMHt_e8wH9drt7g';





  return (
    <div className='Videos'>



<div className='videos_welcome'>
            <h1>Jericho's Videos</h1>
        <p>
        Welcome to Jericho Nursery's video hub! Explore the beauty of plants, gardening tips, and nature's artistry. Whether you're a pro or just love greenery, our videos entertain and educate. Enjoy the show!
        </p>
        </div>


        <div className='videos_body_main'>
            <div>
                <LatestYouTube channelId={channelId}/>
            </div>

            <div className='video_bottom_half'>
                <h4>Make sure you check out the Jericho Nursery Youtube Page to check out ALL of our videos from throughout the years. Click the button below to be redirected to our YouTube Page. Don't forget to like and subscribe!</h4>

                <a href='https://www.youtube.com/@JerichoNursery'>
                <button className='vid_button'>Go to YouTube</button>
                </a>

            </div>
               
        </div>




    </div>
  )
}

export default Videos