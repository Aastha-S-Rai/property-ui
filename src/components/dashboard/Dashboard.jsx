import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [properties, setUsers] = useState([]);

  // Add Property Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const defaultPropertyObj = {
    name: "Test",
    description: "",
    type: "residential",
    price: "",
    address: "",
    pincode: "",
  };

  const [propertyObj, setPropertyObj] = useState(defaultPropertyObj);

  const handleChange = (key, value) => {
    let obj = Object.assign({}, propertyObj);
    obj[key] = value;
    setPropertyObj(obj);
  };

  const fetchUserData = () => {
    fetch("http://127.0.0.1:5000/showproperties")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Aastha data => ", data);
        setUsers(data);
      });
  };

  const handlePropertySave = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(propertyObj),
    };

    fetch("http://127.0.0.1:5000/addproperty", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        handleClose();
        if (data.message === "User created successfully") {
          alert("Proprty added successfully!");
          fetchUserData();
        } else {
          alert("Failed to add property.");
        }
      });
  };

  const deletePropertyData = (p_id) => {
    fetch(`http://127.0.0.1:5000/deleteproperty/${p_id}`, {
      method: "DELETE",
    }).then(() => this.setState({ status: "Delete successful" }));
    console.log("Property Delete => Successful");
    alert("Proprty added successfully!");
  };

  // let deleteURL = `http://127.0.0.1:5000/deleteproperty/${propertyObj.p_id}`;

  const updatePropertyData = (property) => {};

  useEffect(() => {
    fetchUserData();
  }, []);

  console.log("SSR propertyObj => ", propertyObj);
  return (
    <div className="App p-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 p-4 text-white bg-dark">
        {/* <a className="navbar-brand" href="/">
          PROP !!
        </a> */}
        <button
          className="navbar-toggler"
          style={{ background: "#cd5c5c" }}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white" href="/dashboard">
                All properties
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  text-white"
                variant="primary"
                onClick={handleShow}
              >
                Add property
              </a>
            </li>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Add Property</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  <div className="form-group">
                    <label>Property Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        handleChange("name", e.target.value);
                      }}
                      value={propertyObj.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Property Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        handleChange("description", e.target.value);
                      }}
                      value={propertyObj.description}
                    />
                  </div>
                  <div className="form-group">
                    <label>Property Type</label>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Type:
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Residential
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Commercial
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="form-group">
                    <label>Property Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        handleChange("price", e.target.value);
                      }}
                      value={propertyObj.price}
                    />
                  </div>
                  <div className="form-group">
                    <label>Property Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        handleChange("address", e.target.value);
                      }}
                      value={propertyObj.address}
                    />
                  </div>
                  <div className="form-group">
                    <label>Property Pincode</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => {
                        handleChange("pincode", e.target.value);
                      }}
                      value={propertyObj.pincode}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handlePropertySave}
                  >
                    Submit
                  </button>
                </form>
              </Modal.Body>
            </Modal>

            <li className="nav-item ">
              <Link to="/">
                <span className="nav-link text-white">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <header className="App-header">
        {properties.length > 0 && (
          <div
            className="card_container"
            style={{
              display: "grid",
              background: "#cd853f",
              gridTemplateColumns: "20% 20% 20% 20% 20%",
            }}
          >
            {properties.map((property) => (
              <div className="card m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{property.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {property.address}
                  </h6>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {property.price}
                  </h6>
                  <p className="card-text">{property.description}</p>
                  <a
                    href="#"
                    className="card-link"
                    onClick={() => {
                      updatePropertyData(property);
                    }}
                  >
                    Update Property
                  </a>
                  <a
                    href="#"
                    className="card-link"
                    onClick={() => {
                      deletePropertyData(property.p_id);
                    }}
                  >
                    Delete Property
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default Dashboard;
