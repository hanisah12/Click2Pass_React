import React from "react";
import "../style/form-page.css"
import NavBar from "../components/NavBar";
import BusPassForm from "../components/BusPassForm";
import Footer from "../components/Footer";


const FormPage = () => {
  return (
    <div>
      <NavBar/>
      <BusPassForm />
      <Footer/>
    </div>
  );
};

export default FormPage;

