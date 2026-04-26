import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../style/navbar-footer.css";


const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="nb-navbar">
      <div className="nb-container">
        <div className="nb-logo">
          <NavLink to="/landing-page" className="nb-logo-link">
            Click<span>2Pass</span>
          </NavLink>
        </div>


        <div className={`nb-menu-wrapper ${isMenuOpen ? "nb-active" : ""}`}>
          <ul className="nb-nav-list">
            <li className="nb-nav-item">
              <NavLink
                to="/landing-page"
                className={({ isActive }) => `nb-nav-link ${isActive ? "nb-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nb-nav-item">
              <NavLink
                to="/form"
                className={({ isActive }) => `nb-nav-link ${isActive ? "nb-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Pass
              </NavLink>
            </li>
            <li className="nb-nav-item">
              <NavLink
                to="/my-passes"
                className={({ isActive }) => `nb-nav-link ${(isActive || location.pathname === "/view-pass") ? "nb-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                My Passes
              </NavLink>
            </li>
            <li className="nb-nav-item">
              <NavLink
                to="/profile"
                className={({ isActive }) => `nb-nav-link ${isActive ? "nb-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </NavLink>
            </li>
            <li className="nb-nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nb-nav-link ${isActive ? "nb-active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>


        <button className={`nb-hamburger ${isMenuOpen ? "nb-active" : ""}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};


export default NavBar;



