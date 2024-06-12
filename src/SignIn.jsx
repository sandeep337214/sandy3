import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import './App.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, login } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/landing");
    }
  }, [isAuthenticated, navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      login(user);
      alert("Sign-in successful");
      navigate("/landing");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2>Sign In</h2>
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
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
