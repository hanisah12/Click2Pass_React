import React from "react";
import { NavLink, Link } from "react-router-dom";
import { User, CreditCard, Edit, LogOut } from "lucide-react";
import Sidebar from "../components/Sidebar";
import "../style/profile-page.css";


const ProfilePage = () => {
  return (
    <div className="prof-v2-page">


      <div className="prof-v2-wrapper">
        <div className="prof-v2-layout">
          <Sidebar prefix="prof-v2" />


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
                  value="Hanisha"
                  readOnly
                />
              </div>


              <div className="prof-v2-field">
                <label className="prof-v2-label">Email Address</label>
                <input
                  type="email"
                  className="prof-v2-input"
                  value="hanisha16@gmail.com"
                  readOnly
                />
              </div>


              <div className="prof-v2-field">
                <label className="prof-v2-label">Mobile Number</label>
                <input
                  type="tel"
                  className="prof-v2-input"
                  value="8778583290"
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


    </div>
  );
};


export default ProfilePage;



