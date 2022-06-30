import React from "react";
import team from "../../assets/About/team_icon.svg";
import balance from "../../assets/About/balance.svg";
import hands from "../../assets/About/hands.svg";
import growup from "../../assets/About/growup.svg";
import target from "../../assets/About/target.svg";
import "./Advanteges.scss";
function Advanteges() {
  return (
    <div className="Advanteges">
      <div className="wrapper">
        <div className="intro">
          <h1>Qadriyatlar rivojlanishingizga yordam beradi</h1>
        </div>
        <div className="container">
          <div className="mycol">
            <div className="top">
              <img src={team} alt="team" />
            </div>
            <div className="content">
              <h3>Jamoada ishlaymiz</h3>
              <p>
                Birgalikda harakat qilamiz, bir-birimizga quloq solamiz va
                tushunamiz.
              </p>
            </div>
          </div>
          <div className="mycol">
            <div className="top">
              <img src={hands} alt="team" />
            </div>
            <div className="content">
              <h3>G'amxo'rlik ko'rsatamiz</h3>
              <p>
                Biz mijozlarimiz, xodimlarimiz va hamkorlarimizni hurmat qilgan
                holda jamoat manfaatlarini ko'zlab ishlaymiz.
              </p>
            </div>
          </div>
          <div className="mycol">
            <div className="top">
              <img src={growup} alt="team" />
            </div>
            <div className="content">
              <h3>Doimo rivojlanib boramiz</h3>
              <p>
                Birgalikda harakat qilamiz, bir-birimizga quloq solamiz va
                tushunamiz.
              </p>
            </div>
          </div>
          <div className="mycol">
            <div className="top">
              <img src={target} alt="team" />
            </div>
            <div className="content">
              <h3>Samaradorlikka intilamiz</h3>
              <p>
                Tijorat muvaffaqiyati va ishdagi yuqori ko'rsatkichlarga
                intilamiz.
              </p>
            </div>
          </div>
          <div className="mycol">
            <div className="top">
              <img src={balance} alt="team" />
            </div>
            <div className="content">
              <h3>Xilma-xillikni qo'llab-quvvatlaymiz</h3>
              <p>
                Birgalikda harakat qilamiz, bir-birimizga quloq solamiz va
                tushunamiz.
              </p>
            </div>
          </div>
          <div className="mycol">
            <div className="top">
              <img src={team} alt="team" />
            </div>
            <div className="content">
              <h3>Biz mas'uliyat bilan harakat qilamiz</h3>
              <p>
                Birgalikda harakat qilamiz, bir-birimizga quloq solamiz va
                tushunamiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advanteges;
