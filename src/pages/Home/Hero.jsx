import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../../style";
import sing from "../../assets/singapore.svg";
import holiday from "../../assets/holiday.jpg";
import ny from "../../assets/sitting2.jpg";
import ldn from "../../assets/sitting.png";
import singm from "../../assets/buddha.jpg";
import ldnM from "../../assets/londonM.svg";
import nym from "../../assets/nyM.svg";
import dub from "../../assets/dub.jpg";
import dubm from "../../assets/dubM.jpg";
import gradient from "../../assets/deskGradient.svg";
import gradient2 from "../../assets/mobGradient.svg";
import Clip from '../../assets/video/Hotel.mp4'

import "./style.css";

import Sidenav from "../../components/Sidenav/Sidenav";
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* hero section */}
      <div
        className={`${styles.paddingX} ${styles.paddingY}  absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 bg-transparent`}
      >
        <p
          data-aos="zoom-in"
          className={`saonara capitalize text-white text-center text-3xl md:text-7xl bg-transparent  sm:${styles.flexCenter} ${styles.flexCenter}`}
        >
          Holiday Inn Express & Suites 
        </p>
        <p
          data-aos="zoom-in"
          className={`saonara capitalize text-white text-center text-4xl bg-transparent  sm:${styles.flexCenter} ${styles.flexCenter}`}
        >
          California Dreamin' - Anaheim Resort Area Hotel
        </p>
      </div>

      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative h-screen "
        data-bs-ride="carousel"
      >
        {/* <div className="carousel-indicators p-0 z-10">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div> */}
        {/* <div className="carousel-inner  relative w-full overflow-hidden -mt-10 md:mt-0">
          <div className="carousel-item  float-left w-full">
          <div className="carousel-item  active float-left w-full">
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src={Clip} type="video/mp4" />
            </video>
            <img
              src={singm}
              className="block w-full sm:hidden"
              alt="Wild Landscape"
            />
          </div>
            <img
              src={ny}
              className="block w-full hidden md:block"
              alt="Wild Landscape"
            />
            <img
              src={nym}
              className="block w-full sm:hidden"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item  float-left w-full">
            <img
              src={ldn}
              className="block w-full hidden md:block"
              alt="Wild Landscape"
            />
            <img
              src={ldnM}
              className="block w-full sm:hidden"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item  float-left w-full">
            <img
              src={holiday}
              className="block w-full hidden md:block"
              alt="Wild Landscape"
            />
            <img
              src={dubm}
              className="block w-full sm:hidden"
              alt="Wild Landscape"
            />
          </div>
          <img
            src={gradient}
            className=" absolute bottom-0 hidden md:block"
            alt=""
            srcset=""
          />
          <img
            src={gradient2}
            className=" absolute bottom-0 sm:hidden w-screen"
            alt=""
            srcset=""
          />
        </div> */}
        {/* <iframe className="w-full h-full object-cover" src={Clip}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        
        title='video'
/> */}
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={Clip} type="video/mp4" />
        </video>
        <div className="absolute h-full w-full top-0 left-0 bg-blue2/50"></div>
      </div>
    </>
  );
};

export default Hero;
