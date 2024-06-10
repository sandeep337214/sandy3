// LandingPage.js
import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout logic here (clear session, token, etc.)
    // For now, let's just redirect to the sign-in page
    navigate("/signin");
  };

  return (
    <>
      <div>
        <Navbar />
        <center>
          <h1 style={{ color: "red" }}>Welcome to the Cars showroom..</h1>
          <p style={{ backgroundColor: "pink", color: "blue", height: "20px" }}>
            Latest models available here
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
          <h2>Our Vehicles</h2>
          <div className="slides">
            <div className="slide">
              <img src="car1.jpg" alt="Car 1" />
            </div>
            <div className="slide">
              <img src="car2.jpg" alt="Car 2" />
            </div>
            <div className="slide">
              <img src="car3.jpg" alt="Car 3" />
            </div>
          </div>
        </div>
        {/* Other content */}
      </div>
    </>
  );
};

export default LandingPage;
