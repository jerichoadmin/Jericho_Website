import React from 'react';

const SeminarForm = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    alert('Thanks your all signed up!')
  };

  return (
    <div className='seminar_form'>

<form
        action="https://link.lightworkdigital.com/widget/form/3qaO8XFwZsIzsspf04OE"
        method="POST"
        onSubmit={handleSubmit}
      >
      <input type="text" placeholder="First Name" name="first_name" class="form-control" id="first_name" data-q="first_name" data-required="true" />

      <input type="text" placeholder="Last Name" name="last_name" class="form-control" id="last_name" data-q="last_name" data-required="true" />

      <input placeholder="Email" name="email" type="email" class="form-control" data-q="email" data-required="true" />

      <input type="tel" name="phone" placeholder="Cell Phone" autocomplete="off" class="form-control" id="phone" data-q="phone" data-required="true" />
      <button type="submit">Sign Up</button>
    
      </form>
    </div>
  );
};

export default SeminarForm;
