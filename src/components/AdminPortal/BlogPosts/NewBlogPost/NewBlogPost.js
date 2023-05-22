import React, { useState } from "react";
import axios from "axios";
import './NewBlogPost.css'
import Swal from "sweetalert2";
import blog1 from '../../../../Assets/blogexample/b1.jpg'
import blog2 from '../../../../Assets/blogexample/b2.jpg'
import blog3 from '../../../../Assets/blogexample/b3.jpg'
import blog4 from '../../../../Assets/blogexample/b4.jpg'
import blog5 from '../../../../Assets/blogexample/b5.jpg'
import blog6 from '../../../../Assets/blogexample/b6.jpg'
import blog7 from '../../../../Assets/blogexample/b7.jpg'
import blog8 from '../../../../Assets/blogexample/b8.jpg'
import blog9 from '../../../../Assets/blogexample/b9.jpg'
import blog10 from '../../../../Assets/blogexample/b10.jpg'
import blog11 from '../../../../Assets/blogexample/b11.jpg'

const NewBlogPost = () => {
  const [formData, setFormData] = useState({
    title: ``,
    title2: ``,
    date: ``,
    img_1_url: ``,
    img_2_url: ``,
    img_3_url: ``,
    img_4_url: ``,
    img_5_url: ``,
    img_6_url: ``,
    img_7_url: ``,
    img_8_url: ``,
    img_9_url: ``,
    img_10_url: ``,
    img_1_captions: ``,
    img_2_captions:  ``,
    img_3_captions:   ``,
    img_4_captions:  ``,
    img_5_captions: ``,
    img_6_captions: ``,
    img_7_captions: ``,
    img_8_captions: ``,
    img_9_captions: ``,
    img_10_captions: ``,
    link:  ``,
    link2:  ``,
    icon:  ``,
    icon2: ``,
    icon3: ``,
    intro:  ``,
    body_1:  ``,
    body_2:  ``,
    body_3:  ``,
    body_4:  ``,
    conclusion:  ``,
    span_green:  ``,
    span_yellow:  ``,
    span_brown:  ``,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/newblogpost", formData)
      .then((response) => {
        Swal.fire({
          title: "Blog Posted",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error creating post",
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
    <div className="newBlog">
<div className="newBlog_header">
<h1>Admin Portal</h1>
<h1>Create new Blog Post</h1>
</div>



<div className="side_by_side">
<div className="newBlog_model">

  <h1>Example Placement</h1>
  <img alt="" src={blog1}/>
  <img alt="" src={blog2}/>
  <img alt="" src={blog3}/>
  <img alt="" src={blog4}/>
  <img alt="" src={blog5}/>
  <img alt="" src={blog6}/>
  <img alt="" src={blog7}/>
  <p>Img 8 will actually apear on the left side of the screen with caption on the right</p>
  <img alt="" src={blog8}/>
  <p>Img  9 will do the same but with text on the left and image on the right</p>
  <img alt="" src={blog9}/>
  <img alt="" src={blog10}/>
  <img alt="" src={blog11}/>


</div>






<div className="newBlog_form">
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          />
      </label>
      <label>
        Date
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1
        <input
          type="text"
          name="img_1_url"
          value={formData.img_1_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 1 Caption
        <input
          type="text"
          name="img_1_captions"
          value={formData.img_1_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon
        <input
          type="text"
          name="icon"
          value={formData.icon}
          onChange={handleChange}
          />
      </label>
      <label>
       Intro
        <textarea
          type="text"
          name="intro"
          value={formData.intro}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2
        <input
          type="text"
          name="img_2_url"
          value={formData.img_2_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 2 Caption
        <input
          type="text"
          name="img_2_captions"
          value={formData.img_2_captions}
          onChange={handleChange}
          />
      </label>
      <label>
     Yellow Text
        <input
          type="text"
          name="span_yellow"
          value={formData.span_yellow}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 1
        <textarea
          type="text"
          name="body_1"
          value={formData.body_1}
          onChange={handleChange}
          />
      </label>
      <label>
        Link
        <input
          type="text"
          name="link"
          value={formData.link}
          onChange={handleChange}
          />
      </label>
      <label>
        Title 2
        <input
          type="text"
          name="title2"
          value={formData.title2}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3
        <input
          type="text"
          name="img_3_url"
          value={formData.img_3_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 3 Caption
        <input
          type="text"
          name="img_3_captions"
          value={formData.img_3_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4
        <input
          type="text"
          name="img_4_url"
          value={formData.img_4_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 4 Caption
        <input
          type="text"
          name="img_4_captions"
          value={formData.img_4_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon 2
        <input
          type="text"
          name="icon2"
          value={formData.icon2}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 2
        <textarea
          type="text"
          name="body_2"
          value={formData.body_2}
          onChange={handleChange}
          />
      </label>
      <label>
     Green Text
        <input
          type="text"
          name="span_green"
          value={formData.span_green}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5
        <input
          type="text"
          name="img_5_url"
          value={formData.img_5_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 5 Caption
        <input
          type="text"
          name="img_5_captions"
          value={formData.img_5_captions}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 3
        <textarea
          type="text"
          name="body_3"
          value={formData.body_3}
          onChange={handleChange}
          />
      </label>
      <label>
        Link 2
        <input
          type="text"
          name="link2"
          value={formData.link2}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 6
        <input
          type="text"
          name="img_6_url"
          value={formData.img_6_url}
          onChange={handleChange}
          />
      </label> 
      <label>
        Image 6 Caption
        <input
          type="text"
          name="img_6_captions"
          value={formData.img_6_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7
        <input
          type="text"
          name="img_7_url"
          value={formData.img_7_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 7 Caption
        <input
          type="text"
          name="img_7_captions"
          value={formData.img_7_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8
        <input
          type="text"
          name="img_8_url"
          value={formData.img_8_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 8 Caption
        <input
          type="text"
          name="img_8_captions"
          value={formData.img_8_captions}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9
        <input
          type="text"
          name="img_9_url"
          value={formData.img_9_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 9 Caption
        <input
          type="text"
          name="img_9_captions"
          value={formData.img_9_captions}
          onChange={handleChange}
          />
      </label>
      <label>
     Brown Text
        <input
          type="text"
          name="span_brown"
          value={formData.span_brown}
          onChange={handleChange}
          />
      </label>
      <label>
       Body 4
        <textarea
          type="text"
          name="body_4"
          value={formData.body_4}
          onChange={handleChange}
          />
      </label>
      <label>
        Icon 3
        <input
          type="text"
          name="icon3"
          value={formData.icon3}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10
        <input
          type="text"
          name="img_10_url"
          value={formData.img_10_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Image 10 Caption
        <input
          type="text"
          name="img_10_captions"
          value={formData.img_10_captions}
          onChange={handleChange}
          />
      </label>

      <label>
      Conclusion
        <textarea
          type="text"
          name="conclusion"
          value={formData.conclusion}
          onChange={handleChange}
          />
      </label>

      <button type="submit">Add Blog Post</button>
    </form>
</div>
</div>



          </div>
  );
};

export default NewBlogPost;
