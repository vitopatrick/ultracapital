import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-bgColor relative overflow-hidden">
      {/* Gradient Border Top */}
      <div className="h-1 bg-gradient-primary"></div>

      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row p-8 md:p-12 md:items-start md:justify-between gap-8">
          {/* Company Info */}
          <div className="flex-1">
            <h4 className="capitalize gradient-text font-serif text-3xl md:text-4xl py-3 font-bold">
              ultra capital
            </h4>
            <p className="text-gray-400 leading-relaxed max-w-md my-4">
              We are a US Registered company founded by a group of Wall Street high
              frequency traders. We have 30 years of combined experience trading
              the stocks and digital market using cutting edge machine learning
              algorithms.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-semibold text-lg mb-2">Connect With Us</h5>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagramSquare size={40} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-blue transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebookSquare size={40} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-cyan transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitterSquare size={40} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-green transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 p-6 text-center">
          <p className="text-gray-400 capitalize">
            © copyright {new Date().getFullYear()} ultra capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
