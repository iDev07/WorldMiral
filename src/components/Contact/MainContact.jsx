import React from "react";
import "./MainContact.scss";
function MainContact() {
  return (
    <div className="MainContact">
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <h1>Biz bilan bog'laning</h1>
            <p>
              Biz kompaniyalar guruhi, hamkorlik haqidagi savollarga javob
              beramiz va bizga ishga qanday qilib kirishni aytib beramiz:
            </p>
            <div className="numbers">
              <p>
                {" "}
                <b>
                  Yagona raqam: <span>+998 71 230 38 83</span>
                </b>
              </p>
              <p>
                {" "}
                <b>
                  Email: <span>worldmiral@mail.ru</span>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContact;
