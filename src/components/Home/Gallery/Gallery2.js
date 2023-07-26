import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery2.css'
import axios from 'axios';



function Gallery2() {

  const [galleryData, setGalleryData] = useState([])
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    axios
      .get(`https://jericho-server-eb9k.onrender.com/gallery2`)
      .then((res) => {
        setGalleryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
          {
            breakpoint: 1424,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 824,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          }
        ]
      };

      const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
            Previous
          </div>
        );
      };
      
      const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
            Next
          </div>
        );
      };



    
  return (
    <div className='h2_carousel'>
      <h1>Photos From Jericho</h1>
      {visible ? (<p>Swipe to see more photos..</p>) : ('')}
        <Slider {...settings} prevArrow={<PrevArrow />} nextArrow={<NextArrow />}>
            {galleryData.map((item) => (
                    <div className='home_gallery_card'> 
             <div className='home_photo_gallery_container'>
             <img src={item.img_url} className='home_gallery2_photo' alt={item.alt_text} title={item.name}/>
             <span className='photo_name'>{item.name}</span>
             </div>
                    </div>
            ))}

            
        </Slider>








    </div>
  )
}

export default Gallery2;