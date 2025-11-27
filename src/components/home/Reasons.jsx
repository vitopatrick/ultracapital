import React from "react";
import { reasons } from "./reason";

const Reasons = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Ultra Capital</span> Gets You Started Easily
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ultra Capital is one of the leading trading platforms, offering trading
            capacities in the trade industry
          </p>
        </div>

        {/* Reason Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 card-hover group animate-slideUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 glow-hover">
                  {reason.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h4 className="text-xl font-bold text-white font-serif">
                  {reason.name}
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  {reason.about}
                </p>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
