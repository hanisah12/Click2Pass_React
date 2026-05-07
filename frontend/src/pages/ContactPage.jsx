import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE from "../config";
import "../style/contact-page.css";


const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
 
  const isLoggedIn = !!localStorage.getItem("user_id");


  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user.email) {
          setFormData((prev) => ({ ...prev, email: user.email }));
        }
      } catch (err) {
        console.log(err)
      }
    }
  }, []);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("user_id");
   
    if (!userId) {
      alert("Please login to send a message");
      navigate("/");
      return;
    }


    let userName = "User";
    try {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        const userObj = JSON.parse(userStr);
        if (userObj.name) userName = userObj.name;
      }
    } catch (err) {
      console.log(err)
    }


    const payload = {
      user_id: Number(userId),
      name: userName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };


    try {
      const response = await fetch(`${API_BASE}/messages/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
     
      if (!response.ok) {
        alert("Failed to send message");
        return;
      }
     
      alert("Message sent successfully!");
      setFormData((prev) => ({ ...prev, subject: "", message: "" }));
    } catch (error) {
      alert("Server not reachable");
    }
  };


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


          <form className="cp-v2-form" onSubmit={handleSubmit}>
            <div className="cp-v2-group">
              <label className="cp-v2-label">Your Email</label>
              <input
                type="email"
                name="email"
                className="cp-v2-input"
                value={formData.email}
                onChange={handleChange}
                readOnly={isLoggedIn}
                style={isLoggedIn ? { backgroundColor: "#e2e8f0", cursor: "not-allowed" } : {}}
                required
              />
            </div>


            <div className="cp-v2-group">
              <label className="cp-v2-label">Subject</label>
              <input
                type="text"
                name="subject"
                className="cp-v2-input"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>


            <div className="cp-v2-group">
              <label className="cp-v2-label">Message</label>
              <textarea
                name="message"
                className="cp-v2-textarea"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
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



