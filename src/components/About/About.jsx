import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import EventsList from "../EventsList/EventsList";
import QualityService from "../QualityService/QualityService";

const About = () => {
  return (
    <>
      <Breadcrumbs title="About us" />
      <QualityService />
      <EventsList />
    </>
  );
};

export default About;
