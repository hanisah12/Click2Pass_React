import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, AlertCircle } from "lucide-react";
import "../style/not-found.css";


const NotFound = () => {
  const navigate = useNavigate();


  return (
    <div className="nf-not-found-container">
      <div className="nf-content">
        <div className="nf-icon-wrapper">
          <AlertCircle size={80} className="nf-error-icon" />
        </div>
        <h1 className="nf-title">404</h1>
        <h2 className="nf-subtitle">Page Not Found</h2>
        <p className="nf-description">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <button className="nf-home-btn" onClick={() => navigate("/landing-page")}>
          <Home size={20} /> Back to Home
        </button>
      </div>
    </div>
  );
};


export default NotFound;



