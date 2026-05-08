import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User, CreditCard, Lock, LogOut, Eye, EyeOff } from "lucide-react";
import Sidebar from "../components/Sidebar";
import API_BASE from "../config";
import "../style/edit-profile.css";

const EditProfile = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      navigate("/");
      return;
    }

    try {
      const user = JSON.parse(userStr);
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        password: "",
      });
      setLoading(false);
    } catch (e) {
      navigate("/");
    }
  }, [navigate]);

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isPasswordValid =
    formData.password === "" || passwordRegex.test(formData.password);
  const passwordStyle =
    formData.password !== "" && isPasswordValid
      ? { borderColor: "green", boxShadow: "0 0 5px green" }
      : {};

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    // Create a copy of formData and remove password if it's empty
    const updateData = { ...formData };
    if (!updateData.password) {
      delete updateData.password;
    } else {
      if (!passwordRegex.test(updateData.password)) {
        alert(
          "Password must be at least 8 characters long and contain at least one alphabet, one number, and one special character (@$!%*?&).",
        );
        return;
      }
    }

    try {
      const response = await fetch(`${API_BASE}/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
      });

      let data;
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch (err) {
        alert("Server Error (Non-JSON): " + text.substring(0, 100));
        return;
      }

      if (response.ok) {
        alert("Profile updated successfully!");
        const currentToken = localStorage.getItem("token");
        // Keep the token if it's not in the update response
        if (!data.token && currentToken) {
          data.token = currentToken;
        }
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("user_id", data.user_id || userId);
        navigate("/profile");
      } else {
        alert(
          "Update failed: " + (data.detail || data.message || "Unknown error"),
        );
      }
    } catch (error) {
      console.error("Profile update error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="edit-v2-page">
      <div className="edit-v2-wrapper">
        <div className="edit-v2-layout">
          <Sidebar prefix="edit-v2" username={formData.name} />

          <main className="edit-v2-content">
            <div className="edit-v2-header">
              <h2 className="edit-v2-title">Edit Profile</h2>
              <p className="edit-v2-subtitle">
                Update your personal details securely
              </p>
            </div>

            <form className="edit-v2-form-box" onSubmit={handleSubmit}>
              <div className="edit-v2-group">
                <label className="edit-v2-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="edit-v2-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="edit-v2-group">
                <label className="edit-v2-label">Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="edit-v2-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <hr className="edit-v2-divider" />

              <div className="edit-v2-group">
                <label className="edit-v2-label">
                  New Password (leave blank to keep current)
                </label>
                <div className="edit-v2-pass-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="edit-v2-input"
                    placeholder="Enter new password"
                    value={formData.password}
                    onChange={handleChange}
                    style={passwordStyle}
                  />
                  <div
                    className="edit-v2-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </div>
                </div>
                <p className="edit-v2-note">
                  If changing, must be 8+ characters with at least one alphabet,
                  one number, and one special character.
                </p>
              </div>

              <button type="submit" className="edit-v2-btn">
                Save Changes
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
