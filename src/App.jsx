import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import Contact from "../src/pages/Contact/Contact";
import PrivateEquity from "./pages/Services/PrivateEquity";
import Asset from "./pages/Services/Asset";
import Corporate from "./pages/Services/Corporate";
import Team from "./pages/Team/Team";

import Header from "../src/components/Header/Header";
import Sidenav from "../src/components/Sidenav/Sidenav";
import Cursor from "./components/cursor/cursor";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
      <div
      // className="hidden sm:block"
      >
        <Cursor />
      </div>

      {/* all the routes done here */}
      {/* header section */}
      <Header />

      {/* sidenav */}
      <div className="sidenav absolute  z-20 md:h-56 md:mx-10 md:z-20">
        <div className=" place-items-center h-28 " />
        <Sidenav />
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/private-equity" element={<PrivateEquity />} />
          <Route path="/services/asset" element={<Asset />} />
          <Route path="/services/corporate" element={<Corporate />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
