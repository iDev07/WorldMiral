import React, { useState } from "react";
import logo from "../../assets/Home/logo.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
function Header() {
  const { t } = useTranslation();

  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };
  let activeStyle = {
    textDecoration: "underline",
  };

  const [scroll, setScroll] = useState("");
  window.addEventListener("scroll", () => {
    if (window.scrollY < 500) {
      setScroll("");
    } else {
      setScroll("scrolled");
    }
  });
  return (
    <div className={`Header ${scroll}`}>
      <div className="mycontainer">
        <div className="wrapper">
          <div className="leftbox">
            <NavLink to="/">
              <img src={logo} alt="logo" />
              <p>WorldMiral</p>
            </NavLink>
          </div>
          <div className="rightbox">
            <ul>
              <li className="home_link">
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {t("menu.main1")}
                </NavLink>
              </li>
              <li className="sub_menu1">
                <NavLink
                  to="/about-us"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {t("menu.main2")}
                  <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
                  <ul className="about_us">
                    <li>
                      <NavLink
                        to="/about-us"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.about1")}
                      </NavLink>
                      <NavLink
                        to="/team"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.about2")}
                      </NavLink>
                      <NavLink
                        to="/career"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.about3")}
                      </NavLink>
                    </li>
                  </ul>
                </NavLink>
              </li>
              <li className="sub_menu2">
                <NavLink
                  to="/marketplace"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {t("menu.main3")}
                  <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
                  <ul className="business_directs">
                    <li>
                      <NavLink
                        to="/marketplace"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.direct1")}
                      </NavLink>
                      <NavLink
                        to="/produce"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.direct2")}
                      </NavLink>
                      <NavLink
                        to="/reproduce"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.direct3")}
                      </NavLink>
                      <NavLink
                        to="/export"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.direct4")}
                      </NavLink>
                      <NavLink
                        to="/consalting"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.direct5")}
                      </NavLink>
                      <NavLink
                        to="/external-promotion"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        {t("submenus.direct6")}
                      </NavLink>
                    </li>
                  </ul>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {t("menu.main4")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {t("menu.main5")}
                </NavLink>
              </li>

              <li className="change_lang">
                <select name="lang" value={lang} onChange={handleChange}>
                  <option value="uz">UZ</option>
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
