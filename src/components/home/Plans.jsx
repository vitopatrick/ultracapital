import React from "react";
import { plans } from "../Plan/plans";
import { FaChevronRight, FaCheck, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-cardColor relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Choose From Our Variety of{" "}
            <span className="gradient-text">Investment Options</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Select the perfect plan to match your investment goals
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const isPopular = index === 1; // Middle plan is popular

            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden card-hover animate-slideUp ${isPopular ? "md:scale-105" : ""
                  }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-primary px-4 py-1.5 rounded-full flex items-center gap-2 text-sm font-bold animate-pulseGlow">
                      <FaStar className="text-yellow-300" />
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className={`glass p-8 h-full ${isPopular ? "gradient-border" : ""}`}>
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold uppercase text-primary-blue mb-2">
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-bold gradient-text">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  {/* Plan Features */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 bg-primary-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary-green text-xs" />
                      </div>
                      <p>Minimum Amount ${plan.min}</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 bg-primary-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary-green text-xs" />
                      </div>
                      <p>Return of Investment {plan.roi}</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 bg-primary-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary-green text-xs" />
                      </div>
                      <p>24/7 Customer Support</p>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="w-5 h-5 bg-primary-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary-green text-xs" />
                      </div>
                      <p>Instant Withdrawals</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl uppercase text-sm font-bold flex items-center justify-center gap-3 transition-all duration-300 btn-modern group ${isPopular
                        ? "bg-gradient-primary text-white glow-hover hover:scale-105"
                        : "glass border border-white/20 hover:bg-white/10"
                      }`}
                    onClick={() => navigate("/register")}
                  >
                    Get Started
                    <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Plans;
