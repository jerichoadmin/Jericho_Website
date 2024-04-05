import React, { useState } from "react";
import axios from "axios";
import './NewPromotionsPost.css'
import Swal from "sweetalert2";







const NewPromotionsPost = () => {



    const [promotionsFormData, setPromotionsFormData] = useState({
        name: ``,
        img_url: ``,
        description: ``,
        price: ``,
        tagline: ``,
        date_posted: ``
      });

      const handleSubmit = (event) => {
        event.preventDefault();
    
        axios
          .post("https://jericho-server-eb9k.onrender.com/newpromotionspost", promotionsFormData)
          .then((response) => {
            Swal.fire({
              title: "Promotion Item Posted",
              confirmButtonColor: "rgb(210, 161, 12)",
              customClass: "buttonalert",
              confirmButtonText: "Ok"
            })
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error creating Promotion item",
              confirmButtonColor: "orange",
              customClass: "buttonalert",
              confirmButtonText: "Ok"
            })
          });
      };

      const handleChange = (event) => {
        setPromotionsFormData({
          ...promotionsFormData,
          [event.target.name]: event.target.value,
        });
      };
    



  return (
    <div className="create_promotion_item">

<div className="create_promotion_item_body">
    <form onSubmit={handleSubmit} className="promotion_item_form">
      <label>
        Name
        <input
          type="text"
          name="name"
          value={promotionsFormData.name}
          onChange={handleChange}
          />
      </label>
      <label>
        Image URL
        <input
          type="text"
          name="img_url"
          value={promotionsFormData.img_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={promotionsFormData.description}
          onChange={handleChange}
          />
      </label>
      <label>
        Price
        <input
          type="text"
          name="price"
          value={promotionsFormData.price}
          onChange={handleChange}
          />
      </label>
      <label>
        Tagline
        <input
          type="text"
          name="tagline"
          value={promotionsFormData.tagline}
          onChange={handleChange}
          />
      </label>
      <label>
        Date Posted
        <input
          type="text"
          name="date_posted"
          value={promotionsFormData.date_posted}
          onChange={handleChange}
          />
      </label>
 

      <button type="submit">Send</button>
    </form>
</div>
</div>
  );
};

export default NewPromotionsPost;
