import React from "react";
import styles from "../../style";
import aboutbg from "../../assets/about-bg.svg";

const PrivateEquity = () => {
  return (
    <>
      {/* Desk-top view */}
      <div className="desk-view hidden sm:block mb-20">
        <div className="intro-section h-screen">
          <div className="flex w-screen justify-between h-screen">
            <div className="left w-2/5 flex">
              <div className="flex flex-col justify-center pl-36 pr-6 ">
                <h1 className={`${styles.heading2} mb-10 saonara`}>
                  Private Equity
                </h1>
                <p className={`${styles.paragraph2}`}>
                  Our private equity team helps businesses and investors
                  navigate the complex world of private equity investments.{" "}
                  <br />
                  <br />
                  We work closely with our clients to :
                  <div className="list-disc list-outside">
                    <li>
                      Identify and analyse potential investment opportunities,
                    </li>
                    <li>
                      Conduct due diligence, and structure and negotiate deals,
                    </li>
                    <li>
                      Help to generate the best possible returns on their
                      investments.
                    </li>
                  </div>
                  {/* identify and analyze
                  potential investment opportunities, conduct due diligence, and
                  structure and negotiate deals. <br /> */}
                  {/* <br /> Our team has a wealth of experience in a variety of
                  industries and our expertise in the private equity market
                  allows us to provide our clients with the best possible
                  returns on their investments. */}
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
      <div className="mobile-view sm:hidden mb-20">
        <div className="flex flex-col justify-center mt-32 px-6 ">
          <h1 className={`${styles.heading2} mb-8 saonara`}>Private Equity</h1>
          <p className={`${styles.paragraph2}`}>
            Our private equity team helps businesses and investors navigate the
            complex world of private equity investments. <br />
            <br />
            We work closely with our clients to :
            <div className="list-disc list-outside">
              <li>Identify and analyse potential investment opportunities,</li>
              <li>Conduct due diligence, and structure and negotiate deals,</li>
              <li>
                Help to generate the best possible returns on their investments.
              </li>
            </div>
          </p>
        </div>

        <div className="right mt-8 ">
          <img src={aboutbg} className="w-full overflow-hidden" />
        </div>
      </div>
    </>
  );
};

export default PrivateEquity;
