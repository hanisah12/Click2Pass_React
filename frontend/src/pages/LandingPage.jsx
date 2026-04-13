import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/landing-page.css"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="hero-section">
        <div className="hero-content">
          <div className="city-badge">
            <i className="fas fa-location-dot"></i> Exclusively for Chennai
          </div>
          <h1>Seamless Travel. Instant Passes.</h1>
          <p>
            Get your monthly bus passes in just a few clicks. Welcome to
            Click2Pass, your digital solution for easy commuting in
            <strong>Chennai</strong>.
          </p>
          <button onClick={()=> navigate("/form")} className="hero-cta" id="applyPassBtn">
            Apply for Your Pass Now
          </button>
        </div>
      </div>

      <section className="features-section">
        <h2>Why Choose Click2Pass?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-bolt"></i>
            <h3>Instant & Digital</h3>
            <p>
              No more paper tickets. Get your pass delivered to your phone
              instantly via Click2Pass.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>Skip the Queues</h3>
            <p>
              Buy your pass anytime, anywhere. No more waiting in long lines at
              Chennai MTC counters.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-bus-simple"></i>
            <h3>All Pass Types</h3>
            <p>Apply for monthly passes easily in one convenient place.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>Get Your Pass in 3 Easy Steps</h2>
        <div className="how-it-works-grid">
          <div className="how-it-works-step">
            <i className="fas fa-map-location-dot"></i>
            <h3>1. Select Your Date</h3>
            <p>Choose your start Date, and the type of pass you need.</p>
          </div>
          <div className="how-it-works-step">
            <i className="fas fa-shield-halved"></i>
            <h3>2. Application Submission</h3>
            <p>
              Submit bus pass applications easily through a simple online
              process.
            </p>
          </div>
          <div className="how-it-works-step">
            <i className="fas fa-ticket"></i>
            <h3>3. Travel Instantly</h3>
            <p>
              Your digital pass is generated immediately. Show it on your phone
              and travel!
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Simplify Your Commute?</h2>
        <p>
          Join thousands of happy Chennai commuters today and save time every
          day.
        </p>
        <button id="createAccountBtn" className="hero-cta">
          Create Your Account
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
