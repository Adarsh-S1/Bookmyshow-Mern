import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './user/context/appContext';
import "bootstrap/dist/css/bootstrap.min.css";
import AlertTemplate from "react-alert-template-basic";
import {Provider,positions,transitions } from "react-alert";
const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
  offset: "15px",
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};
root.render(
  <React.StrictMode>
    <AppProvider >
      <Provider template={AlertTemplate} {...options} >
      <App />
    </Provider>
      </AppProvider>
  </React.StrictMode>
);

