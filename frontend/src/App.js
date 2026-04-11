import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import PreschoolPage from "./components/PreschoolPage";
import { siteData } from "./data/mock";

const HomePage = () => {
  return (
    <>
      <Header data={siteData.header} />
      <HeroSection data={siteData.hero} />
      {siteData.sections.map((section, index) => (
        <ContentSection key={section.id} section={section} isFirst={index === 0} />
      ))}
      <Footer data={siteData.footer} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preschool" element={<PreschoolPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
