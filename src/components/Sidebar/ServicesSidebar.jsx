import React from "react";
import { Link } from "react-router-dom";

const ServicesSidebar = ({ service }) => {
  const slug = service?.title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
  return (
    <>
      <ul className="">
        <li className="border border-l-4 border-primary px-4 py-4 text-1xl font-Roboto hover:bg-secondary hover:text-white">
          <Link to={`/service/${service?.id}/${slug}`}>{service?.title}</Link>
        </li>
      </ul>
    </>
  );
};

export default ServicesSidebar;
