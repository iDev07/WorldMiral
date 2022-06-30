import React from "react";
import img1 from "../../assets/Home/news_back1.webp";
import img2 from "../../assets/Home/news_back2.webp";
import { Link } from "react-router-dom";
import "./Newses.scss";
function Newses() {
  return (
    <div className="Newses">
      <div className="wrapper">
        <div className="container">
          <div className="mycol">
            <Link to="/news">
              <div className="img_block">
                <img src={img1} alt="img1" />
              </div>
              <div className="content">
                <h5>
                  Korxonalarimizdan birining hududida FVV va Mehnat vazirliklari
                  ishtirokida mehnatni muhofaza qilish tadbiri bo‘lib o‘tdi.
                </h5>
                <p>
                  Mutaxassislarga ko'rgazmali amaliy bilimlar namoyish etildi.
                  Ma'ruza qismini tinglab, xavfsizlik choralari va favqulodda
                  vaziyatlarda yordam ko'rsatish bo'yicha ishlar olib borildi.
                </p>
                <span className="data">09.06.2022</span>
              </div>
            </Link>
          </div>
          <div className="mycol">
            <Link to="/news">
              <div className="img_block">
                <img src={img2} alt="img1" />
              </div>
              <div className="content">
                <h5>
                  Kompaniyamizda all4u.market loyihamiz uchun alohida IT bo'limi
                  ochildi !
                </h5>
                <p>
                  Mutaxassislarga ko'rgazmali amaliy bilimlar namoyish etildi.
                  Ma'ruza qismini tinglab, xavfsizlik choralari va favqulodda
                  vaziyatlarda yordam ko'rsatish bo'yicha ishlar olib borildi.
                </p>
                <span className="data">09.06.2022</span>
              </div>
            </Link>
          </div>
          <div className="mycol">
            <Link to="/news">
              <div className="img_block">
                <img src={img1} alt="img1" />
              </div>
              <div className="content">
                <h5>
                  Korxonalarimizdan birining hududida FVV va Mehnat vazirliklari
                  ishtirokida mehnatni muhofaza qilish tadbiri bo‘lib o‘tdi.
                </h5>
                <p>
                  Mutaxassislarga ko'rgazmali amaliy bilimlar namoyish etildi.
                  Ma'ruza qismini tinglab, xavfsizlik choralari va favqulodda
                  vaziyatlarda yordam ko'rsatish bo'yicha ishlar olib borildi.
                </p>
                <span className="data">09.06.2022</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newses;
