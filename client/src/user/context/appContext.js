import React, { useReducer, useContext } from "react";
import axios from "axios";
import { TOGGLE_SIDEBAR } from "./actions";
import reducer from "./reducers";
const initialState = {
  showSidebar: true,
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const authFetch = axios.create({
    baseURL: "http://localhost:5000/",
  });
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  
  return (
    <Appcontext.Provider
      value={{
        ...state,
        toggleSidebar
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
