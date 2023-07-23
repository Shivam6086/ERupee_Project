import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    balance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the Express backend to register the user
      await axios.post('/api/register', formData);
      console.log('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    
    <div className="form-container">
    <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <h2>Registration Form</h2>
                <label htmlFor="name">Name</label> <br></br>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
        <div className="form-group">
          
        <label htmlFor="email">Email</label><br></br>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
            />
            
      </div>
      <div  className="form-group">
        <label htmlFor="password">Password</label><br></br>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div  className="form-group">
        <label htmlFor="balance">Balance</label><br></br>
        <input
          type="number"
          id="balance"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
        />
        </div>
        <div className="form-group" >
        <button type="submit">Register</button>
        </div>
        
      </form>
      </div>
    
  );
};

export default RegistrationForm;
