import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../style/my-passes.css";

const MyPasses = () => {
  const navigate = useNavigate();
  const [passes, setPasses] = useState([]);

  useEffect(() => {
    const storedPasses = JSON.parse(localStorage.getItem("passes")) || [];
    // If no passes in storage, let's add some mock data if needed for display
    setPasses(storedPasses);
  }, []);

  const getDaysRemaining = (validFrom, validTill) => {
    if (!validTill || !validFrom) return 0;
    const today = new Date();
    const start = new Date(validFrom);
    const till = new Date(validTill);

    today.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);
    till.setHours(0, 0, 0, 0);

    const referenceDate = today < start ? start : today;
    const diffTime = till - referenceDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };

  const getPassTypeLabel = (passType) => {
    return passType === 2000 || passType === "2000"
      ? "AC + Non-AC Pass"
      : "Non-AC Pass";
  };

  return (
    <div className="mp-v2-page">
      <NavBar />

      <div className="mp-v2-wrapper">
        <header className="mp-v2-header">
          <h2 className="mp-v2-title">My Active Passes</h2>
          <p className="mp-v2-subtitle">
            Your active bus passes and travel history
          </p>
        </header>

        <div className="mp-v2-container">
          {passes.length === 0 ? (
            <div className="mp-v2-card" style={{ textAlign: "center" }}>
              <p className="mp-v2-subtitle">
                No active passes found. Apply for a new pass to get started.
              </p>
            </div>
          ) : (
            passes.map((pass) => {
              const daysRemaining = getDaysRemaining(
                pass.validFrom,
                pass.validTill,
              );
              const isExpired = daysRemaining < 0;

              return (
                <div
                  key={pass.id}
                  className={`mp-v2-card ${isExpired ? "expired" : ""}`}
                >
                  <div className="mp-v2-card-header">
                    <h3 className="mp-v2-pass-title">
                      {getPassTypeLabel(pass.passType)}
                    </h3>
                    <div
                      className={`mp-v2-status ${isExpired ? "expired" : "remaining"}`}
                    >
                      {isExpired
                        ? "Expired"
                        : `${daysRemaining} Days Remaining`}
                    </div>
                  </div>

                  <div className="mp-v2-details">
                    <div className="mp-v2-detail-group">
                      <span className="mp-v2-label">Valid From</span>
                      <span className="mp-v2-value">{pass.validFrom}</span>
                    </div>
                    <div className="mp-v2-detail-group">
                      <span className="mp-v2-label">Valid Until</span>
                      <span className="mp-v2-value">{pass.validTill}</span>
                    </div>
                  </div>

                  <button
                    className="mp-v2-btn"
                    onClick={() => navigate("/view-pass", { state: pass })}
                  >
                    View Pass
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyPasses;
