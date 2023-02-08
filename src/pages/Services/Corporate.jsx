import React from "react";
import styles from "../../style";
import aboutbg from "../../assets/about-bg.svg";

const Corporate = () => {
  return (
    <>
      {/* Desk-top view */}
      <div className="desk-view hidden sm:block mb-20">
        <div className="intro-section h-screen">
          <div className="flex w-screen justify-between h-screen">
            <div className="left w-2/5 flex">
              <div className="flex flex-col justify-center pl-36 pr-6 ">
                <h1 className={`${styles.heading2} mb-10 saonara`}>
                  Coorporate Advisory
                </h1>
                <p className={`${styles.paragraph2}`}>
                  We also provide Corporate Advisory Services to companies of
                  all sizes. <br /> <br />
                  Our team of experts deeply understands the unique challenges
                  and opportunities that businesses face, and we work closely
                  with our clients to develop and implement strategic plans that
                  drive growth and improve performance. <br /> <br />
                  Whether you're looking to expand into new markets, acquire
                  other companies, or restructure your operations, ESTWO
                  Advisors has the expertise and experience to help you achieve
                  your goals.
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
            Coorporate Advisory
          </h1>
          <p className={`${styles.paragraph2}`}>
            In addition to private equity and asset management, we also provide
            corporate advisory services to companies of all sizes. Our team of
            experts deeply understands the unique challenges and opportunities
            that businesses face, and we work closely with our clients to
            develop and implement strategic plans that drive growth and improve
            performance. Whether you're looking to expand into new markets,
            acquire other companies, or restructure your operations, ESTWO
            Advisors has the expertise and experience to help you achieve your
            goals.
          </p>
        </div>

        <div className="right mt-8 ">
          <img src={aboutbg} className="w-full overflow-hidden" />
        </div>
      </div>
    </>
  );
};

export default Corporate;
