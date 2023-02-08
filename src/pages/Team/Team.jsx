import React from "react";

import styles from "../../style";
import aboutbg from "../../assets/about-bg.svg";
import Sidenav from "../../components/Sidenav/Sidenav";
import goleft from "../../assets/goleft.svg";
import goright from "../../assets/goright.svg";
import card from "../../components/Teamcard/Teamcard";
import logo from "../../assets/namelogo.svg";
import team1 from "../../assets/team1.svg";
import team2 from "../../assets/card2.png";
import team3 from "../../assets/card3.svg";

const Team = () => {
  return (
    <div>
      <div className="team-section mt-32 hidden sm:block">
        <div className="flex flex-row text-center justify-around h-36 ">
          <div className="flex flex-col ">
            <div className="flex">
              <h1 className={`${styles.heading3} text-center saonara `}>
                Advisory Board members
              </h1>
            </div>

            {/* <div className={`${styles.paragraph2}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div> */}
          </div>

          {/* <div className="flex flex-row my-auto ">
            <div className="h-14 w-14 p-2 border-2  border-amber-300 rounded-full flex mx-3 ">
              <img src={goleft} alt="" className="h-6 w-6 my-auto mx-auto " />
            </div>
            <div className="h-14 w-14 p-2 border-2  border-amber-300 rounded-full flex mx-3 ">
              <img src={goright} alt="" className="h-6 w-6 my-auto mx-auto " />
            </div>
          </div> */}
        </div>

        <div className="card-section flex justify-center mx-40 mb-32 -mt-14">
          <div className="">
            {" "}
            <div className="line border-t  border-amber-400 border-solid w-screen absolute -z-10 mt-60 ml-40  "></div>
          </div>

          <div className="card2  px-8 ">
            <img src={team1} alt="" className="" />
          </div>

          <div className="card    px-8">
            <img src={team2} alt="" className="" />
          </div>

          <div className="card    px-8">
            <img src={team3} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="team-section sm:hidden mb-20" id="team">
        <div className="header-team px-10 mt-24 ">
          <h2
            className={`${styles.heading2} ${styles.flexCenter} mb-4 saonara `}
          >
            Advisor Board
          </h2>
          <p className={`${styles.paragraph2} ${styles.flexCenter}`}>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
          </p>
        </div>

        <div className="cards flex flex-col px-12 ">
          <div className="card py-5 ">
            <img src={team1} alt="" className="" />
          </div>
          <div className="card py-5 ">
            <img src={team2} alt="" className="" />
          </div>
          <div className="card py-5 ">
            <img src={team3} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
