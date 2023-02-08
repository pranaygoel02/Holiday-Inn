import React from "react";
import styles from "../../style";
import aboutbg from "../../assets/about-bg.svg";

const Asset = () => {
  return (
    <>
      {/* Desk-top view */}
      <div className="desk-view hidden sm:block mb-20">
        <div className="intro-section h-screen">
          <div className="flex w-screen justify-between h-screen">
            <div className="left w-2/5 flex">
              <div className="flex flex-col justify-center pl-36 pr-6 ">
                <h1 className={`${styles.heading2} mb-10 saonara`}>
                  External Asset Manager
                </h1>
                <p className={`${styles.paragraph2}`}>
                  ESTWO Advisors also offers external asset management services
                  to individuals and institutions looking for professional
                  management of their investment portfolios. <br />
                  <br /> Our experienced investment professionals use a
                  disciplined investment process to create diversified
                  portfolios that align with our client's risk tolerance and
                  investment objectives. <br /> <br /> Our team stays up-to-date
                  on market trends and continuously monitors and adjusts our
                  clients' portfolios to ensure they perform at their best.
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
          <h1 className={`${styles.heading2} mb-8 saonara`}>
            External Asset Manager
          </h1>
          <p className={`${styles.paragraph2}`}>
            ESTWO Advisors also offers external asset management services to
            individuals and institutions looking for professional management of
            their investment portfolios. <br />
            <br /> Our experienced investment professionals use a disciplined
            investment process to create diversified portfolios that align with
            our client's risk tolerance and investment objectives. <br /> <br />{" "}
            Our team stays up-to-date on market trends and continuously monitors
            and adjusts our clients' portfolios to ensure they perform at their
            best.
          </p>
        </div>

        <div className="right mt-8 ">
          <img src={aboutbg} className="w-full overflow-hidden" />
        </div>
      </div>
    </>
  );
};

export default Asset;
