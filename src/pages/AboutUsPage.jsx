import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutMain from "../components/About/AboutMain";
import Founder from "../components/About/Founder";
import Advanteges from "../components/About/Advanteges";
function AboutUsPage() {
  return (
    <div>
      <Header />
      <AboutMain />
      <Founder />
      <Advanteges />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
