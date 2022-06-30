import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import partner1 from "../../assets/Home/turkcertlogo.png";
import partner2 from "../../assets/Home/uzcharm.png";
import partner3 from "../../assets/Home/allin.png";
import partner4 from "../../assets/Home/makiz.png";
import partner5 from "../../assets/Home/nmed.png";
import partner6 from "../../assets/Home/nthh.jpg";
import partner7 from "../../assets/Home/glass.jpg";
import partner8 from "../../assets/Home/candy.png";
import partner9 from "../../assets/Home/sunfinite.png";
import partner10 from "../../assets/Home/bonito.jpg";
import partner11 from "../../assets/Home/bahmal.png";
import partner12 from "../../assets/Home/vero.jpg";
import partner13 from "../../assets/Home/rano.jpg";
import partner14 from "../../assets/Home/tst.png";
import partner15 from "../../assets/Home/krember.png";
import partner16 from "../../assets/Home/vwd.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Partners.scss";

import { Pagination, Navigation, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <div className="Partners">
        <div className="wrapper">
          <div className="intro">
            <div className="div">
              <h1>Hamkorlar</h1>
              <p>
                Turli sohalardagi kompaniyalar bilan hamkorlik muvaffaqiyatga
                erishish va kelajakni yaxshiroq qilishga yordam beradi
              </p>
            </div>
          </div>
          <Swiper
            slidesPerView={5}
            spaceBetween={0}
            slidesPerGroup={1}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loopFillGroupWithBlank={true}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://www.turkcert.com.tr/">
                  <img src={partner1} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://uzcharm.uz/uz/">
                  <img src={partner2} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="">
                  <img src={partner3} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://makiz.uz/">
                  <img src={partner4} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://nmedov.uz/ru/">
                  <img src={partner5} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://www.ntholding.uz/">
                  <img src={partner6} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://glass-expo.uz/">
                  <img src={partner7} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://candy-gold.uz/ru/">
                  <img src={partner8} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://sunfinite.uz/">
                  <img src={partner9} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://bonitoshop.uz/">
                  <img src={partner10} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://www.bahmal.uz/ru/">
                  <img src={partner11} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://www.vero.uz">
                  <img src={partner12} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://www.rano.uz">
                  <img src={partner13} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="https://tst-g.uz/">
                  <img src={partner14} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="c_logo">
                <a href="http://www.krember.uz/?lang=ru">
                  <img src={partner15} alt="partner" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="c_logo">
                <a href="https://wangdagroup.uz/">
                  <img src={partner16} alt="partner" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
