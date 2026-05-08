import React from "react";
import { useNavigate } from "react-router-dom";

const PassCard = ({ pass, onAction, getPassTypeLabel, getDaysRemaining }) => {
  const navigate = useNavigate();
  const validFrom = pass.validFrom || pass.valid_from;
  const validTill = pass.validTill || pass.valid_till;
  const passType = pass.passType || pass.pass_type;

  const daysRemaining = getDaysRemaining(validFrom, validTill);
  const isExpired = daysRemaining < 0;

  let statusText = "";
  let statusStyle = {};

  if (daysRemaining > 0) {
    statusText = `${daysRemaining} Days Remaining`;
    statusStyle = { color: "#10b981", fontWeight: 700 };
  } else if (daysRemaining === 0) {
    statusText = "Expires Today";
    statusStyle = { color: "#f59e0b", fontWeight: 700 };
  } else {
    statusText = "Expired";
    statusStyle = {
      background: "linear-gradient(135deg, #f44336, #e91e63)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: 800,
    };
  }

  return (
    <div className={`mp-v2-card ${isExpired ? "expired" : ""}`}>
      <div className="mp-v2-card-header">
        <h3 className="mp-v2-pass-title">{getPassTypeLabel(passType)}</h3>
        <div className="mp-v2-status" style={statusStyle}>
          {statusText}
        </div>
      </div>

      <div className="mp-v2-details">
        <div className="mp-v2-detail-group">
          <span className="mp-v2-label">Valid From</span>
          <span className="mp-v2-value">{validFrom}</span>
        </div>
        <div className="mp-v2-detail-group">
          <span className="mp-v2-label">Valid Until</span>
          <span className="mp-v2-value">{validTill}</span>
        </div>
      </div>

      <button
        className="mp-v2-btn"
        onClick={() =>
          onAction
            ? onAction(pass)
            : navigate(`/view-pass/${pass.pass_id || pass.id}`)
        }
      >
        View Pass
      </button>
    </div>
  );
};

export default PassCard;
