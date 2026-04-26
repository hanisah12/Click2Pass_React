import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { NavLink, Link } from "react-router-dom";
import { User, CreditCard, Edit, LogOut } from "lucide-react";
import "../style/profile-page.css";

const ProfilePage = () => {
  return (
    <div className="prof-v2-page">
      <NavBar />

      <div className="prof-v2-wrapper">
        <div className="prof-v2-layout">
          {/* Sidebar */}
          <aside className="prof-v2-sidebar">
            <div className="prof-v2-user-box">
              <div className="prof-v2-avatar">
                <User size={32} />
              </div>
              <div className="prof-v2-welcome">
                <span>Welcome,</span>
                <div className="prof-v2-username">sidhu S</div>
              </div>
            </div>

            <nav className="prof-v2-menu">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `prof-v2-menu-item ${isActive ? "active" : ""}`
                }
              >
                <User size={18} /> Profile
              </NavLink>
              <NavLink
                to="/my-passes"
                className={({ isActive }) =>
                  `prof-v2-menu-item ${isActive ? "active" : ""}`
                }
              >
                <CreditCard size={18} /> My Passes
              </NavLink>
              <NavLink
                to="/edit-profile"
                className={({ isActive }) =>
                  `prof-v2-menu-item ${isActive ? "active" : ""}`
                }
              >
                <Edit size={18} /> Edit Profile
              </NavLink>
              <Link to="/" className="prof-v2-menu-item">
                <LogOut size={18} /> Logout
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="prof-v2-content">
            <div className="prof-v2-header">
              <h2 className="prof-v2-title">My Profile</h2>
              <p className="prof-v2-subtitle">
                View and manage your personal information
              </p>
            </div>

            <div className="prof-v2-details-box">
              <div className="prof-v2-field">
                <label className="prof-v2-label">Full Name</label>
                <input
                  type="text"
                  className="prof-v2-input"
                  value="sidhu S"
                  readOnly
                />
              </div>

              <div className="prof-v2-field">
                <label className="prof-v2-label">Email Address</label>
                <input
                  type="email"
                  className="prof-v2-input"
                  value="sidhu2003@gmail.com"
                  readOnly
                />
              </div>

              <div className="prof-v2-field">
                <label className="prof-v2-label">Mobile Number</label>
                <input
                  type="tel"
                  className="prof-v2-input"
                  value="9128734650"
                  readOnly
                />
              </div>

              <Link
                to="/edit-profile"
                className="prof-v2-btn"
                style={{ textAlign: "center", textDecoration: "none" }}
              >
                Edit Profile
              </Link>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
