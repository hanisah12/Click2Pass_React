import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';


const BusPassForm = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    aadhaar: "657687980983",
    passType: "",
    validFrom: "",
    validTill: ""
  });


  const handleChange = (event) => {
    const { name, value } = event.target;


    if (name === "validFrom") {
      const start = new Date(value);
      if (!isNaN(start.getTime())) {
        const till = new Date(start);
        till.setMonth(till.getMonth() + 1);
       
        if (till.getDate() !== start.getDate()) {
          till.setDate(0);
        }


        const validTillDate = till.toISOString().split("T")[0];


        setFormData({
          ...formData,
          validFrom: value,
          validTill: validTillDate,
        });
      } else {
        setFormData({
          ...formData,
          validFrom: value,
          validTill: "",
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const newPass = { ...formData, id: Date.now() };
    const oldPass = JSON.parse(localStorage.getItem("passes")) || [];
    localStorage.setItem("passes", JSON.stringify([...oldPass, newPass]));
    navigate("/success", { state: newPass });
  };


  return (
    <div className="form-v2-wrapper">
      <div className="form-v2-container">
        <div className="form-v2-card">
          <div className="form-v2-header">
            <h2 className="form-v2-title">Apply for Bus Pass</h2>
            <p className="form-v2-subtitle">Fill the details below to apply for your pass</p>
          </div>
          <form onSubmit={handleSubmit} className="form-v2-apply-form">
            <div className="form-v2-group">
              <label className="form-v2-label">Aadhaar Number</label>
              <input
                type="text"
                name="aadhaar"
                className="form-v2-input"
                placeholder="Enter 12-digit Aadhaar number"
                value={formData.aadhaar}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-v2-group">
              <label className="form-v2-label">Select Pass Type</label>
              <div className="form-v2-pass-options">
                <label className={`form-v2-pass-card ${formData.passType === "1000" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="passType"
                    value="1000"
                    required
                    onChange={handleChange}
                    className="form-v2-radio-input"
                  />
                  <div className="form-v2-pass-content">
                    <span className="form-v2-radio-circle"></span>
                    <div className="form-v2-pass-details">
                      <span className="form-v2-pass-price">₹1000 Pass</span>
                      <span className="form-v2-pass-desc">[valid in Non-AC buses]</span>
                    </div>
                  </div>
                  {formData.passType === "1000" && (
                    <div className="form-v2-check-badge">
                      <Check size={18} strokeWidth={4} color="white" />
                    </div>
                  )}
                </label>


                <label className={`form-v2-pass-card ${formData.passType === "2000" ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="passType"
                    value="2000"
                    onChange={handleChange}
                    className="form-v2-radio-input"
                  />
                  <div className="form-v2-pass-content">
                    <span className="form-v2-radio-circle"></span>
                    <div className="form-v2-pass-details">
                      <span className="form-v2-pass-price">₹2000 Pass</span>
                      <span className="form-v2-pass-desc">[valid in AC and Non-AC buses]</span>
                    </div>
                  </div>
                  {formData.passType === "2000" && (
                    <div className="form-v2-check-badge">
                      <Check size={18} strokeWidth={4} color="white" />
                    </div>
                  )}
                </label>
              </div>
            </div>


            <div className="form-v2-group">
              <label className="form-v2-label">Valid From</label>
              <input
                type="date"
                name="validFrom"
                className="form-v2-input"
                required
                onChange={handleChange}
              />
            </div>


            <div className="form-v2-group">
              <label className="form-v2-label">Valid Till</label>
              <input
                type="date"
                name="validTill"
                value={formData.validTill}
                className="form-v2-input"
                readOnly
              />
              <p className="form-v2-input-note">Validity is fixed for 1 month from the start date.</p>
            </div>


            <button type="submit" className="form-v2-submit-btn">
              Proceed to Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default BusPassForm;

