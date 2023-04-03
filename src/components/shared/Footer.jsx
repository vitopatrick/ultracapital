import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-card">
      <div className="flex flex-col md:flex-row p-5 md:items-center gap-3">
        <div>
          <h4 className="capitalize text-main_light font-serif text-2xl py-3">
            ultra capital
          </h4>
          <p className="w-full md:w-[50%] my-3">
            We are a US Registered company found by a group of Wall Street high
            frequency traders. We have 30 years of combined experience trading
            the stocks and digital market using cutting edge machine learning
            algorithms.
          </p>
        </div>
        <div className="flex gap-4">
          <div>
            <FaInstagramSquare size={"40px"} />
          </div>
          <div>
            <FaFacebookSquare size={"40px"} />
          </div>
          <div>
            <FaTwitterSquare size={"40px"} />
          </div>
          <div>
            <FaLinkedin size={"40px"} />
          </div>
        </div>
      </div>
      <div className="p-4 bg-bg text-center capitalize">
        © copyright {new Date().getFullYear()} ultra capital
      </div>
    </footer>
  );
};

export default Footer;
