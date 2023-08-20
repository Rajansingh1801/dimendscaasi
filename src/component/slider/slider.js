import React, { useEffect, useRef } from "react";
import "./slider.css";
import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta.png";
import twit from "../../assets/icons/twitter.png";

import h1 from "../../assets/images/h1.png";
import h2 from "../../assets/images/h2.png";
import h3 from "../../assets/images/h3.png";

import inq from "../../assets/icons/inq.png";
import user from "../../assets/icons/user.png";

const AnimItem = () => {
  return (
    <>
      {/* 3 hidden and hao */}
      <div className="anim-item">
        <div className="text-center">
          <img src={h3} alt="" />
          <h1>Hidden Halo</h1>
          <div className="flex justify-center">
            <div>
              <h3>Hidden Halo</h3>
              <h5 className="m-auto">$4500</h5>
              <p>Take 20% off for a limited time.</p>
              <p>Use Code: LOVE20</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
      {/* h2 vintage and antique */}
      <div className="anim-item">
        <div className="text-center">
          <img src={h2} alt="" />
          <h1>Vintage & Antique</h1>
          <div className="flex justify-center">
            <div>
              <h3>Vintage & Antique</h3>
              <h5 className="m-auto">$4500</h5>

              <p>Take 20% off for a limited time.</p>
              <p>Use Code: LOVE20</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
      {/* h1 pave */}
      <div className="anim-item">
        <div className="text-center">
          <img src={h1} alt="" />
          <h1>Pave</h1>
          <div className="flex justify-center">
            <div className="w-max">
              <h3>Pave</h3>
              <h5 className="m-auto">$4500</h5>
              <p>Take 20% off for a limited time.</p>
              <p>Use Code: LOVE20</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
      {/* 3 hidden and hao */}
      <div className="anim-item ">
        <div className="text-center">
          <img src={h3} alt="" />
          <h1>Hidden Halo</h1>
          <div className="flex justify-center">
            <div>
              <h3>Hidden Halo</h3>
              <h5 className="m-auto">$4500</h5>
              <p>Take 20% off for a limited time.</p>
              <p>Use Code: LOVE20</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
      {/* ring2 vintage and antique */}
      <div className="anim-item">
        <div className="text-center">
          <img src={h2} alt="" />
          <h1>Vintage & Antique</h1>
          <div className="flex justify-center">
            <div>
              <h3>Vintage & Antique</h3>
              <h5 className="m-auto">$4500</h5>
              <p>Take 20% off for a limited time.</p>
              <p>Use Code: LOVE20</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
      {/* ring1 pave */}
      <div className="anim-item active">
        <div className="text-center">
          <img src={h1} alt="" />
          <h1>Pave</h1>
          <div className="flex justify-center">
            <div className="w-max">
              <h3>Pave</h3>
              <h5 className="m-auto">$4500</h5>
              <p>Take 20% off for a limited time.</p>
              <p>Use Code: LOVE20</p>
              <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AnimationContainer = () => {
  const interval = useRef(null);

  useEffect(() => {
    const animItems = document.querySelectorAll(".anim-item");

    const Config = {
      COUNT: animItems.length,
      RefX: () => (window.innerHeight * 2) / 2,
      RefY: () => (window.innerHeight * 2) / 2,
      Radius: () => (window.innerHeight * 2) / 2,
      RAD: (deg = 1) => (deg / 180) * Math.PI,
      SMOOTH: 20,
    };

    animItems.forEach((animItem, index) => {
      index = index + 1;

      animItem.dats = {
        index: index,
        dDeg: 360 / Config.COUNT,
        deg: index * (360 / Config.COUNT),
        targetDeg: index * (360 / Config.COUNT),
        top: 0,
        left: 0,
      };
    });

    interval.current = setInterval(() => {
      animItems.forEach((animItem) => {
        animItem.dats.targetDeg = animItem.dats.deg + animItem.dats.dDeg;
      });

      const activeAnimItem = document.querySelector(".anim-item.active");

      const newIndex =
        activeAnimItem.dats.index - 1 < 1
          ? Config.COUNT
          : activeAnimItem.dats.index - 1;

      activeAnimItem.classList.remove("active");
      document
        .querySelector(`.anim-item:nth-child(${newIndex})`)
        .classList.add("active");
    }, 5000);

    const rotateAnimItem = () => {
      requestAnimationFrame(rotateAnimItem);

      animItems.forEach((animItem) => {
        animItem.dats.deg +=
          (animItem.dats.targetDeg - animItem.dats.deg) / Config.SMOOTH;

        animItem.dats.top =
          Config.RefY() -
          Math.cos(Config.RAD(animItem.dats.deg)) * Config.Radius();

        animItem.dats.left =
          Config.RefX() -
          Math.sin(Config.RAD(animItem.dats.deg)) * Config.Radius();

        animItem.style.top = animItem.dats.top + "px";
        animItem.style.left = animItem.dats.left + "px";
      });
    };

    rotateAnimItem();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  const animItems = <AnimItem />;

  return (
    <div className="anim-cont">
      <div className="anim-rotator">{animItems}</div>
      <div className="toplogo flex justify-between px-24 lg:flex hidden">
        <div className="flex items-center">
          <img src={inq} alt="" className="w-8" />
          <p className="ps-5 fw-400">Inquiry</p>
        </div>
        <div className="flex items-center">
          <img src={user} alt="" className="w-8" />
          <p className="ps-5 fw-400">Feedback</p>
        </div>
      </div>
      <div className="social-icon flex">
        <div>
          <img src={fb} alt="" className="w-10" />
        </div>
        <div className="px-4">
          <img src={insta} alt="" className="w-10" />
        </div>
        <div>
          <img src={twit} alt="" className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default AnimationContainer;
