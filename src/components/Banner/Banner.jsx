import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="container">
        <h1 className="text-6xl capitalize text-gray-800 font-medium mb-4">
          Eat wisely, smile nicely
        </h1>
        <p className="w-50">
          Relax, this is going to be so easy. The smart way to find a dentist.{" "}
          <br />
          Get matched with a great dentist today. Seriously, it’s time.
        </p>
        <div className="mt-12">
          <Link
            to="/appointment"
            className="bg-primary border border-primary text-white px-3 py-2 font-medium rounded hover:bg-transparent hover:text-primary transition"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
