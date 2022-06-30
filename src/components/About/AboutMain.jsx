import React, { useEffect } from "react";
import "./AboutMain.scss";
import AOS from "aos";
function AboutMain() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="AboutMain">
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <h1 data-aos="fade-left">
              Biz barcha sohada biznes yuritamiz va loyihalarni ishga tushiramiz
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMain;
