import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/success-page.css"
import { useLocation , Link} from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const data = location.state || JSON.parse(localStorage.getItem("passes"))?.slice(-1)[0]

  const getDaysLeft = () => {
    if (!data?.validTill) return "-";

    const today = new Date();
    const end = new Date(data.validTill)

    const diff = Math.ceil(
      (end-today) / (1000 * 60 * 60* 24)
    );

    return  diff > 0 ? diff + "days" : "Expired"
  }


  return (
    <div>
      <NavBar />
      <div className="form-container">
        <div className="success-card">
          <div className="success-icon text-emerald">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2 className="form-title">Pass Applied Successfully</h2>
          <p className="form-subtitle">Your transaction was successful!</p>

          <div className="ticket-details">
            <div className="ticket-row">
              <span className="label">Pass Type:</span>
              <span className="value" id="passType">
                {data?.passType || "-"}
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Pass ID:</span>
              <span className="value pass-id-value" id="passId">
              {data?.id || "-"}
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Valid From:</span>
              <span className="value" id="validFrom">
                {data?.validFrom || "-"}
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Valid Till:</span>
              <span className="value" id="validTill">
                {data?.validTill || data?.validTill || "-"}
              </span>
            </div>
            <div className="ticket-row">
              <span className="label">Days Remaining:</span>
              <span className="value" id="daysRemaining">
                {getDaysLeft()}
              </span>
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

          <Link to="/my-passes" className="btn-primary mt-2rem">
            View My Passes
        </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessPage;
