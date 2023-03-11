import React from "react";
import { abouts } from "./about";

const AboutBody = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-6">
      {abouts.map((about) => (
        <div>
          <div className="my-3 text-3xl font-serif text-main_light underline">
            {about.name}
          </div>
          <div className="leading-loose">{about.story}</div>
        </div>
      ))}
    </div>
  );
};

export default AboutBody;
