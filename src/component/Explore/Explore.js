import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import s1 from "../../assets/images/round.png";
import s2 from "../../assets/images/emerald.png";
import s3 from "../../assets/images/oval.png";
import s4 from "../../assets/images/heart.png";
import s5 from "../../assets/images/assesher.png";

import "./style.css";

const Explore = () => {
  return (
    <>
      <div className="explore lg:px-20 px-5 py-20 text-center">
        <h3>Explore Loose Diamonds</h3>
        <p>
          Every diamond in our collection is selected for its <br /> superior
          cut, symmetry, and shape.
        </p>

        <div className="slider">
          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={false}
            autoplay={true}
            slidesPerView={"auto"}
            modules={[EffectCoverflow, Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: "auto",
              },
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={s1} alt="slide_image" />
              <div>
                <h5>Rounded</h5>
                <p>Every diamond in our collection</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={s2} alt="slide_image" />
              <div>
                <h5>Emerald</h5>
                <p>Every diamond in our collection</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={s3} alt="slide_image" />
              <div>
                <h5>Oval</h5>
                <p>Every diamond in our collection</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={s4} alt="slide_image" />
              <div>
                <h5>Heart</h5>
                <p>Every diamond in our collection</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={s5} alt="slide_image" />
              <div>
                <h5>Asscher</h5>
                <p>Every diamond in our collection</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={s2} alt="slide_image" />
              <div>
                <h5>Emerald</h5>
                <p>Every diamond in our collection</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={s4} alt="slide_image" />
              <div>
                <h5>Heart</h5>
                <p>Every diamond in our collection</p>
              </div>
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Explore;
