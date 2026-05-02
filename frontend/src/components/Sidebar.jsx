import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { User, CreditCard, Edit, Lock, LogOut } from "lucide-react";


const Sidebar = ({ prefix = "prof-v2", username = "Hanisha" }) => {
  const navigate = useNavigate();


  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };


  return (
    <aside className={`${prefix}-sidebar`}>
      <div className={`${prefix}-user-box`}>
        <div className={`${prefix}-avatar`}>
          <User size={32} />
        </div>
        <div className={`${prefix}-welcome`}>
          <span>Welcome,</span>
          <div className={`${prefix}-username`}>{username}</div>
        </div>
      </div>


      <nav className={`${prefix}-menu`}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `${prefix}-menu-item ${isActive ? "active" : ""}`
          }
        >
          <User size={18} /> Profile
        </NavLink>
        <NavLink
          to="/my-passes"
          className={({ isActive }) =>
            `${prefix}-menu-item ${isActive ? "active" : ""}`
          }
        >
          <CreditCard size={18} /> My Passes
        </NavLink>
        <NavLink
          to="/edit-profile"
          className={({ isActive }) =>
            `${prefix}-menu-item ${isActive ? "active" : ""}`
          }
        >
          {prefix === "edit-v2" ? <Lock size={18} /> : <Edit size={18} />} Edit Profile
        </NavLink>
        <a href="/" onClick={handleLogout} className={`${prefix}-menu-item`}>
          <LogOut size={18} /> Logout
        </a>
      </nav>
    </aside>
  );
};


export default Sidebar;



