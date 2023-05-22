import React, { useState } from "react";
import axios from "axios";
import './NewSalesPost.css'
import Swal from "sweetalert2";







const NewSalesPost = () => {




  const [salesFormData, setSalesFormData] = useState({
    name: ``,
    img_url: ``,
    description: ``,
    price: ``,
    discount: ``,
    tagline: ``,
    start_date: ``,
    expiration: ``
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/newsalespost", salesFormData)
      .then((response) => {
        Swal.fire({
          title: "Sale Item Posted",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error creating Sale item",
          confirmButtonColor: "orange",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        })
      });
  };

  const handleChange = (event) => {
    setSalesFormData({
      ...salesFormData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="create_sale_item">

<div className="create_sale_item_body">
    <form onSubmit={handleSubmit} className="sale_item_form">
      <label>
        Name
        <input
          type="text"
          name="name"
          value={salesFormData.name}
          onChange={handleChange}
          />
      </label>
      <label>
        Image
        <input
          type="text"
          name="img_url"
          value={salesFormData.img_url}
          onChange={handleChange}
          />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={salesFormData.description}
          onChange={handleChange}
          />
      </label>
      <label>
       Price
        <input
          type="text"
          name="price"
          value={salesFormData.price}
          onChange={handleChange}
          />
      </label>
      <label>
       Discount
        <input
          type="text"
          name="discount"
          value={salesFormData.discount}
          onChange={handleChange}
          />
      </label>
      <label>
       Tagline
        <input
          type="text"
          name="tagline"
          value={salesFormData.tagline}
          onChange={handleChange}
          />
      </label>
      <label>
      Start Date
        <input
          type="text"
          name="start_date"
          value={salesFormData.start_date}
          onChange={handleChange}
          />
      </label>
    
      <label>
      Expiration
        <input
          type="text"
          name="expiration"
          value={salesFormData.expiration}
          onChange={handleChange}
          />
      </label>
    

      <button type="submit">Send</button>
    </form>
</div>



          </div>
  );
};

export default NewSalesPost;
