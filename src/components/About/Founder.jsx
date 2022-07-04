import React, { useEffect } from "react";
import "./Founder.scss";
import { useTranslation } from "react-i18next";
import boss1 from "../../assets/About/director.webp";
import AOS from "aos";
function Founder() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Founder">
      <div className="wrapper">
        <div className="container">
          <div className="top_about">
            <h4>
              World Miral Group bir vaqtning o'zida bir nechta biznes
              yo'nalishlarida yetakchi o'rinni egallash maqsadida 2019 yilda
              tashkil etilgan. Bugungi kunda tashkilotimiz ishlab chiqarish,
              konsalting, qayta ishlash, tashqi reklamani ilgari surish, eksport
              va importga har tomonlama ko‘maklashish, shuningdek, IT sohalarida
              istiqbolli loyihalar bilan shug‘ullanadi. Bizning kompaniyamiz va
              jamoamiz erishilgan natijalar va yutuqlar bilan cheklanib
              qolmaydi. Kompaniyamiz ishonch bilan olg'a intilmoqda va bundan
              ham yuqori natijalarga erishishga tayyor.
            </h4>
          </div>
          <div className="directors_block">
            {/* <h1 className="h1">
              Kompaniyani 1999 yilda ikki tadbirkor ochishgan
            </h1> */}
            <div className="boos1">
              <div className="left" data-aos="zoom-out">
                <img src={boss1} alt="Director" />
              </div>
              <div className="right" data-aos="fade-left">
                <h1>Aslanov Mirabbos</h1>
                <span>Ta'sischi</span>
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
