import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { User, CreditCard, Lock, LogOut, Eye, EyeOff } from "lucide-react";
import "../style/edit-profile.css";

const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="edit-v2-page">
   

      <div className="edit-v2-wrapper">
        <div className="edit-v2-layout">
          {/* Sidebar */}
          <aside className="edit-v2-sidebar">
            <div className="edit-v2-user-box">
              <div className="edit-v2-avatar">
                <User size={32} />
              </div>
              <div className="edit-v2-welcome">
                <span>Welcome,</span>
                <div className="edit-v2-username">Hanisha</div>
              </div>
            </div>

            <nav className="edit-v2-menu">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `edit-v2-menu-item ${isActive ? "active" : ""}`
                }
              >
                <User size={18} /> Profile
              </NavLink>
              <NavLink
                to="/my-passes"
                className={({ isActive }) =>
                  `edit-v2-menu-item ${isActive ? "active" : ""}`
                }
              >
                <CreditCard size={18} /> My Passes
              </NavLink>
              <NavLink
                to="/edit-profile"
                className={({ isActive }) =>
                  `edit-v2-menu-item ${isActive ? "active" : ""}`
                }
              >
                <Lock size={18} /> Edit Profile
              </NavLink>
              <Link to="/" className="edit-v2-menu-item">
                <LogOut size={18} /> Logout
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="edit-v2-content">
            <div className="edit-v2-header">
              <h2 className="edit-v2-title">Edit Profile</h2>
              <p className="edit-v2-subtitle">
                Update your personal details securely
              </p>
            </div>

            <form className="edit-v2-form-box">
              <div className="edit-v2-group">
                <label className="edit-v2-label">Full Name</label>
                <input
                  type="text"
                  className="edit-v2-input"
                  defaultValue="Hanisha"
                  required
                />
              </div>

              <div className="edit-v2-group">
                <label className="edit-v2-label">Mobile Number</label>
                <input
                  type="tel"
                  className="edit-v2-input"
                  defaultValue="8778583290"
                  required
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
                    className="edit-v2-input"
                    placeholder="Enter new password"
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
