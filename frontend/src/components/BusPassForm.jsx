import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import API_BASE from "../config";

const BusPassForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id_proof: "",
    pass_type: "",
    valid_from: "",
    valid_till: "",
  });
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    if (user_id && token) {
      fetch(`${API_BASE}/passes/user/${user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((passes) => {
          if (Array.isArray(passes) && passes.length > 0) {
            const latestPass = passes[passes.length - 1];
            setFormData((prev) => ({ ...prev, id_proof: latestPass.id_proof }));
            setIsLocked(true);
          }
        })
        .catch((err) => console.error("Error fetching previous record:", err));
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "valid_from") {
      const start = new Date(value);
      if (!isNaN(start.getTime())) {
        const till = new Date(start);
        till.setMonth(till.getMonth() + 1);

        if (till.getDate() !== start.getDate()) till.setDate(0);

        const validTillDate = till.toISOString().split("T")[0];
        setFormData({
          ...formData,
          valid_from: value,
          valid_till: validTillDate,
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAadhaarBlur = async () => {
    if (isLocked || formData.id_proof.length !== 12) return;

    try {
      const res = await fetch(`${API_BASE}/passes/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (res.ok) {
        const allPasses = await res.json();
        const user_id = localStorage.getItem("user_id");
        const isUsed = allPasses.some(
          (p) =>
            p.id_proof === formData.id_proof &&
            String(p.user_id) !== String(user_id),
        );

        if (isUsed) {
          alert("This Aadhaar number is already registered with another user.");
          setFormData({ ...formData, id_proof: "" });
        }
      }
    } catch (err) {
      console.error("Validation error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");

    if (!user_id) {
      alert("Please login first");
      return;
    }

    const data = {
      user_id: Number(user_id),
      pass_type: formData.pass_type,
      id_proof: formData.id_proof,
      valid_from: formData.valid_from,
      valid_till: formData.valid_till,
    };

    try {
      const res = await fetch(`${API_BASE}/passes/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        localStorage.setItem("last_pass", JSON.stringify(result));
        navigate("/success", { state: result });
      } else {
        alert(result.detail || "Submission failed");
      }
    } catch (err) {
      alert("Server error. Please try again.");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="form-v2-wrapper">
      <div className="form-v2-container">
        <div className="form-v2-card">
          <div className="form-v2-header">
            <h2 className="form-v2-title">Apply for Bus Pass</h2>
            <p className="form-v2-subtitle">
              Fill the details below to apply for your pass
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form-v2-apply-form">
            <div className="form-v2-group">
              <label className="form-v2-label">Aadhaar Number</label>
              <input
                type="text"
                name="id_proof"
                className={`form-v2-input ${isLocked ? "readonly-input" : ""}`}
                placeholder="Enter 12-digit Aadhaar number"
                value={formData.id_proof}
                onChange={handleChange}
                onBlur={handleAadhaarBlur}
                readOnly={isLocked}
                pattern="[0-9]{12}"
                required
              />
              {isLocked && (
                <small
                  style={{ color: "#666", display: "block", marginTop: "5px" }}
                >
                  Aadhaar number is locked to your previous record.
                </small>
              )}
            </div>

            <div className="form-v2-group">
              <label className="form-v2-label">Select Pass Type</label>
              <div className="form-v2-pass-options">
                <label
                  className={`form-v2-pass-card ${formData.pass_type === "1000" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="pass_type"
                    value="1000"
                    required
                    onChange={handleChange}
                    className="form-v2-radio-input"
                  />
                  <div className="form-v2-pass-content">
                    <span className="form-v2-radio-circle"></span>
                    <div className="form-v2-pass-details">
                      <span className="form-v2-pass-price">₹1000 Pass</span>
                      <span className="form-v2-pass-desc">
                        [valid in Non-AC buses]
                      </span>
                    </div>
                  </div>
                  {formData.pass_type === "1000" && (
                    <div className="form-v2-check-badge">
                      <Check size={18} strokeWidth={4} color="white" />
                    </div>
                  )}
                </label>

                <label
                  className={`form-v2-pass-card ${formData.pass_type === "2000" ? "selected" : ""}`}
                >
                  <input
                    type="radio"
                    name="pass_type"
                    value="2000"
                    onChange={handleChange}
                    className="form-v2-radio-input"
                  />
                  <div className="form-v2-pass-content">
                    <span className="form-v2-radio-circle"></span>
                    <div className="form-v2-pass-details">
                      <span className="form-v2-pass-price">₹2000 Pass</span>
                      <span className="form-v2-pass-desc">
                        [valid in AC and Non-AC buses]
                      </span>
                    </div>
                  </div>
                  {formData.pass_type === "2000" && (
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
                name="valid_from"
                className="form-v2-input"
                min={today}
                value={formData.valid_from}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-v2-group">
              <label className="form-v2-label">Valid Till</label>
              <input
                type="date"
                name="valid_till"
                value={formData.valid_till}
                className="form-v2-input"
                style={{ backgroundColor: "#f0f0f0", cursor: "not-allowed" }}
                readOnly
              />
              <small
                style={{ color: "#666", display: "block", marginTop: "5px" }}
              >
                Validity is fixed for 1 month from the start date.
              </small>
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
