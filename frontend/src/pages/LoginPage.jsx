import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/login-page.css";

const LoginPage = () => {
  return (
    <div>
      <NavBar />
      <div className="form-container">
        <div className="login-card">
          <h2 className="form-title">Login</h2>
          <p className="form-subtitle">Welcome back! Please login</p>
          <form id="loginForm">
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
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
