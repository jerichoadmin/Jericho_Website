import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import './NewGalleryImg.css'


const NewGalleryImg = () => {
  const [formData, setFormData] = useState({
    name: ``,
    img_url: ``,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/newgalleryimg", formData)
      .then((response) => {
        Swal.fire({
          title: "Img Posted",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error posting img",
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
    <div className="newGalleryImg">
<div className="new_gallery_img">
<h1>Admin Portal</h1>
<h2>Add new Photo</h2>
</div>








<div className="newBlog_form">
    <form onSubmit={handleSubmit}>
      <label>
 Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          />
      </label>
      <label>
Img URL
        <input
          type="text"
          name="img_url"
          value={formData.img_url}
          onChange={handleChange}
          />
      </label>
     
   

      <button type="submit">Post Img to Gallery</button>
    </form>
</div>
</div>




  );
};

export default NewGalleryImg;
