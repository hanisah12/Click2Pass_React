import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/login-page.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate credentials and make an API call
    // For now, we'll just navigate to the landing page
    navigate("/landing-page");
  };

  return (
    <div>
      <NavBar />
      <div className="form-container">
        <div className="login-card">
          <h2 className="form-title">Login</h2>
          <p className="form-subtitle">Welcome back! Please login</p>
          <form id="loginForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <i className="fas fa-eye toggle-password" id="togglePassword"></i>
              </div>
            </div>
            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
          <p className="login-footer-text">
            Don't have an account?
            <a
              href="signup.html"
              className="login-footer-link"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
