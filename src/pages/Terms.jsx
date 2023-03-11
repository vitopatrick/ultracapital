import React from "react";
import Condition from "../components/conditions/Condition";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Terms = () => {
  return (
    <div className="w-screen bg-bg text-white">
      <Navbar />
      <Condition />
      <Footer />
    </div>
  );
};

export default Terms;
