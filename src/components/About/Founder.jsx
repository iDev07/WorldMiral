import React, { useEffect } from "react";
import "./Founder.scss";
import boss1 from "../../assets/About/director.webp";
import AOS from "aos";
function Founder() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Founder">
      <div className="wrapper">
        <div className="container">
          <div className="top_about">
            <h4>
              “Orient” kompaniyalar guruhi — O‘zbekistondagi eng yirik xususiy
              investorlardan biridir. Biz iqtisodiyotning turli sohalarida
              ko'plab korxonalar va loyihalarni birlashtiramiz: biz development,
              logistika, to'qimachilik sanoati sohasida yetakchimiz. Tajribamiz
              va biznes yuritishdagi yondashuvlarimiz guruhning faol
              rivojlanishiga, biznesni diversifikatsiya qilishga va uning
              bozordagi mavqeini doimiy ravishda mustahkamlashga yordam beradi.
            </h4>
          </div>
          <div className="directors_block">
            <h1 className="h1">
              Kompaniyani 1999 yilda ikki tadbirkor ochishgan
            </h1>
            <div className="boos1">
              <div className="left" data-aos="zoom-out">
                <img src={boss1} alt="Director" />
              </div>
              <div className="right" data-aos="fade-left">
                <h1>Payzullajon Mirzayev</h1>
                <span>Asoschi</span>
                <hr />
                <p>
                  Payzullajon Rahmatullayevich Mirzayev - Orient Group
                  Management ta’sischisi va Orient Group asoschisi. Yillar
                  davomida u guruhning bir qator korxonalarini boshqargan va
                  2010-yildan 2021-yilgacha "Orient Finans Bank" XATB
                  direktorlar kengashi a'zosi bo'lgan. 1972-yilda Namangan
                  viloyatida tavallud topgan. 1993-yilda Namangan sanoat
                  institutini tamomlagan. “Mehnat shuxrati” ordeni bilan
                  mukofotlangan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
