import React from "react";
import { CSSTransition } from "react-transition-group";
import "../css/Login/Login.css";
import { useAppContext } from "../context/appContext";
import Loginemail from "./Loginemail";
import Loginmain from "./Loginmain";
import Loginotp from "./Loginotp";
const Login = () => {
  const { showSignin, emailLogin, otpVerify } = useAppContext();

  return (
    <div className="loginparent">
      <CSSTransition
        in={!showSignin}
        timeout={200}
        classNames="loginboxtransition"
        unmountOnExit
      >
        <div className="loginbox">
          {otpVerify ? (
            <Loginotp />
          ) : emailLogin ? (
            <Loginemail />
          ) : (
            <Loginmain />
          )}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Login;
