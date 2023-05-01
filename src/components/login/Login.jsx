import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="flex-container">
          <h1 className="login-heading">
            Login
          </h1>
          <form action="" className="form-container">
            <label for="username" className="heading-label">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="input-box"
            />
            <label for="password" className="heading-label">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              className="input-box"
            />
            <button className="button-login mt-2">Login</button>
            <div className='mt-1'>Don't already have an account?  <Link to="/signup">Signup</Link></div>
          </form>
        </div>
      );
}

