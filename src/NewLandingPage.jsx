import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./App.css";

const NewLandingPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/landing");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="container">
      <h1>PAYNOW ALERTS..</h1>
      <h2 style={{ color: "red", fontFamily: "sans-serif" }}>
      A PayNow user of a participating bank/NFI
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
