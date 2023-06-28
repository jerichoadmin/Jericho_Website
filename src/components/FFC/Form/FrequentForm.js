import React, {useRef} from 'react';
import axios from 'axios';

const FrequentForm = () => {

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your desired behavior upon form submission here
    // For example, you can send the form data using fetch or axios
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const formSubmitURL = 'https://link.lightworkdigital.com/widget/form/cU7aGRQlf1PU7rGutp41';

      try {
        const response = await axios.post(formSubmitURL, formData);

        // Handle the response as needed
        if (response.status === 200) {
          console.log('Form submitted successfully');
        } else {
          console.log('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };



  return (
    <div className='seminar_form'>

<form onSubmit={handleSubmit} ref={formRef}>

<input type="text" placeholder="First Name" name="first_name" class="form-control" id="first_name" data-q="first_name" data-required="true"/>

<input type="text" placeholder="Last Name" name="last_name" class="form-control" id="last_name" data-q="last_name" data-required="true"/>

<input type="text" placeholder="Address" name="address" class="form-control" id="address" data-q="address" data-required="true"></input>

<input type="text" placeholder="City" name="city" class="form-control" id="city" data-q="city" data-required="true"></input>

<input type="text" placeholder="State" name="state" class="form-control" id="state" data-q="state" data-required="true"></input>

<input type="text" placeholder="Postal Code" name="postal_code" class="form-control" id="postal_code" data-q="postal_code" data-required="true"></input>

<input type="tel" name="phone" placeholder="Mobile Phone" autocomplete="off" class="countryphone" id="phone" data-q="phone" data-required="true" data-intl-tel-input-id="0"></input>

<input placeholder="Email" name="email" type="email" class="form-control" data-q="email" data-required="true"></input>


      <button type="submit">Sign Up</button>
    
      </form>
    </div>
  );
};

export default FrequentForm;
