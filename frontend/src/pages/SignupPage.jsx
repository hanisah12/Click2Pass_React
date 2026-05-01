import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API_BASE from "../config";
import "../style/signup-page.css";


const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/users/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Account created successfully! Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setMessage(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };


  return (
    <div>
      <div className="form-container">
        <div className="login-card">
          <h2 className="form-title">Create Account</h2>
          <p className="form-subtitle">Join us today! Please sign up</p>


          <form id="signupForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <input
                type="tel"
                id="phone"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">
              <div className="password-container">
                <input
                  type="password"
                  id="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <small className="help-text">
                Must be 8+ characters with at least one alphabet, one number,
                and one special character.
              </small>
            </div>


            <button type="submit" className="btn-primary">
              Sign Up
            </button>


            <p id="signupMessage" className="signup-message">
              {message}
            </p>
          </form>


          <p className="signup-footer-text">
            Already have an account?
            <Link to="/" className="signup-footer-link">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default SignupPage;



