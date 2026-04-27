import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import "../style/navbar-footer.css";

const Footer = () => {
  return (
    <footer className="ft-footer">
      <div className="ft-container">
        <div className="ft-grid">
          {/* Brand Column */}
          <div className="ft-col ft-brand">
            <h2 className="ft-logo">
              Click<span>2Pass</span>
            </h2>
            <p className="ft-tagline">
              Your trusted platform for instant bus passes and seamless
              commuting.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="ft-col">
            <h4 className="ft-title">Quick Links</h4>
            <ul className="ft-links">
              <li>
                <Link to="/landing-page">About Us</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="ft-col">
            <h4 className="ft-title">Support</h4>
            <ul className="ft-links">
              <li>
                <Link to="#">Help Center</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="ft-col">
            <h4 className="ft-title">Contact</h4>
            <div className="ft-contact-info">
              <div className="ft-contact-item">
                <Mail className="ft-icon" size={18} />
                <span>support@click2pass.com</span>
              </div>
              <div className="ft-contact-item">
                <Phone className="ft-icon" size={18} />
                <span>+91 1800-123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="ft-bottom">
          <p>© 2025 Click2Pass Chennai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
