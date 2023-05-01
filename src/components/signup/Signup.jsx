import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex-container">
      <h1 className="signup-heading">Signup</h1>
      <form action="" className="form-container">
        <label for="username" className="heading-label">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="input-box"
        />
        <label for="password" className="heading-label">
          Password
        </label>
        <input
          type="text"
          name="password"
          id="password"
          className="input-box"
        />
        <label for="Phone" className="heading-label">
          Phone no.
        </label>
        <input type="number" name="Phone" id="Phone" className="input-box" />
        <label for="address" className="heading-label">
          Address
        </label>
        <input type="text" name="address" id="address" className="input-box" />
        <label for="age1" className="radio-label">
          <input
            type="radio"
            id="age1"
            name="userType"
            value="buyer"
            className="radio-button"
          />
          Buyer
        </label>

        <label for="age2" className="radio-label">
          <input
            type="radio"
            id="age2"
            name="userType"
            value="seller"
            className="radio-button"
          />
          Seller
        </label>
        <button className="button-signup mt-2">SignUp</button>
        <div className='mt-1'>Already have an account?  <Link to="/">Login</Link></div>
      </form>
    </div>
  );
}
