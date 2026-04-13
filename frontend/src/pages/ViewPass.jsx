import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/view-pass.css";
import { useLocation } from "react-router-dom";

const ViewPass = () => {

  const location = useLocation();
  const data =
  location.state ||
  JSON.parse(localStorage.getItem("passes"))?.slice(-1)[0]; 

  const getDaysLeft = () => {
  if (!data?.validTill) return "—";

  const today = new Date();
  const end = new Date(data.validTill);

  const diff = Math.ceil(
    (end - today) / (1000 * 60 * 60 * 24)
  );

  return diff > 0 ? diff + " days" : "Expired";
};

  return (
    <div>
      <NavBar />
      <div className="form-container">
        <div className="success-card">
          <div className="success-icon text-emerald">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2 className="form-title">Digital Bus Pass</h2>
          <p className="form-subtitle">
            Your pass is active and valid for travel
          </p>

          <div className="confirmation-box">
            <i className="fas fa-envelope"></i> Confirmation Details Ready
          </div>

          {/* <div className="ticket-details" id="ticketDetails">
            <div className="ticket-row">
              <span className="label">User Name:</span>
              <span className="value" id="userName">
                Loading...
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Mobile Number:</span>
              <span className="value" id="userPhone">
                Loading...
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Pass Type:</span>
              <span className="value" id="passType">
                Loading...
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Pass ID:</span>
              <span className="value pass-id-value" id="passId">
                Loading...
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Valid From:</span>
              <span className="value" id="validFrom">
                Loading...
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Valid Till:</span>
              <span className="value" id="validTill">
                Loading...
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Days Remaining:</span>
              <span className="value" id="daysRemaining">
                Loading...
              </span>
            </div>
          </div> */}
          <p>Days Remaining: {getDaysLeft()}</p>
          <p>Pass Type: {data?.passType}</p>
          <p>Valid From: {data?.validFrom}</p>
          <p>Valid Till: {data?.validTill}</p>
          <p>ID: {data?.id}</p>

          <div className="help-section">
            <div className="help-card">
              <h4>Need Help?</h4>
              <p>
                If you have any questions or need assistance, please contact our
                support team.
              </p>
              {/* <a href="contact.html" className="help-link">
                Contact Support <i className="fas fa-arrow-right"></i>
              </a> */}
            </div>
          </div>

          {/* <a href="my-passes.html" className="btn-primary mt-2rem">
            Back to My Passes
          </a> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewPass;
