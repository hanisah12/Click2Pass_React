import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/edit-profile.css";
import { NavLink, Link } from "react-router-dom";
import { User, Ticket, Lock, LogOut } from "lucide-react";

const EditProfile = () => {
  return (
    <div>
      <NavBar />
      <div className="main-layout">
        <aside className="sidebar">
          <div className="user-profile">
            <div className="avatar">
              <User size={40} />
            </div>
            <div className="user-info">
              <h3>Welcome,</h3>
              <div className="user-name">sidhu S</div>
            </div>
          </div>

          <ul className="sidebar-menu">
            <li>
              <NavLink to="/profile">
                <User size={18} /> Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-passes">
                <Ticket size={18} /> My Passes
              </NavLink>
            </li>
            <li>
              <NavLink to="/edit-profile">
                <Lock size={18} /> Edit Profile
              </NavLink>
            </li>
            <li>
              <Link to="/">
                <LogOut size={18} /> Logout
              </Link>
            </li>
          </ul>
        </aside>

        <main className="content">
          <div className="page-header">
            <h2 className="page-title">Edit Profile</h2>
            <p className="page-subtitle">Update your personal details securely</p>
          </div>

          <form id="editProfileForm" className="profile-card">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" pattern="[0-9]{10}" required />
            </div>

            <hr className="edit-divider" />

            <div className="form-group">
              <label htmlFor="password">
                New Password (leave blank to keep current)
              </label>
              <div className="password-container">
                <input type="password" id="password" />
                <i className="fas fa-eye toggle-password" id="togglePassword"></i>
              </div>
              <small className="help-text">
                If changing, must be 8+ characters with at least one alphabet,
                one number, and one special character.
              </small>
            </div>

            <button type="submit" className="btn-primary">
              Save Changes
            </button>
          </form>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default EditProfile;
