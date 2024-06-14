import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(""); // State to store generated OTP
  const [lastSentOtp, setLastSentOtp] = useState(""); // State to store last sent OTP
  const [isOtpGenerated, setIsOtpGenerated] = useState(false); // Track if OTP is generated
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  // Function to generate OTP
  const generateOtp = () => {
    const otpValue = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpValue); // Set the generated OTP in state
    setIsOtpGenerated(true); // Set flag to indicate OTP is generated
    return otpValue; // Return generated OTP
  };

  // Handle OTP input change
  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  // Handle New Password input change
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // Handle Confirm Password input change
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check if entered OTP matches generated OTP
    if (otp === generatedOtp) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((user) => user.email === email);

      if (user) {
        user.password = newPassword;
        delete user.resetOtp;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password reset successful");
        navigate("/signin");
      } else {
        alert("User not found");
      }
    } else {
      alert("Invalid OTP");
    }
  };

  // Handle resend OTP button click
  const handleResendOtp = () => {
    const newOtp = generateOtp(); // Regenerate OTP
    setLastSentOtp(newOtp); // Set last sent OTP
    alert(`Resent OTP: ${newOtp}`); // Alert the newly generated OTP
  };

  useEffect(() => {
    if (!isOtpGenerated) {
      const newOtp = generateOtp(); // Generate OTP initially
      setLastSentOtp(newOtp); // Set last sent OTP initially
    }
  }, []); // Empty dependency array ensures this runs once, similar to componentDidMount

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>OTP:</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              required
              placeholder="Enter OTP"
              style={{ marginRight: "10px" }}
            />
            <button type="button" onClick={handleResendOtp} style={{ marginLeft: "10px" }}>
              Resend OTP
            </button>
          </div>
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
