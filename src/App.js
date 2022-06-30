import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Career from "./components/About/Career";
import Scroll from "./components/Scroll";
import BackToTop from "./components/BacktoTop/BackToTop";
import MarketPlace from "./pages/MarketPlace";
import ProducePage from "./pages/ProducePage";
import ExportPage from "./pages/ExportPage";
import AboutTeam from "./pages/AboutTeam";
import NewsPage from "./pages/NewsPage";
import SinglePage from "./pages/SinglePage";
import SinglePage2 from "./pages/SinglePage2";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ContactPage from "./pages/ContactPage";
import Loader from "./components/Loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Mobile/Navbar";
import ConsultingPage from "./pages/ConsultingPage";
import "aos/dist/aos.css";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <div className="App">
      <Router>
        <Scroll />
        <Navbar />
        {loading === true ? <Loader /> : <Routes />}
        <BackToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/produce" element={<ProducePage />} />
          <Route path="/export" element={<ExportPage />} />
          <Route path="/team" element={<AboutTeam />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news1" element={<SinglePage />} />
          <Route path="/news2" element={<SinglePage2 />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/consalting" element={<ConsultingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
