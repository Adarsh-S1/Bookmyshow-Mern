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
const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === TOGGLE_SIGNIN) {
    return {
      ...state,
      showSignin: !state.showSignin,
    };
  }
  if (action.type === TOGGLE_EMAIL_LOGIN) {
    return {
      ...state,
      emailLogin: !state.emailLogin,
    };
  }
  if (action.type === TOGGLE_OTP_VERIFY) {
    return {
      ...state,
      otpVerify: !state.otpVerify,
    };
  }
  if (action.type === TOGGLE_WAIT_OTP) {
    return {
      ...state,
      waitOtp: !state.true,
    };
  }
  if (action.type === TOGGLE_EMAIL_ERROR) {
    return {
      ...state,
      waitOtp: false,
      emailError: !state.emailError
    };
  }
  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      otpVerify: !state.otpVerify,
    };
  }
  if (action.type === LOGIN_USER_SUCCESS) {
     return {
       ...state,
       showSignin: !state.showSignin,
       user:action.payload.user
     };
   }
};

export default reducer;
