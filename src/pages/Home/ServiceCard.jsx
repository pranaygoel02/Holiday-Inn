import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../../style";

import arr from "../../assets/arrow.svg";
import arr2 from "../../assets/arrows2.svg";
import arr3 from "../../assets/arrow3.svg";
import ser1 from "../../assets/ser1.svg";
import ser2 from "../../assets/room.png";
import ser3 from "../../assets/ser3.svg";
import sarw1 from "../../assets/smallarrow1.svg";
import sarw2 from "../../assets/smallarrow2.svg";

const ServiceCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="">
        <div
          className={`main-box ${styles.paddingX} ${styles.marginY} flex justify-between`}
        >
          <div
            id="service-part"
            className={` flex flex-col ${styles.flexCenter} w-full `}
            data-aos="fade-up"
          >
            <div className="flex justify-evenly w-full my-20">
              <div className="my-auto">
                <img src={arr3} className="sm:block hidden" alt="" />
                <img src={sarw1} className="sm:hidden" alt="" />
              </div>
              <h1 className={`${styles.heading2} md:-mx-20 mx-1  saonara`}>
                Our Warmth
                {/* Solutions Provided */}
              </h1>
              <div className="my-auto">
                <img src={arr2} className="sm:block hidden" alt="" srcset="" />
                <img src={sarw2} className="sm:hidden" alt="" />
              </div>
            </div>
            <div className="flex md:flex-row flex-col w-4/5">
              <div className="md:w-2/5 overflow-hidden relative">
              <div className="h-full">
                <p
                  className={`${styles.subheading} saonara absolute z-20 bottom-0 mx-3 mb-2 flex `}
                >
                  Disneyland
                  <span>
                    <img src={arr}  className="w-7 mt-5 ml-3" alt="" srcset="" />
                  </span>
                </p>

                <div className="w-full h-full bg-black/60 absolute z-10"></div>
                <img
                  src={'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1593556896598'}
                  className="hover:scale-125 h-full object-cover ease-in duration-300 "
                />
              </div>
              </div>


              <div className="md:w-2/5 overflow-hidden relative">
              <div className="h-full">
                <p
                  className={`${styles.subheading} saonara absolute z-20 bottom-0 mx-3 mb-2 flex `}
                >
                  Rooms
                  <span>
                    <img src={arr} className="w-7 mt-5 ml-3" alt="" srcset="" />
                  </span>
                </p>
                <img
                  src={ser2}
                  className="hover:scale-125 h-full object-cover ease-in duration-300 "
                />
              </div>
              </div>
              

              <div className="md:w-2/5 overflow-hidden relative">
              <div >
                <p
                  className={`${styles.subheading} saonara absolute z-20 bottom-0 mx-3 mb-2 flex `}
                >
                  Convention Center
                  <span>
                    <img src={arr} className="w-7 mt-5 ml-3" alt="" srcset="" />
                  </span>
                </p>
                <img
                  src={ser3}
                  className="hover:scale-125 ease-in duration-300 "
                />
              </div>
              </div>
              




            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
