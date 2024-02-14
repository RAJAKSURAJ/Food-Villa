// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../styles/tailwind.css";
import { Provider } from "react-redux";
import appStore from "./Component/utils/appStore";
//import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
