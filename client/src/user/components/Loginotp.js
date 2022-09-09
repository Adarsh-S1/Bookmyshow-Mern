import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import OtpInput from "react-otp-input";
import { useAppContext } from "../context/appContext";

const Loginotp = () => {
  const { otpVerify, toggleOtpVerify, verifyOtp, user,type } = useAppContext();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (otp) => setOtp(otp);
  const submitForm = (e) => {
    e.preventDefault();
    verifyOtp(otp);
  };

  useEffect(() => {
    if (user) {
      if (Object.values(user).every((o) => o != null) === false) {
        navigate(`/register/${btoa(JSON.stringify(user))}`);
      }
    }
  }, [user, navigate]);

  return (
    <div className="loginotp">
      <svg
        onClick={toggleOtpVerify}
        width="16"
        height="13"
        viewBox="0 0 100 100"
      >
        <title>Go back</title>
        <path
          d="M72.7,0c1.9,0.1,3.6,1.2,4.6,3.3s0.7,4.2-0.8,6.1c-0.2,0.2-0.4,0.4-0.6,0.6c-5.1,5.1-10.2,10.2-15.3,15.4
c-7,7-13.9,14-20.9,21c-2.2,2.2-2.2,5.2,0,7.4C51.8,65.9,63.8,77.9,75.9,90c1.3,1.3,2.1,2.7,2.1,4.5c-0.1,2.3-1.2,4.1-3.3,5
c-2.1,1-4.1,0.6-5.9-0.8c-0.3-0.2-0.5-0.5-0.8-0.7C53.2,83.2,38.5,68.5,23.8,53.8c-2.4-2.4-2.3-5.2,0-7.6c4-4,7.9-8,11.9-12
C44.5,25.4,53.3,16.6,62,7.8c2-2,4-4,6-6C69.2,0.7,70.6,0,72.7,0z"
        ></path>
      </svg>
      <h2>Verify your {type ? "Email address" : "Phone number"}</h2>
      <br />
      <center>
        <OtpInput
          shouldAutoFocus={true}
          value={otp}
          onChange={handleChange}
          numInputs={6}
          separator={<span>&nbsp;&nbsp;&nbsp;</span>}
        />

        {otpVerify && <p className="alert">Kindly check your mail for OTP</p>}
        <div className="signin">
          <Button onClick={submitForm}>Continue</Button>
        </div>
      </center>
    </div>
  );
};

export default Loginotp;
