import React from "react";
import useServices from "../../useHook/useServices";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ServicesItem from "./ServicesItem";
const Services = ({ home }) => {
  const [services] = useServices();
  return (
    <>
      {!home && <Breadcrumbs title="Our Services" />}

      <div className="bg-white">
        <div className="container pb-16">
          <div className="text-center py-8">
            {home ? (
              <h1 className="text-4xl py-2 font-Poppins font-semibold">
                Our <span className="text-primary"> Services</span>
              </h1>
            ) : (
              <h1 className="text-4xl py-2 font-Poppins font-semibold">
                Dental <span className="text-primary"> Procedures</span>
              </h1>
            )}

            <p className="font-Roboto lg:px-64">
              Good oral health involves more than just brushing. To keep your
              teeth and mouth healthy for a lifetime of use, there are steps
              that you should follow.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {services.length > 0 && home
              ? services
                  .slice(0, 6)
                  .map((service) => (
                    <ServicesItem key={service.id} service={service} />
                  ))
              : services.map((service) => (
                  <ServicesItem key={service.id} service={service} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
