import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import "../style/success-page.css";

const SuccessPage = () => {
  const location = useLocation();
  const data =
    location.state || JSON.parse(localStorage.getItem("passes"))?.slice(-1)[0];

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getDaysLeft = () => {
    if (!data?.validTill) return "-";
    const today = new Date();
    const end = new Date(data.validTill);
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff + " Days" : "Expired";
  };

  return (
    <div className="success-v2-page">
      <NavBar />

      <div className="success-v2-wrapper">
        <div className="success-v2-container">
          <div className="success-v2-card">
            <div className="success-v2-icon-wrapper">
              <CheckCircle2
                size={100}
                className="success-v2-check-icon"
                strokeWidth={1.5}
                fill="#10b981"
                color="white"
              />
            </div>

            <h2 className="success-v2-title">Pass Applied Successfully</h2>
            <p className="success-v2-subtitle">
              Your transaction was successful!
            </p>

            <div className="success-v2-details-table">
              <div className="success-v2-detail-row">
                <span className="success-v2-label">Pass Type:</span>
                <span className="success-v2-value">
                  {data?.passType === "1000"
                    ? "₹1000 - Non-AC"
                    : data?.passType === "2000"
                      ? "₹2000 - AC & Non-AC"
                      : "N/A"}
                </span>
              </div>

              <div className="success-v2-detail-row">
                <span className="success-v2-label">Pass ID:</span>
                <span className="success-v2-value pass-id">
                  P-{String(data?.id || "0").slice(-2)}
                </span>
              </div>

              <div className="success-v2-detail-row">
                <span className="success-v2-label">Valid From:</span>
                <span className="success-v2-value">
                  {formatDate(data?.validFrom)}
                </span>
              </div>

              <div className="success-v2-detail-row">
                <span className="success-v2-label">Valid Till:</span>
                <span className="success-v2-value">
                  {formatDate(data?.validTill)}
                </span>
              </div>

              <div className="success-v2-detail-row">
                <span className="success-v2-label">Days Remaining:</span>
                <span className="success-v2-value days-left">
                  {getDaysLeft()}
                </span>
              </div>
            </div>

            <div className="success-v2-help-box">
              <h4 className="success-v2-help-title">Need Help?</h4>
              <p className="success-v2-help-text">
                If you have any questions or need assistance, please contact our
                support team.
              </p>
              <Link to="/contact" className="success-v2-help-link">
                Contact Support <ArrowRight size={18} />
              </Link>
            </div>

            <Link to="/my-passes" className="success-v2-btn">
              View My Passes
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SuccessPage;
