import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const defaultUserLogin = {
    u_name: "",
    u_password: "",
  };

  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(defaultUserLogin);

  const handleOnChange = (key, value) => {
    const obj = Object.assign({}, userLogin);
    obj[key] = value;
    setUserLogin(obj);
  };

  const saveUserLoginData = (userObj) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    };
    fetch("http://127.0.0.1:5000/login", requestOptions)
      .then((response) => response.json())
      .then((responseData) => {
        console.log("responseData => ", responseData);
        if (responseData?.success) {
          navigate("/dashboard");
        } else {
          alert(responseData?.message);
        }
      });
  };

  return (
    <div className="flex-container">
      <h1 className="login-heading mouse-pointer">Login</h1>

      <div className="form-container">
        <label className="heading-label">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="input-box"
          onChange={(e) => {
            handleOnChange("u_name", e.target.value);
          }}
          value={userLogin.u_name}
        />

        <label className="heading-label">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          className="input-box"
          onChange={(e) => {
            handleOnChange("u_password", e.target.value);
          }}
          value={userLogin.u_password}
        />

        <button
          className="button-login mt-2"
          onClick={() => saveUserLoginData(userLogin)}
        >
          Login
        </button>
        <div className="mt-1">
          Don't already have an account? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
