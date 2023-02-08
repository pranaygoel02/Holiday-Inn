import React, { useState } from "react";
import logo from "../../assets/logo.png";
import logom from "../../assets/mobile-logo.svg";
import styles from "../../style";

const Header = () => {
  return (
    <>
      {/* desktop */}
      <div className="hidden sm:block flex w-full">
        <div className="mr-5">
          {/* logo section */}
          <div className={` `}>
            <img
              className={` absolute z-10 bg-transparent w-48 pt-8 px-8`}
              src={logo}
            />
          </div>
          {/* contact section */}
          <div className={`flex justify-end `}>
            <div className="social my-10 mr-4 absolute z-20 bg-transparent flex justify-between pr-10  w-32">
              <a
                className="bg-transparent"
                href="https://www.facebook.com/estwoconsulting"
                target="_blank"
              >
                <i className="fab fa-facebook-f bg-transparent text-white"></i>
              </a>
              <a
                className="bg-transparent"
                href="https://www.instagram.com/estwoconsulting/"
                target="_blank"
              >
                <i className="fab fa-instagram bg-transparent  text-white"></i>
              </a>
              <a
                className="bg-transparent "
                href="https://www.linkedin.com/company/estwo-consulting/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in bg-transparent  text-white"></i>
              </a>
            </div>
          </div>
          <div className="contact flex justify-end ">
            <a
              href="/contact"
              className={`mt-20 absolute z-20 w-24 mr-3 pt-2 font-poppins font-extralight text-[13px] ${styles.paragraph2}`}
            >
              <p>contact</p>
            </a>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="sm:hidden">
        <div className="px-4">
          {/* logo section */}
          <div className={`mb-5`}>
            <img className={` absolute z-10 bg-transparent w-32 `} src={logo} />
          </div>
          {/* contact section */}
          <div className={`flex justify-end mt-10`}>
            <div className="social absolute z-20 bg-transparent flex justify-between  w-20">
              <a
                className="bg-transparent"
                href="https://www.facebook.com/estwoconsulting"
                target="_blank"
              >
                <i className="fab fa-facebook-f bg-transparent text-white"></i>
              </a>
              <a
                className="bg-transparent"
                href="https://www.instagram.com/estwoconsulting/"
                target="_blank"
              >
                <i className="fab fa-instagram bg-transparent  text-white"></i>
              </a>
              <a
                className="bg-transparent "
                href="https://www.linkedin.com/company/estwo-consulting/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in bg-transparent  text-white"></i>
              </a>
            </div>
            <div className="contact mt-10 absolute flex justify-end ">
              <p
                className={` absolute z-20   font-poppins font-extralight text-[13px] ${styles.paragraph2}`}
              >
                contact
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
