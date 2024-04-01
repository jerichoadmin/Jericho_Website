import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PopUpForm.css";
import Swal from "sweetalert2";

const PopUpForm = () => {
  const [popupFormData, setPopupFormData] = useState({
    notice: ""
  });
  const [isPopupOn, setIsPopupOn] = useState(false);

  useEffect(() => {
    axios
      .get("https://jericho-server-eb9k.onrender.com/popup")
      .then((res) => {
        setIsPopupOn(res.data[0].isVisible); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


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

  const togglePopup = () => {
    axios
      .post("https://jericho-server-eb9k.onrender.com/togglepopup")
      .then((response) => {
        setIsPopupOn((prevState) => !prevState);
        Swal.fire({
          title: "Popup Toggled",
          confirmButtonColor: "rgb(210, 161, 12)",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error toggling Popup",
          confirmButtonColor: "orange",
          customClass: "buttonalert",
          confirmButtonText: "Ok"
        });
      });
  };

  return (
    <div className="create_popup">
      <div className="toggle_popup">
        <h1>Toggle Popup</h1>
        <button className="toggle_popup" onClick={togglePopup}>
          {isPopupOn ? "Turn Pop Up Off" : "Turn Pop Up On"}
        </button>
      </div>

      <div className="create_popup_body">
        <h1>Change Content</h1>
        <form onSubmit={handleSubmit} className="popup_form">
          <label>
           Popup Content:
            <input
              type="text"
              name="notice"
              value={popupFormData.notice}
              onChange={handleChange}
              className="popup_input"
            />
          </label>
          <button type="submit">Change Popup Content</button>
        </form>
      </div>
    </div>
  );
};

export default PopUpForm;
