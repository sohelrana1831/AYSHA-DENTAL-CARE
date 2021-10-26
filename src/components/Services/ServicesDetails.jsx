import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../useHook/useServices";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ServicesSidebar from "../Sidebar/ServicesSidebar";

const ServicesDetails = () => {
  const [data, setData] = useState([]);
  const { serviceId } = useParams();
  const [services] = useServices();
  useEffect(() => {
    let newData = [];
    if (services) {
      newData = services.find(
        (data) => parseInt(data.id) === parseInt(serviceId)
      );
    }
    setData(newData);
  }, [serviceId, services]);
  return (
    <>
      <Breadcrumbs title={data?.title} />
      <div className="container py-16">
        <div className="grid lg:grid-cols-3 gap-6 lg:justify-items-end">
          <div className="lg:col-span-2">
            <img src={data?.image} alt={data?.title} />
            <h1 className="text-2xl font-Poppins py-4 text-secondary">
              {data?.title}
            </h1>
            <p>{data?.description}</p>
          </div>
          <div className="lg:mt-0 mt-16">
            <h1 className="text-4xl text-center px-4 py-2 font-Poppins  bg-secondary text-white">
              All Services
            </h1>
            {services.length > 0 &&
              services.map((service) => (
                <ServicesSidebar key={service.id} service={service} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
