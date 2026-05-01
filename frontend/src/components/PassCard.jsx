import React from "react";
import { useNavigate } from "react-router-dom";


const PassCard = ({ pass, onAction, getPassTypeLabel, getDaysRemaining }) => {
  const navigate = useNavigate();
  const daysRemaining = getDaysRemaining(pass.validFrom, pass.validTill);
  const isExpired = daysRemaining < 0;


  return (
    <div className={`mp-v2-card ${isExpired ? "expired" : ""}`}>
      <div className="mp-v2-card-header">
        <h3 className="mp-v2-pass-title">
          {getPassTypeLabel(pass.passType)}
        </h3>
        <div className={`mp-v2-status ${isExpired ? "expired" : "remaining"}`}>
          {isExpired ? "Expired" : `${daysRemaining} Days Remaining`}
        </div>
      </div>


      <div className="mp-v2-details">
        <div className="mp-v2-detail-group">
          <span className="mp-v2-label">Valid From</span>
          <span className="mp-v2-value">{pass.validFrom}</span>
        </div>
        <div className="mp-v2-detail-group">
          <span className="mp-v2-label">Valid Until</span>
          <span className="mp-v2-value">{pass.validTill}</span>
        </div>
      </div>


      <button
        className="mp-v2-btn"
        onClick={() => (onAction ? onAction(pass) : navigate("/view-pass", { state: pass }))}
      >
        View Pass
      </button>
    </div>
  );
};


export default PassCard;



