import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/signup-page.css";

const SignupPage = () => {
  return (
    <div>
      <NavBar />
      <div className="form-container">
        <div className="login-card">
          <h2 className="form-title">Create Account</h2>
          <p className="form-subtitle">Join us today! Please sign up</p>

          <form id="signupForm">
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                id="phone"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  required
                />
                <i
                  className="fas fa-eye toggle-password"
                  id="togglePassword"
                ></i>
              </div>
              <small className="help-text">
                Must be 8+ characters with at least one alphabet, one number,
                and one special character.
              </small>
            </div>

            <button type="submit" className="btn-primary">
              Sign Up
            </button>

            <p id="signupMessage" className="signup-message"></p>
          </form>

          <p className="signup-footer-text">
            Already have an account?
            <a href="login.html" className="signup-footer-link">
              Login here
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
