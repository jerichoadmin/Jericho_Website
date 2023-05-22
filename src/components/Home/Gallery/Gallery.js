import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'
import axios from 'axios';



function Gallery() {

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
      .get(`/gallery`)
      .then((res) => {
        setGalleryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


console.log(galleryData)
  


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
              slidesToScroll: 2,
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



    
  return (
    <div className='h_carousel'>
      <h1>Photos from Jericho</h1>
      {visible ? (<p>Swipe to see more photos..</p>) : ('')}
        <Slider {...settings}>
            {galleryData.map((item) => (
                    <div className='home_gallery_card'> 
             <div className='home_photo_gallery_container'>
             <img src={`https://drive.google.com/uc?export=view&id=${item.img_url}`} className='home_gallery_photo' alt=''/>
             </div>
                    </div>
            ))}

            
        </Slider>








    </div>
  )
}

export default Gallery