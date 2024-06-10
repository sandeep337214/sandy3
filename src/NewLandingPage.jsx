import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const NewLandingPage = () => {
  return (
    <div className="container">
      <h1>Welcome to Store</h1>
      <h2 style={{ color: "red", fontFamily: "sans-serif" }}>
        That purpose, is defined by the Company at its growth stage for you.
      </h2>
     
      <p>Please select an option:</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/signin">
          <button style={{ marginRight: "10px" }}>Sign In</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default NewLandingPage;
