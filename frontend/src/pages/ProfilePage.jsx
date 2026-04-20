import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/profile-page.css";
import { NavLink, Link } from "react-router-dom";
import { User, Ticket, Lock, LogOut } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <NavBar />
      
      <div className="main-layout">
        <aside className="sidebar animate-fade-in">
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

        <main className="content animate-fade-in">
          <div className="page-header">
            <h2 className="page-title">My Profile</h2>
            <p className="page-subtitle">
              View and manage your personal information
            </p>
          </div>

          <div className="profile-card">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" value="sidhu S" readOnly />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" value="sidhu2003@gmail.com" readOnly />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" value="9128734650" readOnly />
            </div>

            <Link to="/edit-profile" className="btn-primary">
              Edit Profile
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;

