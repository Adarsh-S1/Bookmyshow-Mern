import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useAppContext } from "../context/appContext";
const Loginmain = () => {
  const { toggleSignin, toggleEmailLogin, otpVerify } = useAppContext();
  return (
    <>
      <svg onClick={toggleSignin} width="15" height="15">
        <title>Close</title>
        <g fill="#666">
          <path d="M13.125 0l-7.5 7.5 7.5 7.5 1.429-1.428L8.482 7.5l6.072-6.071z"></path>
          <path d="M1.429 0l7.5 7.5-7.5 7.5-1.43-1.428L6.072 7.5 0 1.43z"></path>
        </g>
      </svg>
      <center>
        <h6 className="getstarted">Get Started</h6>
        <div className="google">
          <img
            src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg"
            alt=""
            srcSet=""
          />
          <h6>Continue with Google</h6>
        </div>
        <div className="google">
          <img
            className="facebook"
            src="https://in.bmscdn.com/webin/common/icons/facebook.svg"
            alt=""
            srcSet=""
          />
          <h6>Continue with Facebook</h6>
        </div>
        <div onClick={toggleEmailLogin} className="google">
          <img
            className="email"
            src="https://in.bmscdn.com/webin/common/icons/email.svg"
            alt=""
            srcSet=""
          />

          <h6>Continue with Email</h6>
        </div>
        <h6 className="or">OR</h6>

        <div className="parentmobile">
          <img
            src="https://in.bmscdn.com/webin/common/icons/indianflag.svg"
            alt=""
          />{" "}
          <span className="countryCode">+91</span>
          <input
            className="mobile"
            placeholder="Continue with mobile number"
            type="text"
            maxLength="10"
            required
          />
        </div>
        <div className="signin">
          <Button>Continue</Button>
        </div>
        <p>
          I agree to the <u>Terms & Conditions</u> & <u>Privacy Policy</u>
        </p>
      </center>
    </>
  );
};

export default Loginmain;
