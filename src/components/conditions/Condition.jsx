import React from "react";
import { condition } from "./Conditions";

const Condition = () => {
  return (
    <div className="md:p-8 p-4">
      <div>
        <h5 className="font-serif text-xl md:text-3xl underline text-main_light">
          These are the following terms and conditions{" "}
        </h5>
        <div className="flex flex-col gap-5 mt-5">
          {condition.map((c) => (
            <p key={c.id} className="flex items-center gap-3">
              <img src="/chevron-down.png" alt="" /> {c.term}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Condition;
