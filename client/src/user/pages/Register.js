import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "../css/Register/Register.css";
import { useAppContext } from "../context/appContext";

const Register = () => {
  const navigate = useNavigate();

  const { saveUser, user, registerUser } = useAppContext();

  let data = window.location.pathname.substring(10);
  let userDetails = JSON.parse(window.atob(data));
  useEffect(() => {
    if (JSON.parse(window.atob(data)).firstName != null)
      saveUser(window.atob(data));
  }, [user, navigate]);

  const initialState = {
    firstName: null,
    lastName: null,
    email: userDetails.email,
    phone: userDetails.phone,
    dob: null,
    gender: null,
    locality: null,
    district: null,
    state: null,
    pincode: null,
  };
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(values)
  };
  return (
    <div className="registerParent">
      <h3>Let's create your account !</h3>
      <h6>Enter your details below to finish setting up your account</h6>
      <br />

      <div className="name">
        {userDetails.firstName ? (
          <>
            <input
              autoFocus
              type="text"
              placeholder=""
              name="firstName"
              onChange={handleChange}
              required
            />
            <span className="floating-label">First Name</span>
          </>
        ) : (
          ""
        )}
        {userDetails.lastName ? (
          <>
            <input
              className="input1"
              type="text"
              placeholder=""
              name="lastName"
              onChange={handleChange}
              required
            />
            <span className="floating-label1">Last Name</span>
          </>
        ) : (
          ""
        )}
      </div>

      <div className="otherdetails">
        {userDetails.email ? (
          <>
            <input
              type="number"
              placeholder=""
              name="phone"
              onChange={handleChange}
              required
            />
            <span className="floating-label">Phone Number</span>
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder=""
              name="email"
              onChange={handleChange}
              required
            />
            <span className="floating-label">Email</span>
          </>
        )}
        <select
          name="gender"
          className="input1"
          onChange={handleChange}
          required
        >
          <option value="null">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <span className="floating-label1">Gender</span>
      </div>
      <div className="address">
        <div className="address1">
          <input
            className="input3"
            type="text"
            placeholder=""
            name="locality"
            onChange={handleChange}
            required
          />
          <span className="floating-label">Locality</span>
          <input
            className="input1"
            type="text"
            placeholder=""
            name="district"
            onChange={handleChange}
            required
          />
          <span className="floating-label1">District</span>
        </div>
        <div className="address1">
          <input
            className="input4"
            type="text"
            placeholder=""
            name="state"
            onChange={handleChange}
            required
          />
          <span className="floating-label">State</span>
          <input
            className="input1"
            type="number"
            placeholder=""
            name="pincode"
            onChange={handleChange}
            required
          />
          <span className="floating-label1">Pincode</span>
        </div>
        <input className="dob" type="date" name="dob" onChange={handleChange} />
        <span className="dob floating-label">Date of Birth</span>
      </div>
      <center>
        <div className="signin">
          {" "}
          <Button onClick={onSubmit}>Login</Button>
        </div>
      </center>
    </div>
  );
};

export default Register;
