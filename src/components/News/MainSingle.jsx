import React from "react";
import img from "../../assets/Home/sign.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./MainSingle.scss";
import { Link } from "react-router-dom";
function MainSingle() {
  return (
    <div className="MainSingle">
      <div className="top">
        <Link to="/news">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="icon"
          ></FontAwesomeIcon>
        </Link>
        <h6>Kompaniya yangiliklari</h6>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <h2>
              O‘zbekiston Respublikasi Investitsiyalar va tashqi savdo vazirligi
              huzuridagi Eksportni rag‘batlantirish agentligi tomonidan eksport
              qiluvchi tashkilotlarga moliyaviy yordam ko‘rsatish tartibi
              to‘g‘risidagi NIZOM
            </h2>
            <img src={img} alt="img" />
            <p>
              1. Mazkur Nizom O‘zbekiston Respublikasi Investitsiyalar va tashqi
              savdo vazirligi huzuridagi Eksportni rag‘batlantirish agentligi
              (keyingi o‘rinlarda — Agentlik) tomonidan eksport qiluvchi
              tashkilotlarga eksport faoliyatini qo‘llab-quvvatlash maqsadida
              moliyaviy yordam ko‘rsatish tartibini belgilaydi. 2. Ushbu Nizomda
              quyidagi asosiy tushunchalardan foydalaniladi: biznes-trening —
              ma’lum bir yo‘nalishda tadbirkorlar, ularning xodimlarining
              (ishchilarining) bilim va ko‘nikmalarini hamda faoliyati
              samaradorligini oshirishga qaratilgan o‘qitish shakli, shu
              jumladan, onlayn o‘qitish shakli; biznes-forum — biznes
              vakillarining ma’lum bir yo‘nalish, soha va tarmoqdagi biznes
              masalalarini muhokama qilishga bag‘ishlangan yig‘ilishi, shu
              jumladan, onlayn yig‘ilishi; ko‘rgazma-yarmarka tadbirlari —
              xorijda va O‘zbekiston Respublikasida tashkil etiladigan xalqaro,
              mintaqalararo, hududlararo ko‘rgazmalar, konfrensiyalar,
              festivallar, yarmarkalar va tadbirkorlik subyektlarining eksport
              imkoniyatlarini rivojlantirishga qaratilgan boshqa tadbirlar, shu
              jumladan, onlayn tadbirlar; biznes-seminarlar — tadbirkorlik
              faoliyatiga oid tajriba, bilim va ma’lumotlar bilan almashish
              maqsadida o‘tkaziladigan interfaol o‘quv-amaliy tadbir shakli, shu
              jumladan, onlayn interfaol o‘quv-amaliy tadbir shakli; eksport
              qiluvchi tashkilotlar — O‘zbekiston Respublikasida ro‘yxatdan
              o‘tgan va eksport faoliyatini amalga oshirayotgan yoki uni
              boshlash istagidagi tadbirkorlik subyektlari; reklama kampaniyasi
              (taqdimot) — ma’lum bir davrga va bozorga mo‘ljallangan, eksport
              hajmini oshirish bo‘yicha marketing maqsadlariga erishishga,
              xususan, mahsulotlar (xizmatlar) bilan tanishtirish, ularni taklif
              etish va xaridorlarni jalb qilishga qaratilgan keng qamrovli
              tadbirlarni amalga oshirish; standartlar — standartlash bo‘yicha
              tashkilotlar tomonidan ishlab chiqilgan xalqaro (davlatlararo,
              mintaqaviy) standartlar hamda xorijiy davlatlarning milliy
              standartlari; muvofiqlik sertifikati — sertifikatlangan
              mahsulotning belgilangan talablarga muvofiqligini tasdiqlash uchun
              sertifikatlashtirish tizimi qoidalariga binoan berilgan hujjat;
              savdo missiyalari — eksport qiluvchi tashkilotlar bilan
              salohiyatli xorijiy xaridorlar o‘rtasida sheriklik aloqalarini
              o‘rnatish, shuningdek, mahsulot taqdimotlarini o‘tkazib,
              salohiyatli xorijiy xaridorlar bilan kelgusida tuziladigan eksport
              shartnomalarining shartlarini muhokama qilish va shartnomalar
              tuzish maqsadida tashkil etiladigan tadbirlar. 3. Agentlik
              tomonidan eksport qiluvchi tashkilotlarga moliyaviy yordam
              ko‘rsatishning asosiy yo‘nalishlari quyidagilardan iborat:
              standartlarni joriy qilish va muvofiqlik sertifikatlarini olish;
              mahalliy mahsulotlar va brendlarni (tovar belgilarini) tashqi
              bozorlarga olib chiqish maqsadida taqdimotlar va reklama
              kampaniyalarini o‘tkazish; xalqaro tender va tanlovlarda ishtirok
              etish; xorijiy vakolatli organlarda milliy mahsulotlar va
              brendlarni (tovar belgilarini) ro‘yxatdan o‘tkazish; O‘zbekiston
              Respublikasi hududlarida tadbirkorlar uchun eksport salohiyatini
              oshirish maqsadida mahalliy va xorijiy kompaniyalarni,
              mutaxassislarni jalb qilgan holda biznes-seminarlar, treninglar,
              savdo missiyalari va biznes-forumlar tashkil etish; xorijiy
              mamlakatlardagi biznes-seminarlar, treninglar, savdo missiyalari
              va biznes-forumlarda ishtirok etish; ko‘rgazma-yarmarka
              tadbirlarida ishtirok etish; mahsulotlar namunalarini tanishtirish
              maqsadida xorijiy xaridorlarga, eksport qiluvchi tashkilotlarning
              tashqi savdo uylari va shou-rumlariga, shu jumladan, xaridor
              topishda ko‘mak olish uchun O‘zbekiston Respublikasining chet
              eldagi diplomatik vakolatxonalariga yuborish;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSingle;
