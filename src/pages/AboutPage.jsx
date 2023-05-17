import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import AboutHeader from "../components/about/AboutHeader";
import AboutBody from "../components/about/AboutBody";
import AboutReach from "../components/about/AboutReach";

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <section className="w-screen bg-bgColor text-white">
      <Navbar />
      <AboutHeader />
      <AboutBody />
      <AboutReach />
      <Footer />
    </section>
  );
};

export default AboutPage;
