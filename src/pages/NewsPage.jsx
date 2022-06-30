import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MainNews from "../components/News/MainNews";
import Newses from "../components/News/Newses";
function NewsPage() {
  return (
    <div>
      <Header />
      <MainNews />
      <Newses />
      <Footer />
    </div>
  );
}

export default NewsPage;
