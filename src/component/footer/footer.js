import React from "react";
import logo from "../../assets/images/logo.png";
import "./style.css";

import img1 from "../../assets/images/f3.png";
import img2 from "../../assets/images/f2.png";
import img3 from "../../assets/images/f4.png";
import img4 from "../../assets/images/f1.png";
import img5 from "../../assets/images/Visa Logo.png";
import img6 from "../../assets/images/f7.png";
import img7 from "../../assets/images/Discover Logo.png";
import img8 from "../../assets/images/f8.png";
import img9 from "../../assets/images/f5.png";

const Footer = () => {
  return (
    <>
      <footer className="text-center lg:px-24 px-6">
        <div className="flex justify-center">
          <img src={logo} alt="" className="foot-logo" />
        </div>
        <p className="year">20+ Years Of Trust</p>
        <div className="desc">
          <p>
            dimend SCAASI Jeweler is a unique Jewelry store located in Chicago{" "}
            <br />
            with an emphasis on great style and exceptional quality.
          </p>
        </div>
        <hr />
        <nav>
          <ul className="flex justify-evenly">
            <li className="py-3 lg:px-0 sm:px-4">Education</li>
            <li className="py-3 lg:px-0 sm:px-4">About Us</li>
            <li className="py-3 lg:px-0 sm:px-4">Customer Care</li>
            <li className="py-3 lg:px-0 sm:px-4">Contact Us</li>
          </ul>
        </nav>
        <div className="logos flex items-center justify-center flex-wrap">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
        <p className="dec">
          dimendSCAASI™ and InnerView® are Registered Trademarks of dimend
          SCAASI Ltd. © 2010 2020 dimend SCAASI Ltd. erms Of Use | Sitemap |
          Privacy Policy
        </p>
      </footer>
    </>
  );
};

export default Footer;
