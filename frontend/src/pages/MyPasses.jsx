import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/my-passes.css";
import { useNavigate } from "react-router-dom";

const MyPasses = () => {
  const navigate = useNavigate();
  const [passes, setPasses] = useState([]);

  useEffect(() => {
    const storedPasses = JSON.parse(localStorage.getItem("passes")) || [];
    setPasses(storedPasses);
  }, []);

  const getDaysRemaining = (validTill) => {
    const today = new Date();
    const till = new Date(validTill);
    today.setHours(0, 0, 0, 0);
    till.setHours(0, 0, 0, 0);
    const diffTime = till - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getPassTypeLabel = (passType) => {
    return passType === 2000 || passType === "2000" ? "AC + Non-AC Pass" : "Non-AC Pass";
  };

  return (
    <div className="my-passes-page">
      <NavBar />
      <div className="main-layout">
        <main className="content">
          <section className="my-passes-section">
            <div className="section-header">
              <h2 className="section-title-1">My Active Passes</h2>
              <p className="section-subtitle">
                Your active bus passes and travel history
              </p>
            </div>

            <div id="passesContainer">
              {passes.length === 0 ? (
                <p
                  className="section-subtitle"
                  style={{ textAlign: "center", marginTop: "2rem" }}
                >
                  No active passes found. Apply for a new pass to get started.
                </p>
              ) : (
                passes.map((pass) => {
                  const daysRemaining = getDaysRemaining(pass.validTill);
                  const isExpired = daysRemaining < 0;

                  return (
                    <div key={pass.id} className={`pass-card ${isExpired ? "expired-card" : ""}`}>
                      <div className="pass-card-top-line"></div>

                      <div className="pass-card-header">
                        <h3 className="pass-title">
                          {getPassTypeLabel(pass.passType)}
                        </h3>
                        <div className={`pass-days-badge ${isExpired ? "badge-expired" : ""}`}>
                          {isExpired ? "Expired" : `${daysRemaining} Days Remaining`}
                        </div>
                      </div>

                      <div className="pass-card-body">
                        <div className="pass-dates">
                          <div className="date-group">
                            <p className="date-label">Valid From</p>
                            <p className="date-value">{pass.validFrom}</p>
                          </div>
                          <div className="date-group">
                            <p className="date-label">Valid Until</p>
                            <p className="date-value">{pass.validTill}</p>
                          </div>
                        </div>

                        <div className="pass-button-container">
                          <button
                            className="btn-view-pass"
                            onClick={() => navigate("/view-pass", { state: pass })}
                          >
                            View Pass
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MyPasses;
