import React, { useContext } from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <>
      <div>
        <Navbar />
        <center>
          <h1 style={{ color: "red" }}>PAYNOW ALERTS..</h1>
          <p style={{ backgroundColor: "pink", color: "blue", height: "20px" }}>
          PayNow is an electronic fund transfer service that allows you to transfer SGD funds1 instantly to a payee
          </p>
        </center>

        <div style={{ textAlign: "center", marginTop: "20px", marginLeft: "900px" }}>
          <button onClick={handleLogout}>Logout</button>
        </div>
        <Profile />
        <About />
      </div>
      <div>
        {/* Other content */}
        <div className="container">
          <h2>Our Branches</h2>
          <div className="slides">
            <div className="slide">
              <img src="singapore.jpg" alt="singapore" />
            </div>
            <div className="slide">
              <img src=" DBS Bank/POSB.jpg" alt="DBS Bank/POSB" />
            </div>
            <div className="slide">
              <img src="Standard Chartered Bank.jpg" alt="Standard Chartered Bank" />
            </div>
          </div>
        </div>
        {/* Other content */}
      </div>
    </>
  );
};

export default LandingPage;
