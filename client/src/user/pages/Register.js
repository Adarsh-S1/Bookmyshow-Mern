import React from "react";
import Button from "react-bootstrap/esm/Button";
import "../css/Register/Register.css";
const Register = () => {
  return (
    <div className="registerParent">
      <h3>Let's create your account !</h3>
      <h6>Enter your details below to finish setting up your account</h6>
      <br />
      <div className="name">
        <input autoFocus type="text" placeholder="" required />
        <span class="floating-label">First Name</span>
        <input className="input1" type="text" placeholder="" required />
        <span class="floating-label1">Last Name</span>
      </div>
      <div className="otherdetails">
        <input type="number" placeholder="" required />
        <span class="floating-label">Phone Number</span>
        <select name="gender" className="input1" required>
          <option selected="true" disabled="disabled">
            Select
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <span class="floating-label1">Gender</span>
      </div>
      <div className="address">
        <div className="address1">
          <input className="input3" type="text" placeholder="" required />
          <span class="floating-label">Locality</span>
          <input className="input1" type="text" placeholder="" required />
          <span class="floating-label1">District</span>
        </div>
        <div className="address1">
          <input className="input4" type="text" placeholder="" required />
          <span class="floating-label">State</span>
          <input className="input1" type="number" placeholder="" required />
          <span class="floating-label1">Pincode</span>
        </div>
        <input
          className="dob"
          type="date"
        />
        <span class="dob floating-label">Date of Birth</span>
      </div>
      <center>
        <div className="signin">
          {" "}
          <Button>Login</Button>
        </div>
      </center>
    </div>
  );
};

export default Register;
