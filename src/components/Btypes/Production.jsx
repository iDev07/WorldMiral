import React from "react";
import product1 from "../../assets/directions/diagnokim1.jpg";
import product2 from "../../assets/directions/diagnokim2.jpg";
import "./Production.scss";
function Production() {
  return (
    <div className="Production">
      <div className="main_top">
        <div className="wrapper">
          <div className="content container">
            <h1>Bizn esning boshqa sohalarida loyihalarni rivojlantiramiz</h1>
          </div>
        </div>
      </div>
      <div className="main_content">
        <div className="block1 container">
          <div className="left">
            <p>
              Oshxona jihozlari, hammom mebellari, shkaflar va eshiklar ishlab
              chiqarishga ixtisoslashgan mebel ishlab chiqarish bo‘yicha
              mintaqaviy yetakchi.
            </p>
          </div>
          <div className="right">
            <img src={product1} alt="product1" />
          </div>
        </div>
        <div className="block2 container">
          <div className="left">
            <img src={product2} alt="product1" />
          </div>
          <div className="right">
            <p>
              Oshxona jihozlari, hammom mebellari, shkaflar va eshiklar ishlab
              chiqarishga ixtisoslashgan mebel ishlab chiqarish bo‘yicha
              mintaqaviy yetakchi.
            </p>
          </div>
        </div>
        <div className="block1 container">
          <div className="left">
            <p>
              Oshxona jihozlari, hammom mebellari, shkaflar va eshiklar ishlab
              chiqarishga ixtisoslashgan mebel ishlab chiqarish bo‘yicha
              mintaqaviy yetakchi.
            </p>
          </div>
          <div className="right">
            <img src={product1} alt="product1" />
          </div>
        </div>
        <div className="block2 container">
          <div className="left">
            <img src={product2} alt="product1" />
          </div>
          <div className="right">
            <p>
              Oshxona jihozlari, hammom mebellari, shkaflar va eshiklar ishlab
              chiqarishga ixtisoslashgan mebel ishlab chiqarish bo‘yicha
              mintaqaviy yetakchi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Production;
