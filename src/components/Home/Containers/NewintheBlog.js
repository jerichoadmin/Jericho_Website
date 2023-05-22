import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './NewintheBlog.css'
import icon1 from '../../../Assets/Flower.png'
import banner from '../../../Assets/stone_banner.jpg'
import axios from 'axios'

function NewintheBlog() {

    const [blogData, setBlogData] = useState([])
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        axios
          .get(`/blog/${offset}`)
          .then((res) => {
            setBlogData([res.data]);
          })
       
          .catch((err) => {
            console.log(err);
          });
      }, [offset]);



  


    return (
        <div className='home_container_outer'>
            <div className='nb_container'>
            <div className='home_container_header'>
            <div className='hc_icon'>
                        <img  src={icon1} className="c_icon"/>
                    </div>
                    <div className='home_container_header_text'>
                        <h3>New In the Blog</h3>
                    </div>
                 
                    <div className='card_container'>
                    {blogData && blogData[0] && blogData[0].rows && (
  <div>
    <img
      src={`https://drive.google.com/uc?export=view&id=${blogData[0].rows[0].img_1_url}`}
      className='c_image'
      alt=''
    />
  </div>
)}
 </div>

                 
            </div>
    
    
            <div className='hc_body'>
                    <div className='hc_img'>
     




                    </div>
                    <div className='hc_paragraph'>
                     
                        <p className='abc'>
                     Read this Week's newest Blog Post:
                        </p>
                        <br></br>
                        {blogData && blogData[0] && blogData[0].rows && (
  <div>
    <span className='blog_name'>{blogData[0].rows[0].title}</span>
  </div>
)}

                   <NavLink to='/blog'>
                        <button className='nb_button'>Take me to Blog</button>
                        </NavLink>
                    </div>
                    </div>
            </div>
    
    
        </div>
      
      )
}

export default NewintheBlog