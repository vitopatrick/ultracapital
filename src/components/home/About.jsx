import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section className="bg-card p-3">
      <div className="gap-5 flex flex-col md:flex-row w-[90%] mx-auto p-3">
        <div className="flex flex-col gap-4 self-center">
          <h3 className="font-serif text-2xl md:text-4xl text-main_light">
            Paramount Assets is a Self-Directed Trader’s Nerve Center
          </h3>
          <div className="flex gap-2 items-center">
            <div>
              <img src="/chevron-down.png" alt="" />
            </div>
            <p>
              Our mission is to help you make better trading decisions faster.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src="/chevron-down.png" alt="" />
            </div>
            <p>
              we are committed to creating efficient and powerful services for
              those who what to take charge of their own trades and investments.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <img src="/chevron-down.png" alt="" />
            </div>
            <p>
              Paramount Assets partners with professional traders around the
              globe to provide you a hub of information, education, strategy,
              live streams, social media ecosystsems and buy/sell signals for
              self-directed traders and investors.
            </p>
          </div>
          <div className="my-3">
            <Link to="/register" className="w-fit p-3 bg-main">
              Start Today
            </Link>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
