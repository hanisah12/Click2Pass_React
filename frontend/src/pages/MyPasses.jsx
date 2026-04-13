import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/my-passes.css";

import { useNavigate } from "react-router-dom";

const MyPasses = () => {

  const navigate = useNavigate()

  const [passes, setPasses] = useState([]);

  useEffect(()=> {
    const storedPasses = JSON.parse(localStorage.getItem("passes")) || [];
    setPasses(storedPasses);
  },[]);

  return (
    <div>
      <NavBar />
      <div className="main-layout">
    <main className="content">
      <section className="my-passes-section">
        <h2 className="section-title">My Active Passes</h2>
        <p className="section-subtitle">
          Your active bus passes and travel history
        </p>
        
        {passes.map((pass) => (
  <div key={pass.id}>
    <p>Pass Type: {pass.passType}</p>
    <p>Valid From: {pass.validFrom}</p>
    <p>Valid Till: {pass.validTill}</p>

    <button onClick={() => navigate("/view-pass", { state: pass })}>
      View Pass
    </button>
  </div>
))}
        

        {/* <div id="passesContainer"></div> */}

      </section>
    </main>
  </div>
      <Footer />
    </div>
  );
};

export default MyPasses;
