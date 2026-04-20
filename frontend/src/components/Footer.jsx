import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import "../style/navbar-footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <h2 className="footer-logo">Click2Pass</h2>
          <p className="footer-tagline">
            Your trusted platform for instant bus passes and seamless commuting.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/landing-page">About Us</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="#">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>Contact</h4>
          <p><Mail className="footer-icon" size={18} /> support@click2pass.com</p>
          <p><Phone className="footer-icon" size={18} /> +91 1800-123-4567</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
