import React from "react";
import CountUp from "react-countup";

const AboutReach = () => {
  return (
    <section className="p-6">
      <h4 className="font-serif text-2xl md:text-3xl my-3 text-main_light capitalize">
        Our Numbers Speak
      </h4>
      <div className="grid md:grid-cols-3 gap-3">
        <div className="bg-card p-5 rounded shadow flex flex-col items-center justify-center gap-2">
          <div>
            <CountUp
              end={4000}
              separator=","
              enableScrollSpy
              prefix="+"
              className="text-4xl font-serif text-main_light"
            />
          </div>
          <div>Current Users</div>
        </div>
        <div className="bg-card p-5 rounded shadow flex flex-col items-center justify-center gap-2">
          <div>
            <CountUp
              end={30000}
              separator=","
              enableScrollSpy
              prefix="+"
              className="text-4xl font-serif text-main_light"
            />
          </div>
          <div>Successful Trades</div>
        </div>
        <div className="bg-card rounded flex flex-col items-center justify-center p-5">
          <div>
            <CountUp
              end={50000}
              separator=","
              enableScrollSpy
              prefix="+"
              className="text-4xl font-serif text-main_light"
            />
          </div>
          <div>Active Trades</div>
        </div>
      </div>
    </section>
  );
};

export default AboutReach;
