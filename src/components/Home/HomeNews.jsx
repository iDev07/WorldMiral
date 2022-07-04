import React, { useEffect } from "react";
import "./HomeNews.scss";
import img1 from "../../assets/Home/sign.webp";
import img2 from "../../assets/Home/all4u.PNG";
import { Link } from "react-router-dom";
import AOS from "aos";
function HomeNews() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <div className="HomeNews">
      <div className="wrapper">
        <div className="intro">
          <h1>Yangiliklar</h1>
        </div>
        <div className="container">
          <div className="mycol" data-aos="zoom-in">
            <Link to="/news1">
              <div className="img_block">
                <img src={img1} alt="img1" />
              </div>
              <div className="content">
                <h5>
                  O‘zbekiston Respublikasi Vazirlar Mahkamasining 31.12.2020
                  yildagi 826-son qaroriga binoan korxonamiz eksportyorlarga
                  konsalting xizmatlarini ko'rsatishni boshladi
                </h5>
                <p>
                  Mazkur Nizom O‘zbekiston Respublikasi Investitsiyalar va
                  tashqi savdo vazirligi huzuridagi Eksportni rag‘batlantirish
                  agentligi (keyingi o‘rinlarda — Agentlik) tomonidan eksport
                  qiluvchi tashkilotlarga eksport faoliyatini qo‘llab-quvvatlash
                  maqsadida moliyaviy yordam ko‘rsatish tartibini belgilaydi.
                </p>
                <span className="data">21.01.2021</span>
              </div>
            </Link>
          </div>
          <div className="mycol" data-aos="zoom-in">
            <Link to="/news2">
              <div className="img_block">
                <img src={img2} alt="img1" />
              </div>
              <div className="content">
                <h5>
                  Bizning yana bir loyihalarimizdan bo'lgan ALL4U.Market ishga
                  tushirildi.
                </h5>
                <p>
                  ALL4U.MARKET raqamli brending va veb-ishlab chiqarishda
                  tajribaga ega bo'lgan B2B (biznesdan biznesga) va B2C
                  (biznesdan mijozga) keng qamrovli onlayn bozordir. Ayni paytda
                  platforma butun dunyo bo'ylab ishlab chiqaruvchilar, etkazib
                  beruvchilar va kompaniyalarning ma'lumotlar bazasini jadal
                  kengaytirmoqda
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

export default HomeNews;
