import React from 'react';
import './Ffc_Form.css';

function Ffc_Form() {
  return (
    <div className='ffc_form_body'>
      <h2>Frequent Flower Club</h2>
    <form action="https://link.lightworkdigital.com/widget/form/cU7aGRQlf1PU7rGutp41"  method='POST'>
      <div className="ffc_form_container">
        <div className='ffc_form_header'>
        </div>
        <div className="ffc_form_column">
          <label htmlFor="input1">First Name</label>
          <input type="text" id="input1" name="input1" />
          <label htmlFor="input2">Last Name</label>
          <input type="text" id="input2" name="input2" />
          <label htmlFor="input3">Address</label>
          <input type="text" id="input3" name="input3" />
          <label htmlFor="input4">City</label>
          <input type="text" id="input4" name="input4" />
        </div>
        <div className="ffc_form_column">
          <label htmlFor="input5">State</label>
          <input type="text" id="input5" name="input5" />
          <label htmlFor="input6">Postal Code</label>
          <input type="text" id="input6" name="input6" />
          <label htmlFor="input7">Mobile Phone</label>
          <input type="text" id="input7" name="input7" />
          <label htmlFor="input8">Email</label>
          <input type="text" id="input8" name="input8" />
        </div>
      </div>
      <button type='submit'>Join</button>
    </form>
    </div>
  );
}

export default Ffc_Form;
