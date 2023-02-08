import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import arrow from "../../assets/arrows2.svg";
import arrow2 from "../../assets/arrow.svg";
import dollar from "../../assets/dollar.svg";
import "./abouth.css";
import styles from "../../style";
import smaw from "../../assets/smallarrow3.svg";

const Abouth = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="">
        <div className={`flex h-36 mt-28 mb-20 md:mx-28 ${styles.paddingX}`}>
          <div className="flex flex-col " data-aos="fade-up">
            <div className="flex md:mb-0 mb-2">
              <h1
                className={`${styles.heading2} md:mr-5 mr:1 mb-8 saonara hidden sm:block`}
              >
                Offerings & Booking Details
              </h1>
              <h1 className={` sm:hidden ${styles.heading2} saonara mr-3`}>
              Offerings & Booking Details
              </h1>
              <img src={arrow} alt="arrow" className="mb-6 hidden sm:block" />
              <img src={smaw} alt="arrow" className=" sm:hidden w-1/5 " />
            </div>

            <div className={`${styles.paragraph2}`} >
            <span className="font-bold">Check in: 3:00 PM, Check out: 11:00 AM, 101 Rooms</span><br></br>
            Free Wi-Fi | Complimentary Breakfast | Heated Pool & Spa | Meeting Room | Fitness Center | Splash Zone
            </div>
          </div>
        </div>

        <div className="about-bg">
          <div
            className={` ${styles.paddingX} md:pt-40 md:pt-32 pt-16 md:mx-28 `}
            data-aos="zoom-in"
          >
            <div className="p-2">
              <img src={dollar} alt="" className="h-20 w-20" />
            </div>
            <div
              className={`${styles.heading3} saonara mt-4 mb-8`}
              data-aos="zoom-in"
            >
              About Holiday Inn
            </div>
            <div className={`${styles.paragraph2}`} data-aos="zoom-in">
             Create memories at our resort and hotel in the heart of vibrant Anaheim, CA. Located steps away from Disneyland® Resort and DOWNTOWN DISNEY®, Holiday Inn Express & Suites Anaheim Resort features family inspired amenities, contemporary rooms and suites with 48" HDTVs and luxury bedding, and a beautiful resort setting.
            </div>
            <div
              className={`contact md:mt-4 py-5 hover-underline-animation ${styles.paragraph2}`}
            >
              <div className="flex ">
                About Us{" "}
                <span>
                  <img src={arrow2} className="mt-2 ml-3 w-5 " alt="" />
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Abouth;
