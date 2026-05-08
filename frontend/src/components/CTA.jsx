import React from "react";

const CTA = ({ onAction }) => {
  return (
    <section className="lp-v2-cta-section">
      <h2 className="lp-v2-cta-title">Ready to Simplify Your Commute?</h2>
      <p className="lp-v2-cta-subtitle">
        Join thousands of happy Chennai commuters today and save time every day.
      </p>
      <button className="lp-v2-cta-btn" onClick={onAction}>
        Apply for Pass
      </button>
    </section>
  );
};

export default CTA;
