import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import { siteData } from "./data/mock";

function App() {
  return (
    <div className="App">
      <Header data={siteData.header} />
      <HeroSection data={siteData.hero} />
      {siteData.sections.map((section, index) => (
        <ContentSection key={section.id} section={section} />
      ))}
      <Footer data={siteData.footer} />
    </div>
  );
}

export default App;
