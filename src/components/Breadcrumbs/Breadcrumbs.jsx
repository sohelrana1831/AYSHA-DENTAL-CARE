import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ title }) => {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary to-secondary">
        <div className="text-center text-white py-16">
          <h1 className="text-1xl md:text-4xl py-2 font-Poppins font-semibold">
            {title}
          </h1>

          <span className="border-r-2 border-white px-2">
            <Link to="/">Home</Link>
          </span>
          <span className="px-2">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
