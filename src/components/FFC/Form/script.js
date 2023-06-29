import React, {useState} from 'react';
import axios from 'axios';

function Script() {

  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='ffc_form_body'>
      <h2>Old Script with SRC</h2>
    <form
        src="https://link.lightworkdigital.com/widget/form/cU7aGRQlf1PU7rGutp41"  
        >
        
      <div className="ffc_form_container">
        <div className='ffc_form_header'>
        </div>
        <div className="ffc_form_column">
          <label htmlFor="input1">First Name</label>
          <input type="text" id="input1" name="input1" value={formData.input1} onChange={handleChange} />
          <label htmlFor="input2">Last Name</label>
          <input type="text" id="input2" name="input2" value={formData.input2} onChange={handleChange}/>
          <label htmlFor="input3">Address</label>
          <input type="text" id="input3" name="input3" value={formData.input3} onChange={handleChange}/>
          <label htmlFor="input4">City</label>
          <input type="text" id="input4" name="input4" value={formData.input4} onChange={handleChange}/>
        </div>
        <div className="ffc_form_column">
          <label htmlFor="input5">State</label>
          <input type="text" id="input5" name="input5" value={formData.input5} onChange={handleChange}/>
          <label htmlFor="input6">Postal Code</label>
          <input type="text" id="input6" name="input6" value={formData.input6} onChange={handleChange}/>
          <label htmlFor="input7">Mobile Phone</label>
          <input type="text" id="input7" name="input7" value={formData.input7} onChange={handleChange}/>
          <label htmlFor="input8">Email</label>
          <input type="text" id="input8" name="input8" value={formData.input8} onChange={handleChange}/>
        </div>
      </div>
      <button type='submit'>Join</button>
    </form>
    </div>
  );
}

export default Script;