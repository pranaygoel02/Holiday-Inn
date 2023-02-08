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

const About = () => {
  return (
    <>
      {/* Desk-top view */}
      <div className="desk-view hidden sm:block">
        <div className="intro-section h-screen mb-12">
          <div className="flex w-screen justify-between h-screen">
            <div className="left w-2/5 flex">
              <div className="flex flex-col justify-center pl-36 pr-6 ">
                <h1 className={`${styles.heading2} mb-10 saonara`}>
                  About Estwo
                </h1>
                <p className={`${styles.paragraph2}`}>
                  ESTWO Advisors is a leading financial advisory firm that
                  provides a wide range of services to businesses and
                  individuals. <br />
                  <br /> With a team of experienced professionals and a deep
                  understanding of the markets and industries we operate in, we
                  are well-equipped to help our clients achieve their financial
                  goals. Our services include private equity, external asset
                  management, and corporate advisory.
                  <br /> <br /> We work closely with our clients to identify and
                  analyse potential investment opportunities, conduct due
                  diligence, and structure and negotiate deals.
                </p>
              </div>
            </div>
            <div className="right w-3/5 ">
              <img src={aboutbg} className="w-full overflow-hidden" />
            </div>
          </div>
        </div>

      </div>

      {/* Mobile-view */}
      <div className="mobile-view sm:hidden">
        <div className="flex flex-col justify-center mt-32 px-6 ">
          <h1 className={`${styles.heading2} mb-8 saonara`}>About Estwo</h1>
          <p className={`${styles.paragraph2}`}>
            ESTWO Advisors is a leading financial advisory firm that provides a
            wide range of services to businesses and individuals. <br />
            <br /> With a team of experienced professionals and a deep
            understanding of the markets and industries we operate in, we are
            well-equipped to help our clients achieve their financial goals. Our
            services include private equity, external asset management, and
            corporate advisory.
            <br /> <br /> We work closely with our clients to identify and
            analyse potential investment opportunities, conduct due diligence,
            and structure and negotiate deals. We strive to provide our clients
            with an exceptional level of transparency, integrity and trust.
          </p>
        </div>

        <div className="right mt-8 mb-6">
          <img src={aboutbg} className="w-full overflow-hidden" />
        </div>

        
      </div>
    </>
  );
};

export default About;
