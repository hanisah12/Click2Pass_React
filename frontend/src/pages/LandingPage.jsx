import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import "../style/landing-page.css";
import { useNavigate } from "react-router-dom";
import { Zap, Clock, Bus, MapPinned, Shield, Ticket } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <NavBar />
      
      <div className="hero-section">
        <div className="hero-content animate-fade-in">
          <div className="city-badge">
            <MapPinned size={14} className="city-badge-icon" /> Exclusively for Chennai
          </div>
          <h1>Seamless Travel. Instant Passes.</h1>
          <p>
            Get your monthly bus passes in just a few clicks. Welcome to
            Click2Pass, your digital solution for easy commuting in
            <strong> Chennai</strong>.
          </p>
          <button onClick={() => navigate("/form")} className="hero-cta">
            Apply for Your Pass Now
          </button>
        </div>
      </div>

      <section className="features-section">
        <h2>Why Choose Click2Pass?</h2>
        <div className="features-grid">
          <FeatureCard
            icon={Zap}
            title="Instant & Digital"
            description="No more paper tickets. Get your pass delivered to your phone instantly via Click2Pass."
            isStep={false}
          />
          <FeatureCard
            icon={Clock}
            title="Skip the Queues"
            description="Buy your pass anytime, anywhere. No more waiting in long lines at Chennai MTC counters."
            isStep={false}
          />
          <FeatureCard
            icon={Bus}
            title="All Pass Types"
            description="Apply for monthly passes easily in one convenient place."
            isStep={false}
          />
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>Get Your Pass in 3 Easy Steps</h2>
        <div className="how-it-works-grid">
          <FeatureCard
            icon={MapPinned}
            title="1. Select Your Date"
            description="Choose your start Date, and the type of pass you need."
            isStep={true}
          />
          <FeatureCard
            icon={Shield}
            title="2. Application Submission"
            description="Submit bus pass applications easily through a simple online process."
            isStep={true}
          />
          <FeatureCard
            icon={Ticket}
            title="3. Travel Instantly"
            description="Your digital pass is generated immediately. Show it on your phone and travel!"
            isStep={true}
          />
        </div>
      </section>

      <section className="cta-section animate-fade-in">
        <h2>Ready to Simplify Your Commute?</h2>
        <p>
          Join thousands of happy Chennai commuters today and save time every
          day.
        </p>
        <button onClick={() => navigate("/form")} className="btn-primary">
          Apply for Pass
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
