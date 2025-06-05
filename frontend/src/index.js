import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import HomePage from "./landing_page/home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <>
      <HomePage />
      <h1>Welcome to the Home Page</h1>
    </>
  </React.StrictMode>
);
