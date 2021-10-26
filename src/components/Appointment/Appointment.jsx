import React, { useState } from "react";
import useServices from "../../useHook/useServices";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Appointment = () => {
  const [services] = useServices();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Breadcrumbs title="Appointment" />
      <div className="container py-16">
        <h1 className="text-4xl text-center font-bold font-Roboto">
          Drop your <span className="text-primary">Appointment</span>{" "}
        </h1>
        <p className="text-gray-400 py-2 text-center">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
        <fieldset>
          <label for="fname">First name:</label>
          <input
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            type="text"
            id="name"
            name="name"
          />
          <br />
          <br />
          <label for="email">Email:</label>
          <input
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            type="email"
            id="email"
            name="email"
          />
          <br />
          <br />
          <label for="services">Services:</label>
          <select
            name="cars"
            id="cars"
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
          >
            <option selected>Select Services</option>
            {services.length > 0 &&
              services.map((service) => (
                <option key={service.id} value={service?.title}>
                  {service?.title}
                </option>
              ))}
          </select>
          <br />
          <br />
          <label for="date">Date:</label>
          <input
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            type="text"
            id="date"
            name="date"
          />

          <br />
          <br />
          <label for="message">Message:</label>
          <textarea
            className="border-opacity-100 w-full border px-4 border-gray-800 py-2"
            rows="4"
            cols="50"
          />
          <br />
          <button className="bg-white mt-4 border border-primary text-black py-3 px-6 rounded-md hover:bg-transparent hover:bg-primary hover:text-white transition">
            Submit
          </button>
        </fieldset>
      </div>
    </>
  );
};

export default Appointment;
