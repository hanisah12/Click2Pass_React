import React from "react";

const FeatureCard = ({ icon: Icon, title, description, isStep }) => {
  const cardClass = isStep ? "how-it-works-step" : "feature-card";
  return (
    <div className={cardClass}>
      <Icon size={48} strokeWidth={1.5} className="card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;


