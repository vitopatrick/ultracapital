import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const HomeAbout = () => {
  const features = [
    "Our mission is to help you make better trading decisions faster.",
    "We are committed to creating efficient and powerful services for those who want to take charge of their own trades and investments.",
    "Ultra Capital partners with professional traders around the globe to provide you a hub of information, education, strategy, live streams, social media ecosystems and buy/sell signals for self-directed traders and investors.",
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bgColor via-cardColor to-bgColor"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fadeIn">
            <h3 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Ultra Capital is a{" "}
              <span className="gradient-text">Self-Directed Trader's</span>{" "}
              Nerve Center
            </h3>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start group animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-primary-green text-xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                to="/register"
                className="group inline-flex items-center gap-3 bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold uppercase text-sm btn-modern glow-hover transition-all duration-300 hover:scale-105"
              >
                Start Today
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden gradient-border">
              <img
                src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Trading Platform"
                className="w-full h-auto rounded-2xl"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-primary-green/20 rounded-2xl"></div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl shadow-2xl animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <FaCheckCircle className="text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
