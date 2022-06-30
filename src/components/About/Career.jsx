import React, { useEffect } from "react";
import "./Career.scss";
import projects from "../../assets/About/projects.svg";
import education from "../../assets/About/education.svg";
import dohod from "../../assets/About/dohod.svg";
import skameka from "../../assets/About/skameka.svg";
import stars from "../../assets/About/stars.svg";
import hand from "../../assets/About/hand.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header/Header";
import AOS from "aos";

function Career() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="CareerPage">
      <Header />
      <div className="wrapperCareer">
        <div className="ndwrapper">
          <div className="container">
            <div className="head_content">
              <h1 data-aos="fade-right">
                Jamoamizga
                <br />
                qo‘shiling
              </h1>
              <p data-aos="fade-left">
                Orient kompaniyalar guruhi yirik va mas’uliyatli ish beruvchi
                hisoblanadi. Biz qurilish, logistika, chakana savdo va
                to‘qimachilik sanoatiga rahbarlar, ekspertlar va mutaxassislarni
                jalb qilishdan manfaatdormiz.
              </p>
            </div>
            <div className="small_about">
              <h4>
                Guruhda 25 000 dan ortiq kishi faoliyat yuritadi. Har bir
                faoliyat yo‘nalishi bo‘yicha dunyoning turli davlatlaridan
                taklif etilgan mutaxassislar biznesni jahon andozalari
                darajasida qo‘llab-quvvatlash va rivojlantirishga yordam beradi.
                Guruh kompaniyalarimizda odamlar shaffof ish haqi tizimi, qulay
                ish sharoitlari va martaba imkoniyatlarini qadrlashadi.
              </h4>
            </div>
            <div className="advanteges">
              <div className="mycol">
                <img src={dohod} alt="dohod" />
                <h3>Barqaror daromad</h3>
              </div>
              <div className="mycol">
                <img src={skameka} alt="dohod" />
                <h3>Qulay sharoitlar</h3>
              </div>
              <div className="mycol">
                <img src={education} alt="dohod" />
                <h3>O'quv dasturlari</h3>
              </div>
              <div className="mycol">
                <img src={stars} alt="dohod" />
                <h3>Kuchli yetakchilar</h3>
              </div>
              <div className="mycol">
                <img src={projects} alt="dohod" />
                <h3>Yirik loyihalar</h3>
              </div>
              <div className="mycol">
                <img src={hand} alt="dohod" />
                <h3>Professional jamoa</h3>
              </div>
            </div>
            <div className="small_about">
              <h4>
                Yirik loyihalarni ishlab chiqish va amalga oshirishdan
                manfaatdor odamlarni jalb etish biz uchun muhimdir. Biz har bir
                xodimning tashabbusini olqishlaymiz va uni qadrlaymiz: har kim
                o‘z salohiyatini ochib, kuchli murabbiylar rahbarligida tezda
                martaba pog‘onasidan yuqoriga ko‘tarilishi mumkin.
              </h4>
              <h4>
                Mutaxassislar kompaniyalar guruhida o'zlari uchun yangi
                yo'nalishlarni tanlab, nafaqat vertikal, balki gorizontal
                ravishda ham harakat qilishlari mumkin.
              </h4>
            </div>
            <div className="bigwrap">
              <div className="offers">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    Korporativ bilimlar bazasi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    Kompetentsiya kartasi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    Korporativ bilimlar bazasi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    Kompetentsiya kartasi
                  </li>
                </ul>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    Korporativ bilimlar bazasi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    Kompetentsiya kartasi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    Korporativ bilimlar bazasi
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                    Kompetentsiya kartasi
                  </li>
                </ul>
              </div>
            </div>

            <div className="for_students">
              <div className="studentswrap">
                <h1>
                  Biz talabalar va yosh mutaxassislarni qo'llab-quvvatlaymiz
                </h1>
                <div className="useful">
                  <div className="mycol">
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>{" "}
                    Amaliyot dasturlari
                  </div>
                  <div className="mycol">
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>{" "}
                    Universitetlar bilan hamkorlik
                  </div>
                  <div className="mycol">
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>{" "}
                    Konferensiyalar va karyera ko'rgazmalari
                  </div>
                </div>
              </div>
            </div>
            <div className="small_about">
              <h4>
                Har bir biznes yo'nalishida yuzlab o'ziga xos pozitsiyalar
                mavjud: bizda turli kasb va mutaxassislikdagi talabalar va
                bitiruvchilarga talab bor. Kompaniyalarimizning hozirgi
                top-menejerlari mamlakatimizning yetakchi oliy o‘quv
                yurtlarining karyera markazlari bilan faol hamkorlik qiladilar,
                talabalar uchun o‘z kasbiy qiziqishlari bo‘yicha mavzuli
                ma’ruzalar, kasbga oid maslahatlar va kasbiy yo‘nalish bo‘yicha
                mashg‘ulotlar o‘tkazadilar.
              </h4>
            </div>
            <div className="offer_link">
              <div className="for_link">
                <h2>Bo'sh ish o'rinlarini tanlang va jamoaga qo'shiling</h2>
                <a href="/">
                  <button>Bo'sh ish o'rinlari</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Career;
