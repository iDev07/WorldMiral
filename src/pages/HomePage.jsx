import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Directions from "../components/Home/Directions";
import HomeMain from "../components/Home/HomeMain";
import HomeNews from "../components/Home/HomeNews";
import Partners from "../components/Home/Partners";
import WhyWe from "../components/Home/WhyWe";
import Navbar from "../components/Mobile/Navbar";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <Navbar />
      <HomeMain />
      <Directions />
      <WhyWe />
      <HomeNews />
      <Partners />
      <Footer />
    </div>
  );
}

export default HomePage;
