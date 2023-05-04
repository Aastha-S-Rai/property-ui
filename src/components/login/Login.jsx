import React, { useState } from 'react'
import "./Login.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

  const defaultUserLogin = {
    u_name : "",
    u_password : ""
  };

  const [userLogin, setUserLogin] = useState(defaultUserLogin)

  const handleOnChange = (key, value) => {
    const obj = Object.assign({}, userLogin);
    obj[key] = value;
    setUserLogin(obj);
  };
  const navigate = useNavigate();
  const saveUserLoginData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin),
    };
    fetch("http://127.0.0.1:5000/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA => ", data)
        if (data.success === true) {
          console.log("USER ID --->", data)

          alert("User logged in successfully!");
          // navigate("/dashboard");
        } else {
          alert("Login Failed.");
        }
      });
  };

  return (
    <div className="flex-container">
      <h1 className="login-heading">
        Login
      </h1>
      <form action='' onSubmit={saveUserLoginData} className="form-container">
        <label className="heading-label">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="input-box"
          onChange={(e)=>{
            handleOnChange("u_name", e.target.value)
          }}
          value={userLogin.u_name}
        />
        <label className="heading-label">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          className="input-box"
          onChange={(e)=>{
            handleOnChange("u_password", e.target.value)
          }}
          value={userLogin.u_password}
        />
        <button className="button-login mt-2">Login</button>
        <div className='mt-1'>Don't already have an account?  <Link to="/signup">Signup</Link></div>
      </form>
    </div>
  );
}
export default Login;