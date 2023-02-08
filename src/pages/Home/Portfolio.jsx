import React, { useEffect } from "react";
import styles from "../../style";
import Aos from "aos";
import "aos/dist/aos.css";

import arrow from "../../assets/arrow.svg";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="hidden sm:block main-box2">
        <div
          className={` ${styles.paddingX} ${styles.marginX} ${styles.marginY}  ${styles.paddingY} flex justify-between `}
          data-aos="fade-up"
        >
          <div className="image-section flex flex-col  divide-y divide-amber-400">
            <div className="flex w-full  divide-x divide-amber-400">
              <div className="  px-12  py-12 flex flex-col">
                <h2 className={`${styles.heading2} saonara`}>30K Customers Catered </h2>
                <p>
                  Worth of asset
                  <br /> management
                </p>
              </div>
              {/* <div className=" px-12 py-12 flex flex-col">
                <h2 className={`${styles.heading2} saonara`}>8 cities</h2>
                <p>Across the world</p>
              </div> */}
            </div>
            <div className="flex w-full divide-x divide-amber-400">
              <div className="  px-14 py-12 flex flex-col">
                <h2 className={`${styles.heading2} saonara pr-1`}>100yrs </h2>
                <p> combined experience </p>
              </div>
              <div className=" px-12 py-12 flex flex-col">
                <h2 className={`${styles.heading2} saonara`}>125 +</h2>
                <p>Reviews</p>
              </div>
            </div>
          </div>
          <div
            className={` flex flex-col ${styles.flexEnd} text-end w-2/4 mt-16`}
          >
            <div className="px-10 ">
              <h1 className={`${styles.heading2} saonara mb-5`}>
                Reviews
              </h1>

              <p className={`py-2 ${styles.paragraph2}`}>
              "My family had an amazing Disneyland® vacation at your hotel."
              </p>
              <div
                className={`contact py-5 hover-underline-animation  ${styles.paragraph2}`}
              >
                <div className="flex justify-end">
                  Read more
                  <span>
                    <img src={arrow} className="mt-2 ml-3 w-5 " alt="" />
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile-view */}
      <div className="sm:hidden">
        <div className="main-box2 h-screen">
          <div className="" data-aos="fade-up">
            <div
              className={` flex flex-col ${styles.flexEnd} text-end  mt-24 px-4`}
            >
              <div className="mt-10">
                <h1 className={`${styles.heading2} saonara mb-5`}>
                  Reviews
                </h1>

                <p className={`py-2 ${styles.paragraph2}`}>
                "My family had an amazing Disneyland® vacation at your hotel."
                </p>
                <div
                  className={`contact py-5 hover-underline-animation  ${styles.paragraph2}`}
                >
                  <div className="flex justify-end">
                    Read more{" "}
                    <span>
                      <img src={arrow} className="mt-2 ml-3 w-5 " alt="" />
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="image-section flex flex-col px-4 mt-5  divide-y divide-amber-400">
              <div className="flex w-full  divide-x divide-amber-400">
                <div className="    w-full flex flex-col">
                  <h2 className={` ${styles.heading2} saonara mx-5 mt-5 `}>
                  30K Customers Catered 
                  </h2>
                  <p className="w-28 mx-5 mb-5">Worth Wealth Management</p>
                </div>
                {/* <div className="   w-full flex  flex-col">
                  <h2 className={` ${styles.heading2} saonara mx-5 mt-5 `}>
                  8 cities
                  </h2>
                  <p className="w-28 mx-5 mb-5">Across the world</p>
                </div> */}
              </div>
              <div className="flex w-full divide-x divide-amber-400">
                <div className="    w-full flex flex-col">
                  <h2 className={` ${styles.heading2} saonara mx-5 mt-5`}>
                  100yrs 
                  </h2>
                  <p className="w-28 mx-5 mb-5  ">In the Industry</p>
                </div>
                <div className="   w-full flex flex-col">
                  <h2 className={` ${styles.heading2} saonara mx-5 mt-5`}>
                  125 +
                  </h2>
                  <p className="w-28 mx-5 mb-5">Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
