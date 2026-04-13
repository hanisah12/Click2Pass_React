import React from "react";
import "../style/navbar-footer.css";
import { Link } from "react-router-dom";

const NavBar = () => {
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form" className="active">
                Apply Pass
              </Link>
            </li>
            <li>
              <Link to="/my-pass">My Passes</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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
