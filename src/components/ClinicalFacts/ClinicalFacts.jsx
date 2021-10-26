import React from "react";
import bgImg2 from "./../../images/bg_3.jpg";
const ClinicalFacts = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center  w-full h-80"
        style={{
          backgroundImage: `url(${bgImg2})`,
        }}
      >
        <div className="opacity-80 absolute bg-black  w-full h-80"></div>
        <div className="container relative py-8 text-center text-white">
          <h1 className="text-4xl py-2 font-Poppins font-semibold">
            Our <span className="text-primary">Clinical</span> Facts
          </h1>
          <p>
            If your smile is not becoming to you, then you should be coming to
            me!
          </p>
          <div className="flex justify-between items-center py-16">
            <div className="">
              <h1 className="text-4xl font-Poppins font-extrabold">08</h1>
              <p className="text-secondary italic text-2xl font-Roboto font-semibold">
                Years Experience
              </p>
            </div>

            <div className="">
              <h1 className="text-4xl font-Poppins font-extrabold">25K</h1>
              <p className="text-secondary italic text-2xl font-Roboto font-semibold">
                Happy Customers
              </p>
            </div>

            <div className="">
              <h1 className="text-4xl font-Poppins font-extrabold">100%</h1>
              <p className="text-secondary italic text-2xl font-Roboto font-semibold">
                Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicalFacts;
