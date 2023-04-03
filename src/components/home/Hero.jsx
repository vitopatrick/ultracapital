import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      style={{
        background: `url('https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-[400px] relative"
    >
      <div className="w-full h-full absolute bg-bg/70 left-0 top-0">
        <div className="flex items-center justify-center flex-col my-5 text-center">
          <h4 className="font-serif md:text-4xl text-3xl my-3">
            Welcome to ultra capital
          </h4>
          <p className="capitalize p-2">
            grow your digital assets portfolio and skyrocket to the sky, the
            moon is your starting point, Connect with thousands of self-directed
            traders and investors through live stream, chat and social media
            ecosystem.
          </p>
          <Link
            to="/register"
            className="bg-main text-main_light p-3 uppercase"
          >
            Get Started With us now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
