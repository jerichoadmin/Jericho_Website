import React, { useState } from "react";
import axios from "axios";
import './PopUpForm.css';
import Swal from "sweetalert2";

const PopUpForm = () => {
  const [popupFormData, setPopupFormData] = useState({
    notice: ``
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
    .post("https://jericho-server-eb9k.onrender.com/addpopup", popupFormData)
      .then((response) => {
        Swal.fire({
          title: "Popup Added",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error adding Popup",
          confirmButtonColor: "orange",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        });
      });
  };

  const handleChange = (event) => {
    setPopupFormData({
      ...popupFormData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="create_popup">
      <div className="create_popup_body">
        <form onSubmit={handleSubmit} className="popup_form">
          <label>
            Notice
            <input
              type="text"
              name="notice"
              value={popupFormData.notice}
              onChange={handleChange}
            />
          </label>
        

          <button type="submit">Add Popup</button>
        </form>
      </div>
    </div>
  );
};

export default PopUpForm;
