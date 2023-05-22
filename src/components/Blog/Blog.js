import React, {useState, useEffect} from 'react'
import './Blog.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Loading from '../../SVGs/Loading'

import axios from "axios";



function Blog() {

  const { id } = useParams()
  const [blogData, setBlogData] = useState([])
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0)
  const [pages, setPages] = useState(0)
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true)



useEffect(() => {
  setLoading(true)
  axios
    .get(`/blog/${offset}`)
    .then((res) => {
      setBlogData([res.data]);
      setLoading(false)
      if([res.data]){
        setCount([res.data][0].count)
      }
    })
 
    .catch((err) => {
      console.log(err);
    });
}, [offset]);


console.log(offset)
useEffect(() => {
mapPages()
}, [blogData])

const mapPages = () => {
  setPages(() => (count / 5.05))
  console.log(pages)
}

function mapButtons(count) {
  const buttons = [];
  for (let i = 1; i <= count; i++) {
    buttons.push(<button
      key={i}
      onClick={() => {
        setOffset(i * 5);
        setActive(i);
      }}
      className={active === i ? 'active_button' : ''}
    >{i + 1}</button>);
  }
  return buttons;
}


const hanldeScrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <div className='Blog'>

      <div className='blog_welcome'>
        <h1>Blog and Gallery</h1>
        <p>Level up your gardening skills with Jericho Nursey's blog. Get expert tips and techniques for a thriving garden that will impress all. Don't miss out on this valuable resource to unlock your green thumb's true potential.</p>
      </div>



{loading ? (<div className='loading_anim'> <Loading /> </div>) : (





<div className='card_container'>
    {blogData && blogData[0] && blogData[0].rows && blogData[0].rows.map((blogPost) => (
  
      <div className='small_blog_card'> 
                    <div className='small_blog_card_top'>        
                    <img src={`https://drive.google.com/uc?export=view&id=${blogPost.img_1_url}`} className='small_blog_photo' alt=''/>
                    </div>
                    <div className='small_blog_card_bottom'>
                    <h3>{blogPost.title}</h3>
                    <div className='text_overflow'>
                    <p>{blogPost.intro}</p>
                     </div>
                     <div className='small_blog_card_button'>


               <Link to={`/singleblog/${blogPost.blogtableid}`}>
                    <button>Read More</button>
               </Link>
       
                    <p>{blogPost.id}</p>
                    </div>
                    <div className='small_blog_card_span'>
                    <span>{blogPost.date}</span>
                    </div>
                    </div>
                    </div>
 
    ))}
 </div>
)}


<div className='blog_snav_buttons'>
  
              <button onClick={hanldeScrollTop}> Back to Top</button>
</div>
<div className='page_numbers'>

<button onClick={() => {
        setOffset(0);
        setActive(0);
      }}
      className={active === 0 ? 'active_button' : ''}
      
      >1</button> 
{mapButtons(pages)}
</div>



    </div>
  )
}

export default Blog;