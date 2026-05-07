import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("Password must be at least 8 characters long and contain at least one alphabet, one number, and one special character (@$!%*?&).");
      return;
    }


    const data = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      password: formData.password
    };


    try {
      const response = await fetch(`${API_BASE}/users/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });


      let result;
      const text = await response.text();
      try {
        result = JSON.parse(text);
      } catch (err) {
        console.error("Server returned non-JSON:", text);
        alert("Server Error (Non-JSON): " + text.substring(0, 100));
        return;
      }


      if (!response.ok) {
        alert(result.detail || result.message || "Signup failed");
        return;
      }


      localStorage.clear();
      alert("Signup successful. Please login.");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      alert("Server not reachable: " + error.message);
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
              <div className="password-container" style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  style={
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)
                      ? { borderColor: "green", boxShadow: "0 0 5px green", paddingRight: "40px", width: "100%" }
                      : { paddingRight: "40px", width: "100%" }
                  }
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center"
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
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
