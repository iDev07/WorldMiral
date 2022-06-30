import React, { useEffect } from "react";
import "./WhyWe.scss";
import AOS from "aos";
function WhyWe() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });
  return (
    <div className="WhyWe">
      <div className="wrapper">
        <div className="intro">
          <h1>Nima uchun bizga ishonishadi</h1>
        </div>
        <div className="container">
          <div className="mycol" data-aos="fade-up-right">
            <h3>
              Har bir ishda <br /> professionallik
            </h3>
            <p>
              Biz ishga mas'uliyat bilan yondashimiz va shuning uchun ham bizga
              doim ishonishadi. Bizning jamoa ko'p yillik tajribaga bo'lgan
              hodimlardan tashkil topgan
            </p>
          </div>
          <div className="mycol">
            <h3>Natija - qilingan mehnatlar hosilasidir</h3>
            <p>
              Mijozlarimiz bizga ishonishining yana bir sabablaridan biri bu biz
              erishgan natijalar va qilingan loyihalarning muvaffaqiyatli
              yakunlanganligidir.
            </p>
          </div>
          <div className="mycol" data-aos="fade-up-left">
            <h3>Rivojlanishni yaxshi ko'ruvchi jamoa </h3>
            <p>
              Bizning jamoa har doim o'zining ustida ishlab malakasini oshirib
              boradi va bu ishga har odim ijobiy ta'sir qiladi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWe;
