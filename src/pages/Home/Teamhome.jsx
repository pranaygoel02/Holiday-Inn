import React from "react";
import styles from "../../style";
import water from "../../assets/saikatk.svg";
import avatar from "../../assets/avatar.svg";
import arrow from "../../assets/arrow.svg";
import arr2 from "../../assets/arrows2.svg";
import smaw from "../../assets/smallarrow4.svg";
const Teamhome = () => {
  return (
    <>
      {/* Desktop-view */}
      <div className="hidden md:block">
        <div
          className={`main-box ${styles.paddingX} ${styles.marginX} ${styles.marginY}  ${styles.paddingY} flex justify-between`}
        >
          <div className="image-section relative flex flex-col pl-10">
            <img src={'https://media.cntraveler.com/photos/614e3cf6d4cb4c568961dee5/3:4/w_2736,h_3648,c_limit/Disneyland_DXDDD2.jpg'} className="w-[22rem]" alt="" />
          </div>

          <div className={` flex flex-col ${styles.flexEnd} text-end w-3/4 `}>
            <div className=" px-1">
              <h1
                className={`${styles.heading2} saonara mb-5 flex justify-between`}
              >
                {" "}
                <span>
                  <img src={arr2} className={`ml-40 mt-3`} />
                </span>{" "}
                To Do
              </h1>

              <p className={`py-2 ${styles.paragraph2} pl-20`}>
                From exciting theme parks and family attractions to beautiful beaches, great shopping and notable landmarks, the Anaheim area is filled with exciting adventures for the whole family. Enjoy incredible shopping and dining at Anaheim GardenWalk, DOWNTOWN DISNEY® or the Fashion Island Mall. Explore outdoor destinations like Crystal Cove State Beach and discover historic sites like Balboa Island and Mission San Juan Capistrano. Experience the amazing rides and coasters at Disneyland® Park and Knott's Berry Farm, tour of Universal Studios, or day trip to SeaWorld San Diego.
              </p>

              <div
                className={`contact py-5 hover-underline-animation  ${styles.paragraph2} mt-8`}
              >
                <div className="flex justify-end">
                  View More{" "}
                  <span>
                    <img src={arrow} className="mt-2 ml-3 w-5 " alt="" />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-view */}
      <div className="sm:hidden">
        <div className="flex flex-col px-5">
          <div className={` flex flex-col ${styles.flexEnd} text-end  mt-28`}>
            <div className=" ">
              <h1
                className={`${styles.heading2} saonara mb-5 flex justify-end`}
              >
                {" "}
                <span>
                  <img src={smaw} className={`pr-5 mt-5`} />
                </span>{" "}
                Things To Do
              </h1>

              <p className={`py-2 ${styles.paragraph2}`}>
              From exciting theme parks and family attractions to beautiful beaches, great shopping and notable landmarks, the Anaheim area is filled with exciting adventures for the whole family. Enjoy incredible shopping and dining at Anaheim GardenWalk, DOWNTOWN DISNEY® or the Fashion Island Mall.
              </p>

              <div
                className={`contact py-5 ${styles.paragraph2} hover-underline-animation `}
              >
                <div className="flex justify-end">
                  View More
                  <span>
                    <img src={arrow} className="mt-2 ml-3 w-5 " alt="" />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="image-section flex justify-items-center">
            {/* <img src={avatar} className="w-80 absolute right-1/2 top" alt="" /> */}
            <img src={'https://media.cntraveler.com/photos/614e3cf6d4cb4c568961dee5/3:4/w_2736,h_3648,c_limit/Disneyland_DXDDD2.jpg'} className="p-8 pt-4" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamhome;
