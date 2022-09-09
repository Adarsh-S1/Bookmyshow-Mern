import React, { useReducer, useContext } from "react";
import reducer from "./reducers";
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

let user = localStorage.getItem("user");
const initialState = {
  showSidebar: true,
  showSignin: true,
  emailLogin: false,
  otpVerify: false,
  waitOtp: false,
  emailError: false,
  loginType: true,
  user: user ? JSON.parse(user) : null,
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const axiosData = axios.create({
    baseURL: "http://localhost:5000",
  });

  axiosData.interceptors.request.use(
    (config) => {
      if (state.user != null) {
        config.headers.common["Authorization"] = `Bearer ${state.user.token}`;
      }
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  axiosData.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  const saveUser = (user) => {
    localStorage.setItem("user", user);
  };

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

  const loginUser = async ({ email, phone }) => {
    try {
      if (email) {
        state.type = true;
        const { data } = await axiosData.post("/loginemail", { email });
        if (data == true) {
          dispatch({ type: LOGIN_USER_BEGIN });
        } else {
          dispatch({ type: TOGGLE_EMAIL_ERROR });
        }
      }
      else if (phone) {
        state.type = false;
        const { data } = await axiosData.post("/loginphone", { phone });
        console.log(data);
        if (data == true) {
          dispatch({ type: LOGIN_USER_BEGIN });
        } else {
          dispatch({ type: TOGGLE_EMAIL_ERROR });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const verifyOtp = async (otp) => {
    try {
      const { data } = await axiosData.post("otpverify", { otp });
      if (!data.error) {
        saveUser(JSON.stringify(data.res));
        dispatch({ type: LOGIN_USER_SUCCESS, payload: { user: data.res } });
      } else {
        console.log("failed");
      }
    } catch (err) {
      console.log(err);
    }
  };


  const loginGoogle = () => {
    window.open("http://localhost:5000/google", "_self");
  };

  const registerUser = async (userData) => {
   const { data } = await axiosData.post("register",  userData );
  }
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
        loginGoogle,
        saveUser,
        registerUser,
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
