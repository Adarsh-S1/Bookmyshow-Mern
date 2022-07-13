import React, { useReducer, useContext } from "react";
import { TOGGLE_SIDEBAR } from "./actions";
import reducer from "./reducers";
const initialState = {
  showSidebar: true,
};

const Appcontext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({type:TOGGLE_SIDEBAR})
  }
  return (
    <Appcontext.Provider
      value={{
        ...state,
        toggleSidebar,
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
