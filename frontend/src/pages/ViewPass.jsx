import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";
import "../style/view-pass.css";


const ViewPass = () => {
  const location = useLocation();
  const data = location.state || JSON.parse(localStorage.getItem("passes"))?.slice(-1)[0];


  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };


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
    <div className="vp-v2-page">
      <NavBar />
     
      <div className="vp-v2-wrapper">
        <div className="vp-v2-container">
          <div className="vp-v2-card">
            <div className="vp-v2-icon-wrapper">
              <CheckCircle2 size={100} className="vp-v2-check-icon" strokeWidth={1.5} fill="#10b981" color="white" />
            </div>
           
            <h2 className="vp-v2-title">Digital Bus Pass</h2>
            <p className="vp-v2-subtitle">Your pass is active and valid for travel</p>


            <div className="vp-v2-banner">
              <Mail size={20} /> Confirmation Details Ready
            </div>


            <div className="vp-v2-details-table">
              <div className="vp-v2-detail-row">
                <span className="vp-v2-label">User Name:</span>
                <span className="vp-v2-value">{data?.fullName || data?.username || "sidhu S"}</span>
              </div>
             
              <div className="vp-v2-detail-row">
                <span className="vp-v2-label">Mobile Number:</span>
                <span className="vp-v2-value">{data?.mobileNumber || data?.phone || "9128734650"}</span>
              </div>


              <div className="vp-v2-detail-row">
                <span className="vp-v2-label">Pass Type:</span>
                <span className="vp-v2-value">
                  {data?.passType === "1000" ? "₹1000 - Non-AC" : "₹2000 - AC + Non-AC"}
                </span>
              </div>
             
              <div className="vp-v2-detail-row">
                <span className="vp-v2-label">Pass ID:</span>
                <span className="vp-v2-value pass-id">P-{String(data?.id || "15").slice(-2)}</span>
              </div>
             
              <div className="vp-v2-detail-row">
                <span className="vp-v2-label">Valid From:</span>
                <span className="vp-v2-value">{formatDate(data?.validFrom || "2026-04-10")}</span>
              </div>
             
              <div className="vp-v2-detail-row">
                <span className="vp-v2-label">Valid Till:</span>
                <span className="vp-v2-value">{formatDate(data?.validTill || "2026-05-10")}</span>
              </div>
             
              <div className="vp-v2-detail-row">
                <span className="vp-v2-label">Days Remaining:</span>
                <span className="vp-v2-value days-left">{getDaysLeft()}</span>
              </div>
            </div>


            <div className="vp-v2-help-box">
              <h4 className="vp-v2-help-title">Need Help?</h4>
              <p className="vp-v2-help-text">
                If you have any questions or need assistance, please contact our support team.
              </p>
              <Link to="/contact" className="vp-v2-help-link">
                Contact Support <ArrowRight size={18} />
              </Link>
            </div>


            <Link to="/my-passes" className="vp-v2-btn">
              Back to My Passes
            </Link>
          </div>
        </div>
      </div>
     
      <Footer />
    </div>
  );
};


export default ViewPass;



