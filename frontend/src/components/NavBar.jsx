import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../style/navbar-footer.css";


const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const isAuthenticated = !!localStorage.getItem("user_id");


  return (
    <nav className="nb-navbar">
      <div className="nb-container">
        <div className="nb-logo">
          <NavLink to={isAuthenticated ? "/landing-page" : "/"} className="nb-logo-link">
            Click<span>2Pass</span>
          </NavLink>
        </div>


        <div className={`nb-menu-wrapper ${isMenuOpen ? "nb-active" : ""}`}>
          <ul className="nb-nav-list">
            <li className="nb-nav-item">
              <NavLink
                to={isAuthenticated ? "/landing-page" : "/"}
                className={({ isActive }) =>
                  `nb-nav-link ${isActive && location.pathname !== "/" && location.pathname !== "/signup" ? "nb-active" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>


            {isAuthenticated && (
              <>
                <li className="nb-nav-item">
                  <NavLink
                    to="/form"
                    className={({ isActive }) =>
                      `nb-nav-link ${isActive ? "nb-active" : ""}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Apply Pass
                  </NavLink>
                </li>
                <li className="nb-nav-item">
                  <NavLink
                    to="/my-passes"
                    className={({ isActive }) =>
                      `nb-nav-link ${isActive || location.pathname.includes("/view-pass") ? "nb-active" : ""}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Passes
                  </NavLink>
                </li>
                <li className="nb-nav-item">
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `nb-nav-link ${isActive ? "nb-active" : ""}`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            )}


            <li className="nb-nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nb-nav-link ${isActive ? "nb-active" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>


          {!isAuthenticated && (
            <div className="nb-auth-buttons">
              <button
                className="nb-btn-auth"
                onClick={() => { setIsMenuOpen(false); navigate("/signup"); }}
              >
                Sign-Up
              </button>
              <button
                className="nb-btn-auth"
                onClick={() => { setIsMenuOpen(false); navigate("/"); }}
              >
                Login
              </button>
            </div>
          )}
        </div>


        <button
          className={`nb-hamburger ${isMenuOpen ? "nb-active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};


export default NavBar;



