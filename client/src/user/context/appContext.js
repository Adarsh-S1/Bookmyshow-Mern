import React, { useReducer, useContext } from "react";
import axios from "axios";
import {
  TOGGLE_SIDEBAR,
  TOGGLE_SIGNIN,
  TOGGLE_EMAIL_LOGIN,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_OTP_VERIFY,
  TOGGLE_WAIT_OTP,
  TOGGLE_EMAIL_ERROR,
} from "./actions";
import reducer from "./reducers";
const initialState = {
  showSidebar: true,
  showSignin: true,
  emailLogin: false,
  otpVerify: false,
  waitOtp: false,
  emailError: false,
  user: {
    firstName: "Adarsh",
    lastName: "S",
    email: "adarsh@gmail.com",
    phone: 6282340803,
    dob: "24/07/2004",
    gender: "Male",
    locality: "Tarur",
    district: "Palakkad",
    state: "Kerala",
    pincode: 678544,
  },
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const axiosData = axios.create({
    baseURL: "http://localhost:5000",
  });
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const toggleSignin = () => {
    dispatch({ type: TOGGLE_SIGNIN });
  };
  const toggleOtpVerify = () => {
    dispatch({ type: TOGGLE_OTP_VERIFY });
  };
  const toggleEmailLogin = () => {
    dispatch({ type: TOGGLE_EMAIL_LOGIN });
  };
  const toggleWaitOtp = () => {
    dispatch({ type: TOGGLE_WAIT_OTP });
  };
  const toggleEmailError = () => {
    dispatch({ type: TOGGLE_EMAIL_ERROR });
  };

  const loginUser = async ({ email }) => {
    try {
      const { data } = await axiosData.post("/loginemail", { email });
      if (data == true) {
        dispatch({ type: LOGIN_USER_BEGIN });
      } else {
        dispatch({ type: TOGGLE_EMAIL_ERROR });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const verifyOtp = async (otp) => {
    try {
      const { data } = await axiosData.post("otpverify", { otp });
      if (data.status === "success") {
        console.log("success");
        localStorage.setItem("email", JSON.parse(data.email));
      } else {
        console.log("failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Appcontext.Provider
      value={{
        ...state,
        toggleSidebar,
        toggleSignin,
        toggleEmailLogin,
        toggleOtpVerify,
        loginUser,
        verifyOtp,
        toggleWaitOtp,
        toggleEmailError,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
const useAppContext = () => {
  return useContext(Appcontext);
};
export { AppProvider, initialState, useAppContext };
