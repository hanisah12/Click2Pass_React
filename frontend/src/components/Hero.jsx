import React from "react";
import { MapPinned } from "lucide-react";

const Hero = ({ onAction }) => {
  return (
    <section className="lp-v2-hero-section">
      <div className="lp-v2-hero-content">
        <div className="lp-v2-city-badge">
          <MapPinned size={16} /> Exclusively for Chennai
        </div>
        <h1 className="lp-v2-hero-title">Seamless Travel. Instant Passes.</h1>
        <p className="lp-v2-hero-subtitle">
          Get your monthly bus passes in just a few clicks. Welcome to
          Click2Pass, your digital solution for easy commuting in{" "}
          <strong>Chennai</strong>.
        </p>
        <button className="lp-v2-hero-cta" onClick={onAction}>
          Apply for Your Pass Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
