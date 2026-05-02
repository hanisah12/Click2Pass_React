import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import API_BASE from "../config";
import "../style/login-page.css";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("user_id", data.user_id || data.id);
        localStorage.setItem("user_name", data.name || data.username);
        localStorage.setItem("user_email", data.email || email);
        localStorage.setItem("user_phone", data.phone || "");
        navigate("/landing-page");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred. Please try again.");
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="auth-v2-page-wrapper">
      <div className="auth-v2-main-container">
        <div className="auth-v2-login-card">
          <div className="auth-v2-card-header">
            <h2 className="auth-v2-form-title">Login</h2>
            <p className="auth-v2-form-subtitle">Welcome back! Please login</p>
          </div>


          <form className="auth-v2-login-form" onSubmit={handleSubmit}>
            <div className="auth-v2-form-group">
              <input
                type="email"
                className="auth-v2-input-field"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>


            <div className="auth-v2-form-group">
              <div className="auth-v2-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="auth-v2-input-field auth-v2-password-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="auth-v2-toggle-btn"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="auth-v2-eye-icon" />
                  ) : (
                    <Eye size={20} className="auth-v2-eye-icon" />
                  )}
                </button>
              </div>
            </div>


            <button type="submit" className="auth-v2-submit-btn">
              Login
            </button>
          </form>


          <div className="auth-v2-card-footer">
            <p className="auth-v2-footer-text">
              Don't have an account?{" "}
              <Link to="/signup" className="auth-v2-signup-link">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;





