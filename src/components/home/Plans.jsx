import React from "react";
import { plans } from "../Plan/plans";
import { FaChevronRight, FaCheck, FaStar, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bgColor via-cardColor to-bgColor"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 bg-primary-blue/10 border border-primary-blue/20 rounded-full px-6 py-2 mb-6">
            <FaRocket className="text-primary-blue" />
            <span className="text-sm font-semibold text-primary-blue uppercase">Investment Plans</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select the investment plan that aligns with your financial goals and start earning today
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => {
            const isPopular = index === 1; // Middle plan is popular

            return (
              <div
                key={index}
                className={`relative group animate-slideUp ${isPopular ? "md:-mt-4" : ""
                  }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-primary px-6 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg animate-pulseGlow">
                      <FaStar className="text-yellow-300" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${isPopular
                    ? "bg-gradient-to-br from-primary-blue/10 to-primary-green/10 border-2 border-primary-blue/30"
                    : "bg-cardColor/50 border border-white/10"
                    } backdrop-blur-sm hover:scale-105 hover:shadow-2xl`}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                  {/* Card Content */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-gray-400">
                        {plan.title}
                      </h3>
                      <div className="mb-2">
                        <span className="text-3xl md:text-3xl font-bold gradient-text">
                          {plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">ROI: {plan.roi}</p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-primary mb-8"></div>

                    {/* Plan Features */}
                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Minimum Investment</p>
                          <p className="text-gray-400 text-sm">${plan.min}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Return Period</p>
                          <p className="text-gray-400 text-sm">Daily Returns</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">24/7 Support</p>
                          <p className="text-gray-400 text-sm">Dedicated assistance</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Instant Withdrawals</p>
                          <p className="text-gray-400 text-sm">Anytime, anywhere</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-6 h-6 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                          <FaCheck className="text-white text-xs" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Secure Platform</p>
                          <p className="text-gray-400 text-sm">Bank-level security</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-4 px-6 rounded-xl font-bold uppercase text-sm flex items-center justify-center gap-3 transition-all duration-300 group/btn ${isPopular
                        ? "bg-gradient-primary text-white shadow-lg hover:shadow-2xl hover:scale-105"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                        }`}
                      onClick={() => navigate("/register")}
                    >
                      Get Started Now
                      <FaChevronRight className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>

                  {/* Corner decoration */}
                  {isPopular && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 blur-3xl"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
          <p className="text-gray-400 mb-4">
            Not sure which plan is right for you?
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="glass border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
