import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailValidator from "email-validator";

const ValidateEmail = () => {
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const pendingUser = JSON.parse(localStorage.getItem("pendingUser"));
    if (pendingUser && emailValidator.validate(pendingUser.email)) {
      setEmail(pendingUser.email);
      generateAndSendOtp();
    } else {
      navigate("/register");
    }
  }, [navigate]);

  const generateAndSendOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    alert(`Your OTP is: ${otp}`);
    setGeneratedOtp(otp);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      const pendingUser = JSON.parse(localStorage.getItem("pendingUser"));
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push(pendingUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.removeItem("pendingUser");
      alert("Registration successful");
      navigate("/signin");
    } else {
      alert("Incorrect OTP, please try again");
    }
  };

  const handleResendOtp = () => {
    generateAndSendOtp();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Validate Email</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} disabled />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter OTP"
            required
            style={{ marginRight: "10px" }}
          />
          <button type="button" onClick={handleResendOtp} style={{ marginLeft: "10px" }}>
            Resend OTP
          </button>
        </div>
        <button type="submit">Validate</button>
      </form>
    </div>
  );
};

export default ValidateEmail;
