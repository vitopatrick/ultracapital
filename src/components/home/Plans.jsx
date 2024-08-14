import React from "react";
import { plans } from "../Plan/plans";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();

  return (
    <section className="w-[90%] mx-auto p-2">
      <div>
        <h4 className="text-center font-serif text-2xl md:text-3xl text-main_light underline capitalize">
          Choose from our variety of investment options
        </h4>
      </div>
      <div className="font-sans grid md:grid-cols-3 gap-4 my-4">
        {plans.map((plan) => (
          <div className="bg-cardColor p-3 rounded shadow overflow-hidden">
            <div>
              <h3 className="text-lg font-bold uppercase text-main">
                {plan.title}
              </h3>
            </div>
            <div className="flex gap-2 items-center font-bold my-4">
              <sub className="text-lg">$</sub>
              <h4 className="text-3xl text-main_light">{plan.price}</h4>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <p>Minimum Amount ${plan.min}</p>
              </div>
              <div className="flex items-center gap-2">
                <p>Return of investment {plan.roi}</p>
              </div>
              <div className="flex items-center gap-2">
                {/* <p>Duration {plan.Duration}</p> */}
              </div>
            </div>
            <button
              className="my-4 bg-[#1589FF] p-2 flex items-center gap-3 uppercase"
              onClick={() => navigate("/register")}
            >
              Get Started
              <FaChevronRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
