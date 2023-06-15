import './index.css';
import React from 'react';
import { BiUser, BiLockAlt } from 'react-icons/bi';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Please enter');
  };

  return (
    <div className="container">
      <form className="main">
        <p className="main-text">System Admin Hotel</p>
        <div className="main-input-container">
          <input type="email" name="username" placeholder="Username" />
          <div className="icon">
            <BiUser />
          </div>
        </div>
        <div className="main-input-container">
          <input type="password" name="password" placeholder="Password" />
          <div className="icon">
            <BiLockAlt />
          </div>
        </div>
        <div className="button-container">
          <button className="login-button" type="submit" onClick={handleSubmit}>Login</button>
        </div>
        <p className="text">
          No account ? <a href="https://www.w3schools.com">Create one!</a>
        </p>
        <h6 className="copyright">@Created by Group 4</h6>
      </form>
    </div>

  );
}

export default Login;
