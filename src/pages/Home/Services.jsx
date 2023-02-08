import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../../style";
import hand from "../../assets/hand.svg";
import curr1 from "../../assets/curr1.svg";
import curr2 from "../../assets/doll.svg";
import curr3 from "../../assets/dihram.svg";
import curr4 from "../../assets/euro.svg";
import arrow from "../../assets/arrow.svg";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* desktop-view */}
      <div className="hidden md:block">
        <div
          className={`main-box ${styles.paddingL} ${styles.marginL} ${styles.marginY} flex justify-between`}
        >
          <div
            className={` flex flex-col ${styles.flexStart} w-3/4 `}
            data-aos="fade-up"
          >
            <div className="px-10 mr-40">
              <h1 className={`${styles.heading2} mb-5 saonara`}>
                View Our Photo Gallery
              </h1>

              <p className={`py-2 ${styles.paragraph2}`}>
              See our contemporary rooms and suites. sparkling resort pool and meeting space at our brand new Anaheim hotel.
              </p>
              <div
                className={`contact py-5 hover-underline-animation ${styles.paragraph2}`}
              >
                <div className="flex ">
                  View Photos{" "}
                  <span>
                    <img src={arrow} className="mt-2 ml-3 w-5 " alt="" />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="image-section flex flex-col w-2/4">
            <div className={`flex-col h-full`}>
              <div className=" w-56 h-56 overflow-hidden curr-box">
                <img src={curr1} alt="coin" className="" />
                <img src={curr2} alt="" />
                <img src={curr3} alt="" />
                <img src={curr4} alt="" />
              </div>

              <img src={hand} alt="image" className="w-full mt-0" />
            </div>
          </div>
        </div>
      </div>

      {/* mobile-view */}
      <div className="sm:hidden">
        <div className="flex flex-col">
          <div className="ml-4 mt-20" data-aos="fade-up">
            <h1 className={`${styles.heading2} mb-5 saonara`}>
              View Our Photo Gallery
            </h1>

            <p className={`py-2 ${styles.paragraph2}`}>
              See our contemporary rooms and suites. sparkling resort pool and meeting space at our brand new Anaheim hotel.
            </p>
            <div
              className={`contact py-5 hover-underline-animation  ${styles.paragraph2}`}
            >
              <div className="flex">
              View Photos
                <span>
                  <img src={arrow} className="mt-2 ml-3 w-5 " alt="" />
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="image-section flex flex-col justify-items-center ">
            <div className={`flex-col pl-20 mt-10`}>
              <div className=" w-56 h-56 overflow-hidden curr-box">
                <img src={curr1} alt="coin" className="" />
                <img src={curr2} alt="coin" />
                <img src={curr3} alt="coin" />
                <img src={curr4} alt="coin" />
              </div>

              <img src={hand} alt="image" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
