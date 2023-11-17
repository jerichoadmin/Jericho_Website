import React, { useEffect, useState } from 'react';
import './LatestYoutube.css';

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

  return (
    <div>
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
            <p className='video_p'>{videos[0].snippet.description}</p>
          </>
        )}
      </div>
      <div className='other_recents'>
        <h3 className='video_header2'>Other Recent Videos</h3>
        <div className="recent-videos">
          {videos.slice(1).map((video) => (
            <div key={video.id}>
              <iframe
                className='youtube_frame2'
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.snippet.title}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestYouTube;
