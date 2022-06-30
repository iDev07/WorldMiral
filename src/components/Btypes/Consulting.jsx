import React from "react";
import "./Consulting.scss";
import img from "../../assets/directions/halal_cert.png";
function Consulting() {
  return (
    <div className="Consulting">
      <div className="main_top">
        <div className="wrapper">
          <div className="container">
            <div className="content">
              <h1>Konsalting xizmati</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main_content">
        <div className="intro">
          <h1>
            Bizning xizmatlaimiz sifatli va mijozlarimiz tomonidan yillar
            davomida sinovdan o'tgan .
          </h1>
        </div>
        <div className="cert1">
          <div className="container">
            <div className="left">
              <img src={img} alt="cert" />
            </div>
            <div className="right">
              <h3>
                Biz sizga "Halal" sertifikatini olishingizda yordam beramiz
              </h3>
              <p>
                Сертификат Халяль - это документ, который гарантирует, что
                товары и услуги, предназначенные для мусульманского населения,
                соответствуют требованиям исламского права и, следовательно,
                подходят для потребления как в странах с мусульманским
                большинством, так и в западных странах, где есть значительная
                группа населения, исповедующая ислам. Сертификация Халяль - это
                процесс, который обеспечивает характеристики и качество
                продуктов в соответствии с правилами, установленными Исламским
                Советом, которые разрешают использование знака Халяль.
              </p>
            </div>
          </div>
        </div>
        <div className="cert2">
          <div className="container">
            <div className="left">
              <h3>
                Biz sizga "Halal" sertifikatini olishingizda yordam beramiz
              </h3>
              <p>
                Сертификат Халяль - это документ, который гарантирует, что
                товары и услуги, предназначенные для мусульманского населения,
                соответствуют требованиям исламского права и, следовательно,
                подходят для потребления как в странах с мусульманским
                большинством, так и в западных странах, где есть значительная
                группа населения, исповедующая ислам. Сертификация Халяль - это
                процесс, который обеспечивает характеристики и качество
                продуктов в соответствии с правилами, установленными Исламским
                Советом, которые разрешают использование знака Халяль.
              </p>
            </div>
            <div className="right">
              <img src={img} alt="cert" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consulting;
