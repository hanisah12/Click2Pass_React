import React from "react";
import "../style/navbar-footer.css";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="top-navbar">
        <div className="nav-container">
          <div className="logo">
            <h2>
              Click<span>2Pass</span>
            </h2>
          </div>
          <ul className="nav-menu">
            <li>
              <NavLink to="/landing-page" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/form" className={({ isActive }) => isActive ? "active" : ""}>
                Apply Pass
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/my-passes" 
                className={({ isActive }) => (isActive || location.pathname === "/view-pass") ? "active" : ""}
              >
                My Passes
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            </li>
          </ul>
          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
