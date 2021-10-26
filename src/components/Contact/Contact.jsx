import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const Contact = () => {
  return (
    <div>
      <Breadcrumbs title="Contact us" />
      <div className="container py-16 ">
        <div className="pb-8">
          <h1 className="text-4xl font-bold font-Roboto">
            Drop a <span className="text-primary">Message</span>{" "}
          </h1>
          <p className="text-gray-400 py-2">
            Have a question or just want to say hi? We'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-2 justify-between">
          <div className="">
            <div className="">
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
          </div>
          <div className="inset-0 lg:px-16 px-8">
            <h1 className="text-4xl py-2 font-Poppins font-semibold">
              Get In <span className="text-primary"> Touch</span>
            </h1>
            <div className="flex py-4">
              <div className="">
                <i class="fas fa-map-marker-alt text-3xl text-secondary"></i>
              </div>
              <div className="px-8">
                <p>Wood Workshop, 562, Mallin Street New Youk, NY 100 254</p>
              </div>
            </div>
            <div className="flex py-4">
              <div className="">
                <i className="far fa-envelope text-3xl text-secondary"></i>
              </div>
              <div className="px-8">
                <p>info@adc.com</p>
                <p>support@adc.com</p>
              </div>
            </div>
            <div className="flex py-4">
              <div className="">
                <i className="fas fa-phone text-3xl text-secondary"></i>
              </div>
              <div className="px-8 font-bold">
                <p>+ 1800 562 2487</p>
                <p>+ 3215 546 8975</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className="w-full h-96"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746840.9284193553!2d88.10075845061293!3d23.495632628138665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sus!4v1633349781164!5m2!1sen!2sus"
      ></iframe>
    </div>
  );
};

export default Contact;
