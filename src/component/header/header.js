import React, { useState } from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";
import search from "../../assets/icons/search.png";
import heart from "../../assets/icons/heart.png";
import user from "../../assets/icons/user.png";
import menu from "../../assets/icons/more.png";
import closeicon from "../../assets/icons/close.png";
import inq from "../../assets/icons/inq.png";
import user2 from "../../assets/icons/user2.png";
import { CaretDown } from "@phosphor-icons/react";

const Header = () => {
  const [hide, sethide] = useState(false);
  const open = () => {
    sethide(true);
  };
  const close = () => {
    sethide(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center xlg:px-24 px-5 py-6">
        <div className="lg:hidden menu">
          <img src={menu} alt="" onClick={open} />
        </div>
        <div>
          <img src={logo} alt="" className="img-fluid logo-img" id="open" />
        </div>
        {hide ? (
          <div className="list">
            <div
              className="close-icon lg-hidden lg:hidden"
              onClick={close}
              id="close"
            >
              <img src={closeicon} alt="" />
            </div>
            <ul className="flex">
              <li>
                Diamonds <CaretDown size={32} className="lg-hidden lg:hidden" />
              </li>
              <li className="font-bold">
                Accessories{" "}
                <CaretDown size={32} className="lg-hidden lg:hidden" />
              </li>
              <li>
                Fine Jewelry{" "}
                <CaretDown size={32} className="lg-hidden lg:hidden" />
              </li>
              <li>
                Watches <CaretDown size={32} className="lg-hidden lg:hidden" />
              </li>
              <hr className="my-4" />
              <div className="toplogo flex flex-col lg-hidden lg:hidden">
                <div className="flex items-center">
                  <img src={inq} alt="" className="w-8" />
                  <p className="ps-5 fw-400">Inquiry</p>
                </div>
                <div className="flex items-center">
                  <img src={user2} alt="" className="w-8" />
                  <p className="ps-5 fw-400">Feedback</p>
                </div>
              </div>
            </ul>
          </div>
        ) : (
          false
        )}

        <div className="flex items-center other-loog">
          <div>
            <img src={search} alt="" className="img-fluid w-8" />
          </div>
          <div className="md:px-8 px-2">
            <img src={heart} alt="" className="img-fluid w-8" />
          </div>
          <div>
            <img src={user} alt="" className="img-fluid w-8" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
