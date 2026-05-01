import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PassCard from "../components/PassCard";
import "../style/my-passes.css";


const MyPasses = () => {
  const navigate = useNavigate();
  const [passes, setPasses] = useState([]);


  useEffect(() => {
    const storedPasses = JSON.parse(localStorage.getItem("passes")) || [];
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
            passes.map((pass) => (
              <PassCard
                key={pass.id}
                pass={pass}
                getPassTypeLabel={getPassTypeLabel}
                getDaysRemaining={getDaysRemaining}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};


export default MyPasses;



