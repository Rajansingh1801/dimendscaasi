import React from "react";
import "./style.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";

const Contactus = () => {
  return (
    <>
      <div className="md:px-24 px-5">
        <div className="contact-container">
          <div className="flex-1 cont-form">
            <div className="lg:pr-10">
              <h5>Keep In Touch</h5>
              <p>
                Our lab created diamonds are the eco-conscious choice, and
                exhibit the same sparkle as natural diamonds.
              </p>

              <div className="py-6 lg:hidden">
                <div className="flex justify-center">
                  <img src={img1} alt="" className="p-1" />
                  <img src={img2} alt="" className="p-1" />
                </div>
                <div className="flex justify-center">
                  <img src={img3} alt="" className="p-1" />
                  <img src={img4} alt="" className="p-1" />
                </div>
              </div>

              <input
                type="text"
                placeholder="Enter your email Id to subscribe"
              />
              <button>Sign up</button>
            </div>
          </div>
          <div className="flex-1 cont-img ">
            <div className="flex justify-between">
              <img src={img1} alt="" className="p-1" />
              <img src={img2} alt="" className="p-1" />
            </div>
            <div className="flex justify-between">
              <img src={img3} alt="" className="p-1" />
              <img src={img4} alt="" className="p-1" />
            </div>
          </div>
        </div>
        <hr className="my-5 h-1" />
      </div>
    </>
  );
};

export default Contactus;
