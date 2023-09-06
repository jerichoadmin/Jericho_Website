import React, {useState, useEffect} from 'react'
import './SingleBlog.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../SVGs/Loading'
import RelatedBlogs from './RelatedBlogs'



function SingleBlog() {
  const { blogid } = useParams();
  const [blogData, setBlogData] = useState([])
  const [blogIdNum, setBlogIdNum] = useState(+blogid)
  const [loading, setLoading] = useState(true)




  useEffect(() => {
    axios.get(`https://jericho-server-eb9k.onrender.com/singleblog/${blogIdNum}`)
    .then((response) => {
  
      setBlogData([response.data])
      setLoading(false)
    })
    .catch((error) => {
      console.error(error);
    });
  }, [blogIdNum])
  



  return (
    <div className='Single_Blog_Post'>

      <div className='single_blog_welcome'>
        <h1>Currently Reading:</h1>
        {blogData && blogData.map((item) => (
              <h2>{item.title}</h2>
        ))}
      </div>

      {loading ? (<div className='loading_anim'> <Loading /> </div>) : ( 


  
      
<div className='card_container'>
      {blogData && blogData.map((item) => (
<div key={item.id} className='blog_body_main'> 
    <div className='blog_body_top'>
            <h1 className='blog_title'>{item.title}</h1>
            <span className='date'>{item.date}</span>
           
            {item.img_1_url && <img src={item.img_1_url} className='blog_img_1' alt={item.img_1_alt_text}/>}
            {item.img_1_captions && <p>{item.img_1_captions}</p>}




            <div className='blog_icon_1'>
              {item.icon && <img alt='' src={item.icon}/> }
           
            </div>   
            {item.intro && <p>{item.intro}</p>}

            {item.img_2_url && <img src={item.img_2_url} className='blog_img' alt={item.img_2_alt_text}/>}
            {item.img_2_captions && <p className='blog_bold'>{item.img_2_captions}</p>}

            <div className='blog_paragraph_top'>
              {item.body_img_1 && <img alt='' src={item.body_img_1} className='body_img_1'/>}
              {item.span_yellow && <span className='span_yellow'>{item.span_yellow}</span>}
{/* RICH TEXT */}
              {item.body_1 && (
          <div className='rich-text'>
  <div className="view ql-editor" dangerouslySetInnerHTML={{ __html: item.body_1 }}></div>
            </div>
)}


              {item.link && <a href={item.link}  target="_blank" rel="noreferrer">
             <button>Link</button> 
               </a>}
            </div>

      </div>



<div className='blog_body_mid'>
  <h1>{item.title2}</h1> 
  <a href={`http://${item.img_3_href}`} target="_blank" rel="noopener noreferrer">
  {item.img_3_url && <img src={item.img_3_url} className='blog_img' alt={item.img_3_alt_text} />}
</a>
  {item.img_3_captions && <p>{item.img_3_captions}</p>}
  <br></br>
  {item.img_4_url && <img src={item.img_4_url} className='blog_img' alt={item.img_4_alt_text}/>}
  {item.img_4_captions && <p className='blog_bold'>{item.img_4_captions}</p>}

  <div className='blog_icon_2'>
    {item.icon2 && <img alt='' src={item.icon2}/> }
  </div>   

  <div className='blog_paragraph_mid'>
  
    {item.body_2 && <p>{item.body_2}</p>}
    {item.span_green && <span className='span_green'>{item.span_green}</span>}

    {item.img_5_url && <img src={item.img_5_url} className='blog_img' alt={item.img_5_alt_text}/>}
    {item.img_5_captions && <p>{item.img_5_captions}</p>}

  
    {item.body_3 && <p>{item.body_3}</p>}

          {item.link2 && <a href={item.link2}  target="_blank" rel="noreferrer">
             <button>Link</button> 
               </a>}
  </div>   

  <div className='extra_content'>
    {item.img_6_url && <img src={item.img_6_url} className='blog_img' alt={item.img_6_alt_text}/>}
    {item.img_6_captions && <p className='blog_bold'>{item.img_6_captions}</p>}
    {item.img_7_url && <img src={item.img_7_url} className='blog_img' alt={item.img_7_alt_text}/>}
    {item.img_7_captions && <p>{item.img_7_captions}</p>}
  </div>
</div>



<div className='blog_body_bottom'>
  {item.img_8_url && (
    <div className='left_8'>
      <img src={item.img_8_url} className='blog_img' alt={item.img_8_alt_text}/>
      <p>{item.img_8_captions}</p>
    </div>
  )}
  {item.img_9_url && (
    <div className='right_9'>
      <img src={item.img_9_url} className='blog_img' alt={item.img_9_alt_text}/>
      <p>{item.img_9_captions}</p>
    </div>
  )}
  <div className='blog_paragraph_bottom'>
    {item.span_brown && (
      <span className='span_brown'>{item.span_brown}</span>
    )}
    {item.body_4 && (
      <p>{item.body_4}</p>
    )}
    <div className='blog_icon_3'>
    {item.icon3 && (
       <img alt='' src={item.icon3} className='icon3'/> 
    )}
    </div>
  </div>   
  {item.img_10_url && <img src={item.img_10_url} className='blog_img' alt={item.img_10_alt_text}/>}
  {item.img_10_captions && <p>{item.img_10_captions}</p>}




  {item.conclusion && (
    <p>{item.conclusion}</p>
  )}




</div>

    </div>
))}
</div>
      )}

<div>

<RelatedBlogs blogIdNum={blogIdNum} />

</div>




  </div>

  )
}

export default SingleBlog;


