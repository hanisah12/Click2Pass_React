import React from 'react'
import "../style/navbar-footer.css"

const Footer = () => {
  return (
    <div>
         <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>
              Click<span>2Pass</span>
            </h3>
            <p>
              Your trusted platform for instant bus passes and seamless
              commuting.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              <i className="fas fa-envelope"></i> support@click2pass.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +91 1800-123-4567
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Click2Pass Chennai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer