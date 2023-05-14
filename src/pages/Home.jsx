/*eslint-disable */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import HomeAbout from "../components/home/About";
import Plans from "../components/home/Plans";
import Hero from "../components/home/Hero";
import Reasons from "../components/home/Reasons";
import AboutReach from "../components/about/AboutReach";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
    const script = document.createElement("script");
    script.async = true;
    // script.src = "//code.tidio.co/tge0dwjtbbarvnmj2gerb9gbhosto2yl.js";

    document.body.append(script);
  }, []);

  return (
    <div className="bg-bg text-white w-screen">
      <Navbar />
      <Hero />
      <Reasons />
      <HomeAbout />
      <AboutReach />
      <Plans />
      <Footer />
    </div>
  );
};

export default Home;
