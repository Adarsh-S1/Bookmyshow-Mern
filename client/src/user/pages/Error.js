import React from 'react'
import Button from "react-bootstrap/Button";
import "../assets/css/Error/Error.css";
const Error = () => {
  return (
    <div className="Errorparent">
      <img className="img-fluid" src="/user/Error/robot.png" alt="" />

      <div className="errordetails">
        <center>
          {" "}
          <h1 style={{ fontSize: "200px", fontFamily: "'Suwannaphum', serif" }}>
            4
            <img
              className="errorimg img-fluid"
              src="/user/Error/404.png"
              alt=""
            />
            4 !
          </h1>
        </center>
        <center>
          <div className="errordetails1">
            <h1>Uh Oh! Looks like you are lost in space !</h1>
            <br />
            <h2>
              The page you are looking for doesn't exist or has been deleted{" "}
            </h2>{" "}
            <br />
            <Button variant="outline-primary">Go Home</Button>
          </div>
        </center>
        <br />
        <br />
      </div>
    </div>
  );
  
}

export default Error