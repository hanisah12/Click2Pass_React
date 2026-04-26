import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Zap, Clock, Bus, MapPinned, Shield, Ticket } from "lucide-react";
import "../style/landing-page.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="lp-v2-landing-page">
      <NavBar />

      {/* Hero Section */}
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
          <button className="lp-v2-hero-cta" onClick={() => navigate("/form")}>
            Apply for Your Pass Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="lp-v2-section">
        <h2 className="lp-v2-section-title">Why Choose Click2Pass?</h2>
        <div className="lp-v2-grid">
          <div className="lp-v2-card">
            <div className="lp-v2-card-icon">
              <Zap size={48} className="lp-v2-icon-zap" />
            </div>
            <h3 className="lp-v2-card-title">Instant & Digital</h3>
            <p className="lp-v2-card-text">
              No more paper tickets. Get your pass delivered to your phone
              instantly via Click2Pass.
            </p>
          </div>

          <div className="lp-v2-card">
            <div className="lp-v2-card-icon">
              <Clock size={48} className="lp-v2-icon-clock" />
            </div>
            <h3 className="lp-v2-card-title">Skip the Queues</h3>
            <p className="lp-v2-card-text">
              Buy your pass anytime, anywhere. No more waiting in long lines at
              Chennai MTC counters.
            </p>
          </div>

          <div className="lp-v2-card">
            <div className="lp-v2-card-icon">
              <Bus size={48} className="lp-v2-icon-bus" />
            </div>
            <h3 className="lp-v2-card-title">All Pass Types</h3>
            <p className="lp-v2-card-text">
              Apply for monthly passes easily in one convenient place.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="lp-v2-section lp-v2-steps-section">
        <div className="lp-v2-steps-container">
          <h2 className="lp-v2-section-title">Get Your Pass in 3 Easy Steps</h2>
          <div className="lp-v2-grid">
            <div className="lp-v2-card">
              <div className="lp-v2-card-icon">
                <MapPinned size={48} className="lp-v2-icon-map" />
              </div>
              <h3 className="lp-v2-card-title">1. Select Your Date</h3>
              <p className="lp-v2-card-text">
                Choose your start Date, and the type of pass you need.
              </p>
            </div>

            <div className="lp-v2-card">
              <div className="lp-v2-card-icon">
                <Shield size={48} className="lp-v2-icon-shield" />
              </div>
              <h3 className="lp-v2-card-title">2. Application Submission</h3>
              <p className="lp-v2-card-text">
                Submit bus pass applications easily through a simple online
                process.
              </p>
            </div>

            <div className="lp-v2-card">
              <div className="lp-v2-card-icon">
                <Ticket size={48} className="lp-v2-icon-ticket" />
              </div>
              <h3 className="lp-v2-card-title">3. Travel Instantly</h3>
              <p className="lp-v2-card-text">
                Your digital pass is generated immediately. Show it on your
                phone and travel!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="lp-v2-cta-section">
        <h2 className="lp-v2-cta-title">Ready to Simplify Your Commute?</h2>
        <p className="lp-v2-cta-subtitle">
          Join thousands of happy Chennai commuters today and save time every
          day.
        </p>
        <button className="lp-v2-cta-btn" onClick={() => navigate("/form")}>
          Apply for Pass
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
