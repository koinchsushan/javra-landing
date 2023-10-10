import React from "react";
import Navbar from "../components/NavBar";
import ContactForm from "../components/ContactForm";

const LandingPage: React.FC = () => {
  return (
    <div className="main-container">
      <Navbar />
      <hr className="border-2" />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
