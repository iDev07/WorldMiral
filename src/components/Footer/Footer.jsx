import React from "react";
import "./Footer.scss";
import logo from "../../assets/Home/logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="Footer">
      <div className="wrapper">
        <div className="container">
          <div className="mycol1">
            <Link to="/">
              <div className="logo">
                <img src={logo} alt="logo" />
                <p>World Miral Group</p>
              </div>
            </Link>
          </div>
          <div className="mycol2">
            <p>
              © Group company World Miral. <br></br> All rights reserved
            </p>
          </div>
          <div className="mycol3">
            <div className="social">
              <ul>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
