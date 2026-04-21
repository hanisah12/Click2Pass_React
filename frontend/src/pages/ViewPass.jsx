import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/view-pass.css";
import { useLocation, Link } from "react-router-dom";

const ViewPass = () => {
  const location = useLocation();
  const data =
    location.state ||
    JSON.parse(localStorage.getItem("passes"))?.slice(-1)[0];

  const getDaysLeft = () => {
    if (!data?.validTill) return "—";

    const today = new Date();
    const end = new Date(data.validTill);
    today.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));

    return diff > 0 ? diff + " Days" : "Expired";
  };

  return (
    <div className="view-pass-page">
      <NavBar />
      <div className="form-container">
        <div className="success-card">
          <div className="success-icon">
            <div className="check-mark">
              <i className="fas fa-check"></i>
            </div>
          </div>
          <h2 className="form-title">Digital Bus Pass</h2>
          <p className="form-subtitle">
            Your pass is active and valid for travel
          </p>

          <div className="confirmation-box">
            <i className="fas fa-envelope"></i> Confirmation Details Ready
          </div>

          <div className="ticket-details">
            <div className="ticket-row">
              <span className="label">User Name:</span>
              <span className="value">{data?.fullName || data?.username || "sidhu S"}</span>
            </div>
            <div className="ticket-row">
              <span className="label">Mobile Number:</span>
              <span className="value">{data?.mobileNumber || data?.phone || "9128734650"}</span>
            </div>
            <div className="ticket-row">
              <span className="label">Pass Type:</span>
              <span className="value">{data?.passType || "₹2000 - AC + Non-AC"}</span>
            </div>
            <div className="ticket-row">
              <span className="label">Pass ID:</span>
              <span className="value pass-id-value">{data?.passId || "P-15"}</span>
            </div>
            <div className="ticket-row">
              <span className="label">Valid From:</span>
              <span className="value">{data?.validFrom || "April 10, 2026"}</span>
            </div>
            <div className="ticket-row">
              <span className="label">Valid Till:</span>
              <span className="value">{data?.validTill || "May 10, 2026"}</span>
            </div>
            <div className="ticket-row">
              <span className="label">Days Remaining:</span>
              <span className="value days-remaining">{getDaysLeft()}</span>
            </div>
          </div>

          <div className="help-section">
            <div className="help-card">
              <h4>Need Help?</h4>
              <p>
                If you have any questions or need assistance, please contact our
                support team.
              </p>
              <Link to="/contact" className="help-link">
                Contact Support <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <Link to="/my-passes" className="btn-primary mt-2rem back-btn">
            Back to My Passes
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewPass;

