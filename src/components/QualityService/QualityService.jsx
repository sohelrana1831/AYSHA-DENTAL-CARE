import React from "react";
import qualityServiceImg from "../../images/dental.jpg";
import teeth1 from "../../images/teeth1.jpg";
const QualityService = () => {
  return (
    <>
      <div className="container lg:flex py-16">
        <div className="h-full lg:w-2/3 w-full">
          <img className="w-full" src={qualityServiceImg} alt="" />
        </div>
        <div className="lg:ml-8">
          <h1 className="text-3xl font-Poppins font-semibold">
            15 Years of Quality Service in{" "}
            <span className="text-primary">Dental Practice</span>
          </h1>
          <p className="py-8">
            To have your lawn look its best, trust Landscaping & Garening, Inc.
            to get the job done right. We take a great deal of pride in the
            quality of our work. we understand what complete customer
            satisfaction means customer satisfaction.{" "}
          </p>
          <div className="lg:flex justify-between">
            <ul>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  Trained Staff
                </h1>
              </li>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  We provide quality Treatment
                </h1>
              </li>
              <li className="flex">
                <i className="far fa-hand-point-right text-3xl text-green-500"></i>
                <h1 className="text-lg pb-8 px-4 uppercase font-bold leading-snug text-black hover:opacity-75">
                  Best Price
                </h1>
              </li>
            </ul>
            <div>
              <img src={teeth1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityService;
