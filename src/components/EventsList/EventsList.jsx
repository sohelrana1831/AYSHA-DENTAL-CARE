import React from "react";
import { Link } from "react-router-dom";
import eventBg from "../../images/event-bg.png";
const EventsList = () => {
  return (
    <div
      className="bg-no-repeat bg-center bg-contain"
      style={{
        backgroundImage: `url(${eventBg})`,
      }}
    >
      <div className="container py-16">
        <div className="py-8 text-center">
          <h1 className="text-center text-4xl font-bold font-Roboto">
            Upcoming Events
          </h1>
          <p className="text-gray-400 py-2">
            Events can help build commitment and strengthen community support
            and understanding
          </p>
        </div>

        <div className="shadow-2xl mb-8 border-l-2 border-opacity-100 rounded-lg border-primary px-8 py-8 bg-white transform transition duration-200 hover:scale-105">
          <p className="font-Roboto">
            <span>Nov 14, 2021</span> <span> 12:00 am - 2:30 pm </span> New York
          </p>
          <div className="flex  items-center justify-between">
            <h1 className="text-lg font-Poppins font-bold py-2 hover:text-primary">
              <Link to="#">Dental Care For Life </Link>
            </h1>
            <h1 className="text-right hover:text-primary">
              <Link to="#" className="flex">
                <span className="px-2">View More</span>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            </h1>
          </div>
        </div>

        <div className="shadow-2xl mb-8 border-l-2 border-opacity-100 rounded-lg border-primary px-8 py-8 bg-white transform transition duration-200 hover:scale-105">
          <p className="font-Roboto">
            <span>Jan 10, 2022</span> <span> 12:00 am - 2:30 pm </span> New York
          </p>
          <div className="flex  items-center justify-between">
            <h1 className="text-lg font-Poppins font-bold py-2 hover:text-primary">
              <Link to="#">The Future of Care </Link>
            </h1>
            <h1 className="text-right hover:text-primary">
              <Link to="#" className="flex">
                <span className="px-2">View More</span>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            </h1>
          </div>
        </div>

        <div className="shadow-2xl mb-8 border-l-2 border-opacity-100 rounded-lg border-primary px-8 py-8 bg-white transform transition duration-200 hover:scale-105">
          <p className="font-Roboto">
            <span>Jan 25, 2022</span> <span> 12:00 am - 2:30 pm </span> New York
          </p>
          <div className="flex  items-center justify-between">
            <h1 className="text-lg font-Poppins font-bold py-2 hover:text-primary">
              <Link to="#">Your Health, Our Mission </Link>
            </h1>
            <h1 className="text-right hover:text-primary">
              <Link to="#" className="flex">
                <span className="px-2">View More</span>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            </h1>
          </div>
        </div>

        <div className="shadow-2xl mb-8 border-l-2  border-opacity-100  rounded-lg border-primary px-8 py-8 bg-white transform transition duration-200 hover:scale-105">
          <p className="font-Roboto">
            <span>Feb 05, 2022</span> <span> 12:00 am - 2:30 pm </span> New York
          </p>
          <div className="flex  items-center justify-between">
            <h1 className="text-lg font-Poppins font-bold py-2 hover:text-primary">
              <Link to="#">The Culture Of Care </Link>
            </h1>
            <h1 className="text-right hover:text-primary">
              <Link to="#" className="flex">
                <span className="px-2">View More</span>
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
