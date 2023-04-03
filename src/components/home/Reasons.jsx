import React from "react";
import { reasons } from "./reason";

const Reasons = () => {
  return (
    <section className="p-4 my-10">
      <div>
        <h4 className="font-serif text-3xl text-main_light">
          ultra capital gets you started Easily
        </h4>
        <p className="capitalize my-2">
          Join the best stock trading platform today and start multiplying
          income
        </p>
      </div>
      <div className="flex gap-3 p-3 md:flex-row flex-col">
        {reasons.map((reason) => (
          <div className="flex flex-col gap-4 items-center justify-center bg-card rounded p-4">
            <div>{reason.icon}</div>
            <div className="text-center">
              <h4 className=" text-main_light font-serif">{reason.name}</h4>
              <p>{reason.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
