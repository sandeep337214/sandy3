import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestPasswordReset = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user) => user.email === email);
    if (user) {
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      user.resetOtp = otp;
      localStorage.setItem("users", JSON.stringify(users));
      alert(`Your OTP is: ${otp}`);
      navigate("/reset-password", { state: { email } });
    } else {
      alert("Email not found");
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Request OTP</button>
      </form>
    </div>
  );
};

export default RequestPasswordReset;
