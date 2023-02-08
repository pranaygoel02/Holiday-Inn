import React, { useEffect, useState } from "react";
import "./style.css";
// import "./mobile.scss";
import logo from "../../assets/logo.png";
import menu1 from "../../assets/menu1.svg";
import menu3 from "../../assets/menu3.svg";
import menu2 from "../../assets/hotel_icon.png";
import menu4 from "../../assets/menu4.svg";
import menu5 from "../../assets/menu5.svg";
import menu6 from "../../assets/menu6.svg";
import menu7 from "../../assets/menu7.svg";
import styles from "../../style";

const Sidenav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <>
      {/* desktop */}
      <div className="hidden sm:block">
        <div className="box py-2  px-3 px-6 mt-32">
          {/* <a href="/"> */}
            {/* <div className="logo flex justify-center">
              <img src={logo} alt="logo" className="w-10 m-1" />
            </div> */}
          {/* </a> */}
          {/* <br /> */}
          <div className="menu flex justify-center mb-2">
            <ul>
              <li
                className={`p-2 my-5 w-12  py-2.5 ${styles.tooltip}`}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="About Us"
              >
                {/* <a href="/about"> */}
                  <img src={menu3} alt="" />
                {/* </a> */}
              </li>
              <li
                className={`p-2 my-5 w-12  py-2.5 ${styles.tooltip}`}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Book Now"
              >
                {/* <a href="/services/private-equity"> */}
                  <img src={menu2} alt="" />
                {/* </a> */}
              </li>
              
              <li
                className={`p-2 my-5 w-12  py-2.5 ${styles.tooltip}`}
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Board Of Advisors"
              >
                {/* <a href="/team"> */}
                  <img src={menu7} alt="" />
                {/* </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden">
        <div className=" justify-between  ">
          <nav>
            <section className="MOBILE-MENU absolute top-10 -left-6 flex lg:hidden">
              <div
                className="HAMBURGER-ICON space-y-2 mx-10"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8 bg-white"></span>
                <span className="block h-0.5 w-8  bg-white"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-12 py-10"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    {/* <a href="/">Home</a> */}
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    {/* <a href="/about">About</a> */}
                  </li>

                  <li className="border-b border-gray-400 my-8 uppercase">
                    {/* <a href="/contact">Contact</a> */}
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    {/* <a href="/services/private-equity">Private Equity </a> */}
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    {/* <a href="/services/asset">External Asset Management</a> */}
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    {/* <a href="/services/corporate">Corporate Advisory</a> */}
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    {/* <a href="/team">Board Of Advisors</a> */}
                  </li>
                </ul>
              </div>
            </section>

            {/* <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul> */}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
