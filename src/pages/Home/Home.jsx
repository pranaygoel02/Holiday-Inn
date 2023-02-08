import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "./Hero";
import ServiceCard from "./ServiceCard";
import Abouth from "./Abouth";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Teamhome from "./Teamhome";
import Footer from "../../components/Footer/Footer";
import Hero1 from "./Hero1";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* .....Hero Section..... */}
      {/* <Hero /> */}
      <Hero/>

      {/* Service Card */}
      <ServiceCard />
      {/* .....About Section..... */}
      <Abouth />

      {/* .....Services Section..... */}

      <Services />

      {/* .....Portfolio Section..... */}

      <Portfolio />

      {/* .....Testimonials Section..... */}
      {/* .....Team Section..... */}
      <div className="" data-aos="fade-up">
        <Teamhome />
      </div>

      {/* .....Blog Section..... */}
      {/* .....Contact Section..... */}
    </>
  );
};

export default Home;
