import React from "react";
import contactbg from "../../assets/contact-bg.svg";
import contactbg2 from "../../assets/contactbg2.svg";
import styles from "../../style";
import example1 from "../../assets/contactex.svg";
import example2 from "../../assets/contactex2.svg";
import arrow from "../../assets/arrow.svg";
import mail from "../../assets/mail.svg";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:mb-0 mb-10">
        <div className="left md:w-3/5 ">
          <img
            src={contactbg}
            className="absolute -z-20 md:w-3/5 hidden sm:block"
          />
          <img
            src={contactbg}
            className="absolute -z-20 md:w-3/5 sm:hidden h-full -mt-10 object-cover "
          />

          <div
            className={`${styles.paddingX} ${styles.paddingY} h-screen  md:4/5 md:ml-20 mt-20 `}
          >
            <h1 className={`${styles.heading2} mb-5 saonara`}>Get in touch</h1>
            <p className={`${styles.paragraph2} mb-8  `}>
              ESTWO Advisors is to continue to be at the forefront of the global
              financial industry, by constantly innovating and adapting to the
              ever-changing market. We will continue to develop and implement
              new strategies and tools to help our clients achieve their
              financial goals.,{" "}
            </p>
            <div className=" flex flex-col  ">
              <div className="ass-man flex  ">
                <img src={example1} alt="" className="px-5 pb-10" />
                <div className={`${styles.paragraph2} mb-8  `}>
                  We work closely with our clients to understand their unique
                  needs and goals, and we develop customized solutions that are
                  tailored to meet those needs.
                </div>
              </div>
              <div className="ass-man flex ">
                <img src={example1} alt="" className="px-5 pb-18" />
                <div className={`${styles.paragraph2} mb-8 pt-6 `}>
                  Contact us today to learn more about how we can help you !
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right  ">
          <div
            className={`${styles.heading3} ${styles.paddingX} ${styles.paddingY} md:mt-20 -mt-10  saonara`}
          >
            Send us a message
          </div>
          <div className={`${styles.padding} md:-mt-20 puku`}>
            <form
              action="https://formspree.io/f/xayzndwq"
              method="POST"
              className="flex flex-col "
            >
              <input
                type="text"
                className="my-4"
                placeholder="Your Name"
                name="
                name"
                required
              />
              <input
                type="email"
                className="my-4"
                placeholder="eg. johndoe@gamil.com"
                name="email"
                required
              />
              <input
                type="number"
                className="my-4"
                placeholder="eg. 15494 65496"
                name="phone"
              />
              <textarea
                type="textarea"
                className="my-4 "
                placeholder="Your message..."
                name="message"
                rows="10"
                required
              />

              <button
                type="submit"
                value="send"
                className={`btn ${styles.paragraph2} flex px-1 py-2`}
              >
                Send <img src={arrow} className="w-5 mt-2 mx-2" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
