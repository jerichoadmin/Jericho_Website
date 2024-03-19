import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import './NewintheBlog.css'
import icon1 from '../../../Assets/Flower.png'
import axios from 'axios'


function NewintheBlog() {

    const [blogData, setBlogData] = useState([])
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        axios
          .get(`https://jericho-server-eb9k.onrender.com/blog/${offset}`)
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
                        <img src={icon1} className="c_icon" alt=''/>
                    </div>
                    <div className='home_container_header_text'>
                        <h3>New In the Blog</h3>
                    </div>
                 
<div className='blog_card_container'>
            {blogData && blogData[0] && blogData[0].rows && (
        <div className='blog_card_container_img'>
    <img
      src={blogData[0].rows[0].img_1_url}
      className='home_blog_card'
      alt={blogData[0].rows[0].img_1_alt_text}
    />
        </div>
)}

      <div className='home_blog_text'>
{blogData && blogData[0] && blogData[0].rows && (
  <div className='home_blog_text_title'>
    <h1>Read this Week's Newest Blog Post:</h1>
    <p className='blog_name'>{blogData[0].rows[0].title}</p>
  </div>
)}
{blogData && blogData[0] && blogData[0].rows && (
  <div className='blog_intro_container'>
    <p className='blog_intro'>{blogData[0].rows[0].intro}</p>
  </div>  
)}
      </div>

 </div>


 <div className='hpb_button'>
 <NavLink to='/blog'>
                        <button className='nb_button'>Take me to Blog</button>
  </NavLink>
 </div>


 </div>
    
    

</div>
</div>
)}

export default NewintheBlog;