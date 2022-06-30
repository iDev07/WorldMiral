import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.min.css";
import logo from "../../assets/Home/logo.svg";
import logo_en from "../../assets/Home/logo_en.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "./HomeMain.scss";
function HomeMain() {
  const { t } = useTranslation();
  return (
    <div className="HomeMain">
      <Carousel effect="fade">
        <div>
          <div className="wrapper1">
            <div className="content">
              <div className="container">
                <div className="left">
                  <h1>{t("homeMain.mainText1")}</h1>
                  <p>{t("homeMain.mainDes1")}</p>
                </div>
                <div className="right">
                  <img src={logo} Alt="Thereisanimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper2">
            <div className="content">
              <div className="container">
                <div className="left">
                  <h1>{t("homeMain.mainText2")} ?</h1>
                  <p>{t("homeMain.mainDes2")}</p>
                </div>
                <div className="right">
                  <img src={logo} Alt="Thereisanimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper3">
            <div className="content">
              <div className="container">
                <div className="left">
                  <h1>{t("homeMain.mainText3")}</h1>
                  <p>{t("homeMain.mainDes3")}</p>
                </div>
                <div className="right">
                  <img src={logo_en} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
export default HomeMain;
