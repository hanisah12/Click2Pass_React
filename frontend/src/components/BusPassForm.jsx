import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const BusPassForm = () => {
  const navigate = useNavigate();

  const [formData , setFormData] = useState({
    aadhaar : "",
    passType : "",
    validFrom : "",
    validTill : ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target

    if(name === "validFrom"){
      const start = new Date(value);
      start.setMonth(start.getMonth()+1);

      const validTillDate = start.toISOString().split("T")[0];

      setFormData ({
        ...formData,
        validFrom : value,
        validTill : validTillDate,
      });
    } else {
      setFormData({
        ...formData,
        [name] : value
      })
    }
    // setFormData({
    //   ...formData,
    //   [event.target.name] : event.target.value
    // })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const newPass = {
    ...formData,
    id : Date.now()
  };

  const oldPass = JSON.parse(localStorage.getItem("passes")) || [];

  localStorage.setItem("passes",JSON.stringify([...oldPass,newPass]));

  navigate("/success",{state : newPass})
  }
  return (
    <div>
        <div className="form-container">
        <div className="form-card">
          <h2 className="form-title">Apply for Bus Pass</h2>
          <p className="form-subtitle">
            Fill the details below to apply for your pass
          </p>
          <form onSubmit={handleSubmit} id="apply-pass-form">
            <div className="form-group">
              <label htmlFor="id-proof">Aadhaar Number</label>
              <input
                type="text"
                id="id-proof"
                name="aadhaar"
                placeholder="Enter 12-digit Aadhaar number"
                maxLength={12}
                pattern="[0-9]{12}" onChange={handleChange}
                required
              />
            </div>

            <label htmlFor="main-label">Select Pass Type</label>
            <div className="pass-container">
              <div className="pass-type-group">
                <label className="pass-option">
                  <input type="radio" name="passType" value={1000} required onChange={handleChange} />
                  <span>
                    ₹1000 Pass<small>[valid in Non-AC buses]</small>{" "}
                  </span>
                </label>

                <label className="pass-option">
                  <input type="radio" name="passType" value={2000} onChange={handleChange}/>
                  <span>
                    ₹2000 Pass <small>[valid in AC and Non-AC buses]</small>
                  </span>
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="valid-from">Valid From</label>
              <input type="date" id="valid-from" name="validFrom" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label htmlFor="validTill">Valid Till</label>
              <input
                type="date"
                name="validTill"
                value={formData.validTill}
                id="valid-till"
                readOnly
              
              />
            </div>

            <button type="submit" className="btn-primary">
              Proceed to Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BusPassForm