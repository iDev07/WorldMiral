import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import logo from "../../assets/Home/logo.svg";
import { Link } from "react-router-dom";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTelegramPlane,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.scss";
import "./NavSelect.css";
import i18n from "./../../i18n";
import { useTranslation } from "react-i18next";
function Navbar() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  const [subMenu1, setSubMenu1] = useState("submenu1");
  const [subMenu2, setSubMenu2] = useState("submenu2");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mob_nav">
        <div className="wrapper">
          <div className="left">
            <div className="select">
              <select name="lang" value={lang} onChange={handleChange}>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
          <div className="centre">
            <a href="/">
              <img src={logo} alt="rasm bor edi" />
            </a>
          </div>
          <button className="mob_btn" onClick={handleShow}>
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            {/* <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> */}
          </button>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <div className="socials">
              <ul>
                <li>
                  <a className="facebook_icon" href="/">
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a className="telegram_icon" href="/">
                    <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a className="instagram_icon" href="/">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="quick_links">
              <li>
                <a href="/"> {t("menu.main1")}</a>
              </li>
              <li>
                <p
                  onClick={() => {
                    setSubMenu1("activeSub1");
                  }}
                >
                  {" "}
                  {t("menu.main2")}
                  <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                </p>
                <ul className={`submenu1 ${subMenu1}`}>
                  <li>
                    <Link to="/about-us">{t("submenus.about1")}</Link>
                  </li>
                  <li>
                    <Link to="/team">{t("submenus.about2")}</Link>
                  </li>
                  <Link to="/career">{t("submenus.about3")}</Link>
                  <li></li>
                </ul>
              </li>
              <li>
                <p
                  onClick={() => {
                    setSubMenu2("activeSub2");
                  }}
                >
                  {" "}
                  {t("menu.main3")}{" "}
                  <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                </p>
                <ul className={`submenu2 ${subMenu2}`}>
                  <li>
                    <Link to="/marketplace">{t("submenus.direct1")}</Link>
                  </li>
                  <li>
                    <Link to="/produce">{t("submenus.direct2")}</Link>
                  </li>
                  <li>
                    <Link to="/reproduce">{t("submenus.direct3")}</Link>
                  </li>
                  <li>
                    <Link to="/export">{t("submenus.direct4")}</Link>
                  </li>
                  <li>
                    <a href="/consalting">{t("submenus.direct5")}</a>
                  </li>
                  <li>
                    <a href="/external-promotion">{t("submenus.direct6")}</a>
                  </li>
                  <li></li>
                </ul>
              </li>
              <li>
                <a href="/news"> {t("menu.main4")} </a>
              </li>
              <li>
                <a href="/contact"> {t("menu.main5")} </a>
              </li>
            </ul>
            <div className="mob_footer"></div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default Navbar;
