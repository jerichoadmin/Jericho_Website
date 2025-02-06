import React, {useState, useEffect} from 'react'
import './PreviewPost.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css';


function PreviewPost() {

 const [previewData, setPreviewData] = useState([])

    useEffect(() => {
        axios.get(`https://jericho-server-eb9k.onrender.com/preview`)
        .then((response) => {

          setPreviewData(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
      }, [])

      console.log(previewData)


      const deletePreview = (previewtableid) => {
        axios
          .delete(`https://jericho-server-eb9k.onrender.com/deletepreview/${previewtableid}`, {
          })
          .then(() => {
            Swal.fire({
              title: "Preview has been Deleted",
              confirmButtonColor: "rgb(210, 161, 12)",
              customClass: "buttonalert",
              confirmButtonText: "OK", 
            })
            .finally(()=>window.location.reload(false))
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const finalizePreview = (previewtableid) => {
        // Find the selected preview blog by its ID
        const selectedPreview = previewData.find(item => item.previewtableid === previewtableid);
      
        // Make a POST request to send the selected preview data to the server
        axios.post('https://jericho-server-eb9k.onrender.com/newblogpost', selectedPreview)
          .then((response) => {
            // Handle the response if needed
            console.log(response.data);
            // Show a success message to the user
            Swal.fire({
              title: 'Preview has been Finalized',
              confirmButtonColor: 'rgb(210, 161, 12)',
              customClass: 'buttonalert',
              confirmButtonText: 'OK',
            })
            // Reload the page to update the preview list
            .finally(() => window.location.reload(false));
          })
          .catch((error) => {
            // Handle errors if any
            console.error(error);
          });
      };


      
 
 
    return (
<div className='preview'>


<div className='Single_Blog_Post'>

<div className='preview_welcome'>
  <h1>Preview Blog Posts</h1>

</div>




<div className='card_container'>
{previewData && previewData.map((item) => (
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
     

     <h3>Tags:</h3>
{item.tags && (
  <p>{item.tags.join(', ')}</p>
)}
     
     <button className='delete_preview' onClick={() => deletePreview(item.previewtableid)}>Delete this Preview</button>
     <NavLink to={`/editpreview/${item.previewtableid}`}>
<button className='edit_preview'>Edit This Preview</button>
     </NavLink>
     <button className='finalize_preview'onClick={() => finalizePreview(item.previewtableid)}>Finalize This Preview</button>
</div>
</div>
))}
</div>
 </div>





 </div>

  )
}

export default PreviewPost;