import React from "react";
import { Link } from "react-router-dom";

const ServicesItem = ({ service }) => {
  const { id, title, description, image } = service;
  const slug = title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
  return (
    <>
      <div className="hover:shadow-lg bg-white px-4 py-4">
        <div className="rounded-md">
          <img src={image} alt="" />
        </div>
        <div>
          <h1 className="text-2xl text-center font-Poppins py-4 text-secondary">
            <Link to={`/service/${id}/${slug}`}>{title}</Link>
          </h1>
          <p>{description.slice(0, 110)}...</p>
        </div>
        <div className="my-8">
          <Link
            to={`/service/${id}/${slug}`}
            className="bg-primary border border-primary text-white px-3 py-2 font-medium uppercase rounded hover:bg-transparent hover:text-primary transition"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;
