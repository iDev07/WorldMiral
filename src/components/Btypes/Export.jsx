import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import partner from "../../assets/Home/partner1.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Export.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
function Export() {
  return (
    <div className="Export">
      <div className="main_top">
        <div className="wrapper">
          <div className="container">
            <div className="content">
              <h1>
                Bizning eksport xizmatlarimiz orqali mahsulotingiz butun dunyo
                yuzini ko'rishi mumkin.{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main_content">
        <div className="small_about container">
          <h4>
            Предоставляем людям выбор качественных продуктов и товаров для дома
            в сети супермаркетов Makro. Больше тысячи поставщиков обеспечивают
            богатый ассортимент, который регулярно обновляется на основе анализа
            предпочтений покупателей.{" "}
            <h4>
              С каждым годом расширяемся, открываем новые горизонты возможностей
              для себя, обеспечиваем работой и перспективным будущим наше
              молодое поколение, стремимся сделать уровень жизни лучше.
              Представляли Узбекистан на премии Retail Asia Awards, где наша
              страна вошла в список победителей
            </h4>
          </h4>
        </div>
        <div className="m_facts">
          <div className="wrapper">
            <div className="container">
              <div className="mycol">
                <div className="count">
                  <CountUp end={100} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <p>Korxonalar</p>
              </div>
              <div className="mycol">
                <div className="count">
                  <CountUp end={100} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <p>Korxonalar</p>
              </div>
              <div className="mycol">
                <div className="count">
                  <CountUp end={100} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </div>
                <p>Korxonalar</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="advants_project ">
            <ul>
              <li>
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                Oziq-ovqat sifati tizimi joriy etildi. Bu ISO 9001: 2015, ISO
                2200: 2018 sertifikatlari bilan tasdiqlangan. Bu kompaniya
                qiymatini oshiradi, xalqaro bozorga chiqish imkonini beradi va
                iste'molchilar bilan fikr almashish tizimini yaxshilaydi.
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                Oziq-ovqat sifati tizimi joriy etildi. Bu ISO 9001: 2015, ISO
                2200: 2018 sertifikatlari bilan tasdiqlangan. Bu kompaniya
                qiymatini oshiradi, xalqaro bozorga chiqish imkonini beradi va
                iste'molchilar bilan fikr almashish tizimini yaxshilaydi.
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                Oziq-ovqat sifati tizimi joriy etildi. Bu ISO 9001: 2015, ISO
                2200: 2018 sertifikatlari bilan tasdiqlangan. Bu kompaniya
                qiymatini oshiradi, xalqaro bozorga chiqish imkonini beradi va
                iste'molchilar bilan fikr almashish tizimini yaxshilaydi.
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                Oziq-ovqat sifati tizimi joriy etildi. Bu ISO 9001: 2015, ISO
                2200: 2018 sertifikatlari bilan tasdiqlangan. Bu kompaniya
                qiymatini oshiradi, xalqaro bozorga chiqish imkonini beradi va
                iste'molchilar bilan fikr almashish tizimini yaxshilaydi.
              </li>
            </ul>
          </div>
        </div>

        <div className="Exportpartners">
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
              slidesPerView={4}
              spaceBetween={0}
              slidesPerGroup={1}
              loop={true}
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
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="c_logo">
                  <img src={partner} alt="partner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <img src={partner} alt="partner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <img src={partner} alt="partner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <img src={partner} alt="partner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <img src={partner} alt="partner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <img src={partner} alt="partner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <img src={partner} alt="partner" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="c_logo">
                  <img src={partner} alt="partner" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Export;
