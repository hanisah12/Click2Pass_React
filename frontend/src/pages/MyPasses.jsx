import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PassCard from "../components/PassCard";
import "../style/my-passes.css";
import API_BASE from "../config";

const MyPasses = () => {
  const navigate = useNavigate();
  const [passes, setPasses] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    if (!userId) {
      navigate("/login");
      return;
    }
    fetch(`${API_BASE}/passes/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPasses(data))
      .catch((err) => console.log(err));
  }, [navigate]);

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

    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
        </header>

        <div className="mp-v2-container">
          {passes.length === 0 ? (
            <p>No passes found</p>
          ) : (
            passes.map((pass) => (
              <PassCard
                key={pass.pass_id}
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
