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
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6411074731ebfa0fe7f29c8e/1grh88sin";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
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


