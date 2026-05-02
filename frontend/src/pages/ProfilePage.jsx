import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { User, CreditCard, Edit, LogOut } from "lucide-react";
import Sidebar from "../components/Sidebar";
import API_BASE from "../config";
import "../style/profile-page.css";


const ProfilePage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: localStorage.getItem("user_name") || "",
    email: localStorage.getItem("user_email") || "",
    phone: localStorage.getItem("user_phone") || "",
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
      setUserData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
      setLoading(false);
    } catch (e) {
      console.error("Failed to parse user from localStorage", e);
      navigate("/");
    }
  }, [navigate]);


  if (loading && !userData.name) {
    return (
      <div className="prof-v2-page">
        <div className="prof-v2-wrapper">
          <div className="prof-v2-layout">
            <Sidebar prefix="prof-v2" username={userData.name} />
            <main className="prof-v2-content">
              <div className="prof-v2-header">
                <h2 className="prof-v2-title">Loading Profile...</h2>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="prof-v2-page">
      <div className="prof-v2-wrapper">
        <div className="prof-v2-layout">
          <Sidebar prefix="prof-v2" username={userData.name} />


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
                  value={userData.name}
                  readOnly
                />
              </div>


              <div className="prof-v2-field">
                <label className="prof-v2-label">Email Address</label>
                <input
                  type="email"
                  className="prof-v2-input"
                  value={userData.email}
                  readOnly
                />
              </div>


              <div className="prof-v2-field">
                <label className="prof-v2-label">Mobile Number</label>
                <input
                  type="tel"
                  className="prof-v2-input"
                  value={userData.phone}
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


