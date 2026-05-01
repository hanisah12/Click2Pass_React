import React from "react";
import "../style/contact-page.css";

const ContactPage = () => {
  return (
    <div className="cp-v2-page">
   

      <div className="cp-v2-wrapper">
        <div className="cp-v2-card">
          <header className="cp-v2-header">
            <h2 className="cp-v2-title">Get in Touch</h2>
            <p className="cp-v2-subtitle">
              Have a question or feedback? Let us know!
            </p>
          </header>

          <form className="cp-v2-form" onSubmit={(e) => e.preventDefault()}>
            <div className="cp-v2-group">
              <label className="cp-v2-label">Your Email</label>
              <input
                type="email"
                className="cp-v2-input"
                defaultValue="hanisha16@gmail.com"
                readOnly
                required
              />
            </div>

            <div className="cp-v2-group">
              <label className="cp-v2-label">Subject</label>
              <input
                type="text"
                className="cp-v2-input"
                placeholder="What is this regarding?"
                required
              />
            </div>

            <div className="cp-v2-group">
              <label className="cp-v2-label">Message</label>
              <textarea
                className="cp-v2-textarea"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="cp-v2-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

 
    </div>
  );
};

export default ContactPage;
