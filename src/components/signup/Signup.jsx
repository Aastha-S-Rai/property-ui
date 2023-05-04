import React, { useState } from "react";
import "./Signup.css";
import { Link, Route, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function Signup() {
  const defaultUserObject = {
    fname: "",
    lname: "",
    email_id: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    user_type: "agent",
  };

  const [newUser, setNewUser] = useState(defaultUserObject);

  const navigate = useNavigate();

  const handleOnChange = (key, value) => {
    const obj = Object.assign({}, newUser);
    obj[key] = value;
    setNewUser(obj);
  };

  const saveUserData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    };

    fetch("http://127.0.0.1:5000/addusers", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA => ", data);
        if (data.status === "User created successfully") {
          alert("User added successfully!");
          // return navigate("/dashboard");
        } else {
          alert("Failed to add User.");
        }
      });
  };

  return (
    <div className="flex-container">
      <h1 className="signup-heading">Signup</h1>
      <form action="" className="form-container">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <label className="heading-label">Firstname</label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="input-box"
              onChange={(e) => {
                handleOnChange("fname", e.target.value);
              }}
              value={newUser?.fname}
            />
          </div>
          <div className="d-flex flex-column">
            <label className="heading-label">Lastname</label>
            <input
              type="text"
              name="lname"
              id="username"
              className="input-box"
              onChange={(e) => {
                handleOnChange("lname", e.target.value);
              }}
              value={newUser?.lname}
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
            onChange={(e) => {
              handleOnChange("email_id", e.target.value);
            }}
            value={newUser?.email_id}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="heading-label">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            className="input-box w-100"
            onChange={(e) => {
              handleOnChange("password", e.target.value);
            }}
            value={newUser?.password}
          />
        </div>

        <div className="d-flex flex-column">
          <label className="heading-label">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="input-box w-100"
            onChange={(e) => {
              handleOnChange("address", e.target.value);
            }}
            value={newUser?.address}
          />
        </div>

        <div className="d-flex">
          <div className="d-flex flex-column">
            <label className="heading-label">Phone no.</label>
            <input
              type="number"
              name="Phone"
              id="Phone"
              className="input-box"
              onChange={(e) => {
                handleOnChange("phone", e.target.value);
              }}
              value={newUser?.phone}
            />
          </div>
          <div className="d-flex flex-column">
            <label className="heading-label">City</label>
            <input
              type="text"
              name="city"
              id="city"
              className="input-box"
              onChange={(e) => {
                handleOnChange("city", e.target.value);
              }}
              value={newUser?.city}
            />
          </div>
        </div>

        <div className="d-flex">
          <div className="d-flex flex-column">
            <label className="heading-label">State</label>
            <input
              type="text"
              name="state"
              id="state"
              className="input-box"
              onChange={(e) => {
                handleOnChange("state", e.target.value);
              }}
              value={newUser?.state}
            />
          </div>
          <div className="d-flex flex-column">
            <label className="heading-label">Pincode</label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              className="input-box"
              onChange={(e) => {
                handleOnChange("pincode", e.target.value);
              }}
              value={newUser?.pincode}
            />
          </div>
        </div>

        <Form.Select
          className="mt-3 mb-3 border border-secondary"
          aria-label="Default select example"
          onChange={(e) => {
            handleOnChange("user_type", e.target.value);
          }}
          value={newUser?.user_type}
        >
          <option value="agent">Agent</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </Form.Select>

        <button className="button-signup mt-2" onClick={saveUserData}>
          SignUp
        </button>
        <div className="mt-1">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}
