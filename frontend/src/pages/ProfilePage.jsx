import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/my-passes.css"

const ProfilePage = () => {
  return (
    <div>
        <NavBar/>
      <div className="main-layout">
        <aside className="sidebar">
          <div className="user-profile">
            <div className="avatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="user-info">
              <h3>Welcome,</h3>
              <span id="userName">User</span>
            </div>
          </div>

          <ul className="sidebar-menu">
            <li>
              <a href="profile.html" className="active">
                <i className="fas fa-user"></i> Profile
              </a>
            </li>
            <li>
              <a href="my-passes.html">
                <i className="fas fa-ticket-alt"></i> My Passes
              </a>
            </li>
            <li>
              <a href="edit_profile.html">
                <i className="fas fa-lock"></i> Edit Profile
              </a>
            </li>
            <li>
              <a href="#" id="logoutLink">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </li>
          </ul>
        </aside>

        <main className="content">
          <div className="page-header">
            <h2 className="page-title">My Profile</h2>
            <p className="page-subtitle">
              View and manage your personal information
            </p>
          </div>

          <form className="profile-card">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" id="profileName" placeholder="Enter Your Name"/>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" id="profileEmail" placeholder="Enter Your Email Address" />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" id="profilePhone" placeholder="Enter Your Mobile Number" />
            </div>

            <a href="edit_profile.html" className="btn-primary">
              {" "}
              Edit Profile{" "}
            </a>
          </form>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfilePage;
