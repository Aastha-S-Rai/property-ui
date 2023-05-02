import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function Signup() {
  return (
    <div className="flex-container">
      <h1 className="signup-heading">Signup</h1>
      <form action="" className="form-container">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <label className="heading-label">Firstname</label>
            <input type="text" name="fname" id="fname" className="input-box" />
          </div>
          <div className="d-flex flex-column">
            <label className="heading-label">Lastname</label>
            <input
              type="text"
              name="lname"
              id="username"
              className="input-box"
            />
          </div>
        </div>

        <div className="d-flex flex-column">
          <label className="heading-label">Email Id</label>
          <input
            type="text"
            name="email"
            id="email"
            className="input-box w-100"
          />
        </div>

        <div className="d-flex flex-column">
          <label for="password" className="heading-label">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="input-box w-100"
          />
        </div>

        <div className="d-flex flex-column">
          <label for="address" className="heading-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="input-box w-100"
          />
        </div>

        <label for="Phone" className="heading-label">
          Phone no.
        </label>
        <input type="number" name="Phone" id="Phone" className="input-box" />

        <label className="heading-label">City</label>
        <input type="text" name="city" id="city" className="input-box" />

        <label className="heading-label">State</label>
        <input type="text" name="state" id="state" className="input-box" />

        <label className="heading-label">Pincode</label>
        <input
          type="number"
          name="pincode"
          id="pincode"
          className="input-box"
        />

        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <button className="button-signup mt-2">SignUp</button>
        <div className="mt-1">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}
