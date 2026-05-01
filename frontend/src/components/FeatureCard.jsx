import React from "react";


const FeatureCard = ({
  icon: Icon,
  title,
  description,
  cardClass = "lp-v2-card",
  iconWrapperClass = "lp-v2-card-icon",
  iconClass = "",
  titleClass = "lp-v2-card-title",
  textClass = "lp-v2-card-text",
}) => {
  return (
    <div className={cardClass}>
      <div className={iconWrapperClass}>
        <Icon size={48} className={iconClass} />
      </div>
      <h3 className={titleClass}>{title}</h3>
      <p className={textClass}>{description}</p>
    </div>
  );
};


export default FeatureCard;



