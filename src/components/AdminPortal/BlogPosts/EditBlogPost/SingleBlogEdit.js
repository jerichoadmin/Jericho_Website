import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './SingleBlogEdit.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';






function SingleBlogEdit({match}) {


  const { id } = useParams();
  const [formData, setFormData] = useState([]);
  const [blogData, setBlogData] =useState([]);
  const [editorHtml, setEditorHtml] = useState(blogData.body_1); 
  
useEffect(() => {
  axios.get(`https://jericho-server-eb9k.onrender.com/singleblog/${id}`)
  .then((response) => {
    setBlogData(response.data)
  })
  .catch((error) => {
    console.error(error);
  });
}, [id])



  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`https://jericho-server-eb9k.onrender.com/editblogpost/${id}`, {
        ...formData,
        body_1: editorHtml
      })
      .then((response) => {
        Swal.fire({
          title: "Blog Edited",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error editing blog post",
          confirmButtonColor: "orange",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };




  return (
    <div className='single_blog_edit'>
        <h1>Edit Single Blog {id}</h1>
  
   
        <div>
        <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          placeholder={blogData.title}
          onChange={handleChange}
          />
      </label>
      <label>
        Date
        <input
          type="text"
          name="date"
          value={formData.date}
          placeholder={blogData.date}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1
        <input
          type="text"
          name="img_1_url"
          value={formData.img_1_url}
          placeholder={blogData.img_1_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1 Caption
        <input
          type="text"
          name="img_1_captions"
          value={formData.img_1_captions}
          placeholder={blogData.img_1_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1 Alt Text
        <input
          type="text"
          name="img_1_alt_text"
          value={formData.img_1_alt_text}
          placeholder={blogData.img_1_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon
        <input
          type="text"
          name="icon"
          value={formData.icon}
          placeholder={blogData.icon}
          onChange={handleChange}
          />
      </label>
      <label>
       Intro
        <textarea
          type="text"
          name="intro"
          value={formData.intro}
          placeholder={blogData.intro}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2
        <input
          type="text"
          name="img_2_url"
          value={formData.img_2_url}
          placeholder={blogData.img_2_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2 Caption
        <input
          type="text"
          name="img_2_captions"
          value={formData.img_2_captions}
          placeholder={blogData.img_2_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2 Alt Text
        <input
          type="text"
          name="img_2_alt_text"
          value={formData.img_2_alt_text}
          placeholder={blogData.img_2_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
     Yellow Span
        <input
          type="text"
          name="span_yellow"
          value={formData.span_yellow}
          placeholder={blogData.span_yellow}
          onChange={handleChange}
          />
      </label>
<label>
  Body 1 - needs styling
<p>
  {blogData.body_1}
</p>
Must Rewrite -
  <ReactQuill
    value={editorHtml}
    onChange={setEditorHtml}
    className='quill-edit'
  />
</label>
      <label>
        Link
        <input
          type="text"
          name="link"
          value={formData.link}
          placeholder={blogData.link}
          onChange={handleChange}
          />
      </label>
      <label>
        Title 2
        <input
          type="text"
          name="title2"
          value={formData.title2}
          placeholder={blogData.title2}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3
        <input
          type="text"
          name="img_3_url"
          value={formData.img_3_url}
          placeholder={blogData.img_3_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3 HREF (link)
        <input
          type="text"
          name="img_3_href"
          value={formData.img_3_href}
          placeholder={blogData.img_3_href}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3 Caption
        <input
          type="text"
          name="img_3_captions"
          value={formData.img_3_captions}
          placeholder={blogData.img_3_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3 Alt Text
        <input
          type="text"
          name="img_3_alt_text"
          value={formData.img_3_alt_text}
          placeholder={blogData.img_3_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4
        <input
          type="text"
          name="img_4_url"
          value={formData.img_4_url}
          placeholder={blogData.img_4_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4 Caption
        <input
          type="text"
          name="img_4_captions"
          value={formData.img_4_captions}
          placeholder={blogData.img_4_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4 Alt Text
        <input
          type="text"
          name="img_4_alt_text"
          value={formData.img_4_alt_text}
          placeholder={blogData.img_4_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon 2
        <input
          type="text"
          name="icon2"
          value={formData.icon2}
          placeholder={blogData.icon2}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 2
        <textarea
          type="text"
          name="body_2"
          value={formData.body_2}
          placeholder={blogData.body_2}
          onChange={handleChange}
          />
      </label>
      <label>
     Green Span
        <input
          type="text"
          name="span_green"
          value={formData.span_green}
          placeholder={blogData.span_green}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5
        <input
          type="text"
          name="img_5_url"
          value={formData.img_5_url}
          placeholder={blogData.img_5_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5 Caption
        <input
          type="text"
          name="img_5_captions"
          value={formData.img_5_captions}
          placeholder={blogData.img_5_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5 Alt Text
        <input
          type="text"
          name="img_5_alt_text"
          value={formData.img_5_alt_text}
          placeholder={blogData.img_5_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 3
        <textarea
          type="text"
          name="body_3"
          value={formData.body_3}
          placeholder={blogData.body_3}
          onChange={handleChange}
          />
      </label>
      <label>
        Link 2
        <input
          type="text"
          name="link2"
          value={formData.link2}
          placeholder={blogData.link2}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 6
        <input
          type="text"
          name="img_6_url"
          value={formData.img_6_url}
          placeholder={blogData.img_6_url}
          onChange={handleChange}
          />
      </label> 
      <label>
        Image 6 Caption
        <input
          type="text"
          name="img_6_captions"
          value={formData.img_6_captions}
          placeholder={blogData.img_6_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 6 Alt Text
        <input
          type="text"
          name="img_6_alt_text"
          value={formData.img_6_alt_text}
          placeholder={blogData.img_6_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7
        <input
          type="text"
          name="img_7_url"
          value={formData.img_7_url}
          placeholder={blogData.img_7_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7 Caption
        <input
          type="text"
          name="img_7_captions"
          value={formData.img_7_captions}
          placeholder={blogData.img_7_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7 Alt Text
        <input
          type="text"
          name="img_7_alt_text"
          value={formData.img_7_alt_text}
          placeholder={blogData.img_7_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8
        <input
          type="text"
          name="img_8_url"
          value={formData.img_8_url}
          placeholder={blogData.img_8_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8 Caption
        <input
          type="text"
          name="img_8_captions"
          value={formData.img_8_captions}
          placeholder={blogData.img_8_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8 Alt Text
        <input
          type="text"
          name="img_8_alt_text"
          value={formData.img_8_alt_text}
          placeholder={blogData.img_8_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9
        <input
          type="text"
          name="img_9_url"
          value={formData.img_9_url}
          placeholder={blogData.img_9_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9 Caption
        <input
          type="text"
          name="img_9_captions"
          value={formData.img_9_captions}
          placeholder={blogData.img_9_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9 Alt Text
        <input
          type="text"
          name="img_9_alt_text"
          value={formData.img_9_alt_text}
          placeholder={blogData.img_9_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
     Brown Span
        <input
          type="text"
          name="span_brown"
          value={formData.span_brown}
          placeholder={blogData.span_brown}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 4
        <textarea
          type="text"
          name="body_4"
          value={formData.body_4}
          placeholder={blogData.body_4}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon 3
        <input
          type="text"
          name="icon3"
          value={formData.icon3}
          placeholder={blogData.icon3}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10
        <input
          type="text"
          name="img_10_url"
          value={formData.img_10_url}
          placeholder={blogData.img_10_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10 Caption
        <input
          type="text"
          name="img_10_captions"
          value={formData.img_10_captions}
          placeholder={blogData.img_10_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10 Alt Text
        <input
          type="text"
          name="img_10_alt_text"
          value={formData.img_10_alt_text}
          placeholder={blogData.img_10_alt_text}
          onChange={handleChange}
          />
      </label>
      <label>
      Conclusion
        <textarea
          type="text"
          name="conclusion"
          value={formData.conclusion}
          placeholder={blogData.conclusion}
          onChange={handleChange}
          />
      </label>
      <label>
      Tags (Seperate Tags by Comma)
        <input
          type="text"
          name="tags"
          value={formData.tags}
          placeholder={blogData.tags}
          onChange={(e) =>
            setFormData({
              ...formData,
              tags: e.target.value.split(",").map((tag) => tag.trim()),
            })
          }
          />
      </label>

      <button type="submit">Make Edit</button>
    </form>
</div>
     


  
  
      </div>
  )
}

export default SingleBlogEdit