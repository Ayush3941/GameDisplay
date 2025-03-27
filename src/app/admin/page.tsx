"use client"
import React, { useState } from 'react';

import './page.css';  

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (email === 'admin@gmail.com' && password === 'admin') {
      window.location.href = '/admin/Dashboard'; 
    } else {
      alert('Invalid credentials'); 
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="heading">Welcome Admin!</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email" className="label-text">Email Address</label>
            <input
              type="email"
              className="input-field"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="label-text">Password</label>
            <input
              type="password"
              className="input-field"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <button
              type="submit"
              className="submit-btn"
            >
              Log In
            </button>
          </div>
        </form>
        <div className="footer-links">
          <p className="footer-text">Don't have an account? <a href="#" className="footer-link">Sign Up</a></p>
          <p className="footer-text"><a href="#" className="footer-link">Forgot Password?</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
