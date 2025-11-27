import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChartLine } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-bgColor">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-mesh animate-gradient"></div>

        {/* Image Overlay */}
        <div
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="absolute inset-0 opacity-20"
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bgColor/80 via-bgColor/60 to-bgColor"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="flex items-center justify-center flex-col text-center space-y-8 animate-fadeIn">
          {/* Badge */}
          <div className="glass px-6 py-2 rounded-full flex items-center gap-2 animate-float">
            <FaChartLine className="text-primary-blue" />
            <span className="text-sm font-medium">Trusted by 10,000+ Traders</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
            Welcome to{" "}
            <span className="gradient-text">Ultra Capital</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed px-4">
            Grow your digital assets portfolio and skyrocket to the sky. The
            moon is your starting point. Connect with thousands of self-directed
            traders and investors through live stream, chat and social media
            ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/register"
              className="group bg-gradient-primary text-white px-8 py-4 rounded-xl uppercase text-sm font-bold btn-modern glow-hover transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started With Us Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/about"
              className="glass text-white px-8 py-4 rounded-xl uppercase text-sm font-bold transition-all duration-300 hover:bg-white/10 border border-white/20"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl w-full">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">$2B+</div>
              <div className="text-gray-400 text-sm mt-2">Trading Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">150+</div>
              <div className="text-gray-400 text-sm mt-2">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
              <div className="text-gray-400 text-sm mt-2">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gradient-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
