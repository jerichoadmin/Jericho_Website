import React, { useEffect, useState } from 'react';
import './LatestYoutube.css';

const LatestYouTube = ({ channelId }) => {
  const [videos, setVideos] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`
        );

        const data = await response.json();

        if (data.items.length > 0) {
          const videosData = data.items.map((item) => ({
            id: item.id.videoId,
            snippet: item.snippet,
          }));

          setVideos(videosData);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchVideos();
  }, [apiKey, channelId]);

  return (
    <div>
      <div className='latest_video_frame'>
        <h3 className='video_header'>Check out the lastest Jericho Nursery Video below</h3>
        {videos.length > 0 && (
          <>
            <iframe
              className='youtube_frame'
              src={`https://www.youtube.com/embed/${videos[0].id}`}
              title="Latest Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
            <p className='video_p'>"{videos[0].snippet.description}"</p>
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
