import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Directions.scss";
function Directions() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="Directions">
      <div className="wrapper">
        <div className="intro" data-aos="fade-down">
          <h1>Biznes yo'nalishlari</h1>
        </div>
        <div className="container">
          <div className="mycol1" data-aos="fade-right">
            <Link to="/consalting">
              <div className="img_wrap">
                <p>
                  ALL4U.MARKET xalqaro savdo platformasi orqali kompaniyalarga
                  tovarlarni eksport va import qilishda chegarada tovarlarni
                  deklaratsiyalashda konsalting yordami va yordamini ko‘rsatadi.
                  Bizning kompaniya F-ORIENT LUX LOGISTIK bilan hamkorlikda
                  deklaratsiyada yordam beradi.
                </p>
              </div>
            </Link>
            <div className="content">
              <h2>Konsalting xizmati</h2>
              <Link to="/consalting">
                <button>Batafsil</button>
              </Link>
            </div>
          </div>
          <div className="mycol2" data-aos="fade-left">
            <Link to="/export">
              <div className="img_wrap">
                <p>
                  ALL4U.MARKET platformasi butun dunyo bo'ylab ishlab
                  chiqaruvchilar uchun ulgurji savdo maydonchasini ta'minlovchi
                  platformadir. Platforma eksportyor va import qiluvchilarga eng
                  yaxshi mahsulotni xalqaro bozorda eng yaxshi narxda sotib
                  olish imkonini beradi. Biroq, bu saytda buyurtma berish va
                  xaridor tomonidan tovarlarni qabul qilishdan tortib uzoq
                  harakatlar zanjiridagi birinchi qadamdir.
                </p>
              </div>
            </Link>
            <div className="content">
              <h2>Eksport</h2>
              <Link to="/export">
                <button>Batafsil</button>
              </Link>
            </div>
          </div>
          <div className="mycol3" data-aos="fade-right">
            <Link to="/produce">
              <div className="img_wrap">
                <p>
                  Tarkibimizda bo'lgan "ALL IN" MCHJ korxonasi ko'katlar,
                  salatlar, mevalar va dukkaklilar, sabzavotlarni yig'ish va
                  saralash bilan shug'ullanadi va Markaziy Osiyoda quritilgan
                  mahsulotlar ishlab chiqarish soohasidagi eng yaxshi
                  vakillardan biridir.
                </p>
              </div>
            </Link>
            <div className="content">
              <h2>Qayta ishlash va ishlab chiqarish</h2>
              <Link to="/produce">
                <button>Batafsil</button>
              </Link>
            </div>
          </div>
          <div className="mycol4" data-aos="fade-left">
            <Link to="/matrketplace">
              <div className="img_wrap">
                <p>
                  Mahsulot sifati yoki yetkazib berish sanasi xaridor va
                  sotuvchi onlayn buyurtma berishda kelishilganidan farq
                  qiladigan hollarda sizga savdo kafolati yordam beradi.
                </p>
              </div>
            </Link>
            <div className="content">
              <h2>Marketpleys</h2>
              <Link to="/matrketplace">
                <button>Batafsil</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
