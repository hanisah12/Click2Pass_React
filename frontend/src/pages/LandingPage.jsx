import React from "react";
import { useNavigate } from "react-router-dom";
import { Zap, Clock, Bus, MapPinned, Shield, Ticket } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import "../style/landing-page.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="lp-v2-landing-page">
      <Hero onAction={() => navigate("/form")} />

      {/* Features Section */}
      <section className="lp-v2-section">
        <h2 className="lp-v2-section-title">Why Choose Click2Pass?</h2>
        <div className="lp-v2-grid">
          <FeatureCard
            icon={Zap}
            title="Instant & Digital"
            description="No more paper tickets. Get your pass delivered to your phone instantly via Click2Pass."
            iconClass="lp-v2-icon-zap"
          />

          <FeatureCard
            icon={Clock}
            title="Skip the Queues"
            description="Buy your pass anytime, anywhere. No more waiting in long lines at Chennai MTC counters."
            iconClass="lp-v2-icon-clock"
          />

          <FeatureCard
            icon={Bus}
            title="All Pass Types"
            description="Apply for monthly passes easily in one convenient place."
            iconClass="lp-v2-icon-bus"
          />
        </div>
      </section>

      {/* Steps Section */}
      <section className="lp-v2-section lp-v2-steps-section">
        <div className="lp-v2-steps-container">
          <h2 className="lp-v2-section-title">Get Your Pass in 3 Easy Steps</h2>
          <div className="lp-v2-grid">
            <FeatureCard
              icon={MapPinned}
              title="1. Select Your Date"
              description="Choose your start Date, and the type of pass you need."
              iconClass="lp-v2-icon-map"
            />

            <FeatureCard
              icon={Shield}
              title="2. Application Submission"
              description="Submit bus pass applications easily through a simple online process."
              iconClass="lp-v2-icon-shield"
            />

            <FeatureCard
              icon={Ticket}
              title="3. Travel Instantly"
              description="Your digital pass is generated immediately. Show it on your phone and travel!"
              iconClass="lp-v2-icon-ticket"
            />
          </div>
        </div>
      </section>

      <CTA onAction={() => navigate("/form")} />
    </div>
  );
};

export default LandingPage;
