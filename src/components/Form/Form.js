import React, { useState } from 'react';
import "./form.css";


const ContactForm = () => {
  const api = "https://ehdbk67h5i.execute-api.us-east-1.amazonaws.com/V1";
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    name: '',
    phoneNumber: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    phoneNumber: '',
    title: '',
    name:'',
    message:''
  });

  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Basic phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateMessage = (message)=>{
    return message.trim().length>0;
  }
  const validateTitle = (message)=>{
    return message.trim().length>0;
  }
  const validateName = (message)=>{
    return message.trim().length>0;
  }

  let clearFormData = ()=>{
    setFormData({
      email: '',
      phoneNumber: '',
      title: '',
      name:'',
      message:''
    })};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Perform validation on specific fields
    if (name === 'email') {
      setFormErrors({ ...formErrors, email: validateEmail(value) ? '' : 'Invalid email address' });
    } else if (name === 'phoneNumber') {
      setFormErrors({
        ...formErrors,
        phoneNumber: validatePhoneNumber(value) ? '' : 'Invalid phone number',
      });
    }
    else if(name === 'title'){
      setFormErrors({
        ...formErrors,
        title: validateTitle(value) ? '' : 'Invalid Title',
      });
    }
    else if(name === 'name'){
      setFormErrors({
        ...formErrors,
        name: validateName(value) ? '' : 'Invalid Name',
      });
    }
    else if(name === 'message'){
      setFormErrors({
        ...formErrors,
        message: validateMessage(value) ? '' : 'Invalid Message ',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form-level validation
    const isFormValid =
      validateEmail(formData.email) && validatePhoneNumber(formData.phoneNumber) && validateName(formData.name) && validateMessage(formData.message) && validateTitle(formData.title);

    if (isFormValid) {
      // Form is valid, proceed with form submission or other actions
      console.log('Form submitted:', formData);

      try {
        // Make your API call using data
        const response = await fetch(
          api,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
  
        if (response.ok) {
          // Handle successful API response, e.g., show success message
          console.log("API call successful");
          clearFormData();
        } else {
          // Handle API error, e.g., show error message
          console.error("API call failed");
        }
      } catch (error) {
        console.error("API call error:", error);
      }


    } else {
      console.log('Form validation failed');
    }
  };

  return (
    
    <form onSubmit={handleSubmit} style={formStyles}>
      <h3>Please leave me a message and I will get back as soon as possible.</h3>
      <h3>Thank you!</h3><br></br>
      <div style={inputContainer}>
        <label htmlFor="email" style={labelStyle}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
        {formErrors.email && <p style={errorStyle}>{formErrors.email}</p>}
      </div>

      <div style={inputContainer}>
        <label htmlFor="title" style={labelStyle}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
        {formErrors.title && <p style={errorStyle}>{formErrors.title}</p>}
      </div>

      <div style={inputContainer}>
        <label htmlFor="name" style={labelStyle}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
        {formErrors.name && <p style={errorStyle}>{formErrors.name}</p>}
      </div>

      <div style={inputContainer}>
        <label htmlFor="phoneNumber" style={labelStyle}>
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          style={inputStyle}
        />
        {formErrors.phoneNumber && <p style={errorStyle}>{formErrors.phoneNumber}</p>}
      </div>

      <div style={inputContainer}>
        <label htmlFor="message" style={labelStyle}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          style={{ ...inputStyle, height: '100px' }}
        />
        {formErrors.message && <p style={errorStyle}>{formErrors.message}</p>}
      </div>

      <button type="submit" style={submitButtonStyle}>
        Submit
      </button>
    </form>
  );
};

const formStyles = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
};

const inputContainer = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontSize: '18px',
  color: 'white'
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
};

const errorStyle = {
  color: 'red',
  margin: '5px 0 0',
};

const submitButtonStyle = {
  background: '#4CAF50',
  color: 'white',
  padding: '10px',
  border: 'none',
  cursor: 'pointer',
};

export default ContactForm;
