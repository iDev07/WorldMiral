import React from "react";
import logo from "../../assets/directions/marketplace.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Marketplace.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
function MarketplaceMain() {
  return (
    <div className="MarketplaceMain">
      <div className="main_top">
        <div className="wrapper">
          <div className="container">
            <div className="content">
              <h1>Marketpleys</h1>
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
        <a href="https://all4u.market">
          <div className="direct_logo">
            <img src={logo} alt="Logo" />
          </div>
        </a>
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
      </div>
    </div>
  );
}

export default MarketplaceMain;
