import React, { useEffect, useState } from 'react';
import './LatestYoutube.css'; 
import AOS from 'aos'
import 'aos/dist/aos.css'; 

const LatestYouTube = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://jericho-server-eb9k.onrender.com/api/latestVideos'); 
        const data = await response.json();

        if (data.length > 0) {
          setVideos(data);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchVideos();
  }, []);

  
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div>
      <div data-aos="flip-up"
              data-aos-offset="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
      <div className='latest_video_frame_outer' >
      <div className='latest_video_frame'>
        <h3 className='video_header'>Our Latest Video</h3>
        {videos.length > 0 && (
          <>
            <iframe
              className='youtube_frame'
              src={`https://www.youtube.com/embed/${videos[0].id}`}
              title="Latest Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              ></iframe>
            <div className='video_p_outer'>
            <p className='video_p'>{videos[0].snippet.description}</p>
            </div>
          </>
        )}
        </div>
        </div>
      </div>
      <div className='other_recents'>
        <h3 className='video_header2'>Other Recent Videos</h3>
        <div className="recent-videos">
          {videos.slice(1).map((video) => (
            <div key={video.id}>
      <div data-aos="flip-down"
              data-aos-offset="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
              <iframe
                className='youtube_frame2'
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.snippet.title}
              ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestYouTube;
