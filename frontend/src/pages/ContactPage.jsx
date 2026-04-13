import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/contact-page.css"

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <div className="form-container">
        <div className="form-card">
          <h2 className="form-title">Get in Touch</h2>
          <p className="form-subtitle">Have a question or feedback? Let us know!</p>

          <form action="#">
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
