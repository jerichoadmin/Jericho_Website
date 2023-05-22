import React from 'react';
import './SeminarForm.css'

function SeminarForm() {
  return (
    <div className='seminar_form_body'>
      <h2>Workshop Sign Up</h2>
    <form>
      <div className="seminar_form_container">
        <div className='seminar_form_header'>
        </div>
        <div className="seminar_form_column">
          <label htmlFor="input1">First Name</label>
          <input type="text" id="input1" name="input1" />
          <label htmlFor="input4">Mobile Phone</label>
          <input type="text" id="input4" name="input4" />
        </div>
        <div className="seminar_form_column">
          <label htmlFor="input5">Last Name</label>
          <input type="text" id="input5" name="input5" />
          <label htmlFor="input8">Email</label>
          <input type="text" id="input8" name="input8" />
        </div>
      </div>
      <button>Join</button>
    </form>
    </div>
  );
}


export default SeminarForm;
