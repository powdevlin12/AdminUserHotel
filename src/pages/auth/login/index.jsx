import './index.css';
import React, { useState } from 'react';
import { BiUser, BiLockAlt } from 'react-icons/bi';
import { useAuthContext } from '../../../contexts/AuthProvider';

function Login() {
  const { isLoading, login: loginFromContext } = useAuthContext();

  const [user, setUser] = useState({
    username: 'xxadmin22@gmail.com',
    password: 'Def@u1t',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    loginFromContext(user);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form className="main">
        <p className="main-text">System Admin Hotel</p>
        <div className="main-input-container">
          <input type="email" name="username" placeholder="Username" value={user.username} onChange={handleChangeInput} />
          <div className="icon">
            <BiUser />
          </div>
        </div>
        <div className="main-input-container">
          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChangeInput} />
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
