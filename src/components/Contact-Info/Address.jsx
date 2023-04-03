import React from "react";
import { IconContext } from "react-icons";
import { FaMapMarker, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Address = () => {
  return (
    <IconContext.Provider value={{ color: "#60a5fa", size: "1.8rem" }}>
      <h4 className="text-center text-2xl font-serif mt-6">
        You can also reach us via:
      </h4>
      <div className="p-5">
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-card p-5 rounded flex flex-col items-center justify-center">
            <div>
              <FaMapMarker />
            </div>
            <div className="text-center my-2">
              <h1 className="fs-4">Address</h1>
              <p>Atlanta,Georgia United States</p>
            </div>
          </div>
          <div className="bg-card p-5 rounded flex flex-col items-center justify-center">
            <div>
              <FaEnvelope />
            </div>
            <div className="text-center my-2">
              <h1 className="fs-4">Email</h1>
              <p>support@ultracapital.live</p>
            </div>
          </div>
          <div className="bg-card p-5 rounded flex flex-col items-center justify-center">
            <div>
              <FaPhoneAlt />
            </div>
            <div className="text-center my-2">
              <h1 className="fs-4">Phone</h1>
              <p>
                Call Us Now <span>+1 (404) 500-6199</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Address;
