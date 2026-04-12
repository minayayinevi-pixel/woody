import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CertificationSection from "./components/CertificationSection";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import PreschoolPage from "./components/PreschoolPage";
import WorkshopPage from "./components/WorkshopPage";
import HomeTutorPage from "./components/HomeTutorPage";
import BlogPage from "./components/BlogPage";
import LevelFinderPage from "./components/LevelFinderPage";
import LibraryPage from "./components/LibraryPage";
import FloatingContact from "./components/FloatingContact";
import { siteData } from "./data/mock";

const HomePage = () => {
  return (
    <>
      <Header data={siteData.header} />
      <HeroSection data={siteData.hero} />
      <CertificationSection />
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
      <LanguageProvider>
        <BrowserRouter>
          <FloatingContact />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preschool" element={<PreschoolPage />} />
            <Route path="/workshop" element={<WorkshopPage />} />
            <Route path="/home-tutor" element={<HomeTutorPage />} />
            <Route path="/level-finder" element={<LevelFinderPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
