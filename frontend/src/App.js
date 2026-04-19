import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./context/LanguageContext";
import SEO from "./components/SEO";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CertificationSection from "./components/CertificationSection";
import WhyWoodyImageSection from "./components/WhyWoodyImageSection";
import ContentSection from "./components/ContentSection";
import WoodyUpdates from "./components/WoodyUpdates";
import Footer from "./components/Footer";
import PreschoolPage from "./components/PreschoolPage";
import WorkshopPage from "./components/WorkshopPage";
import HomeTutorPage from "./components/HomeTutorPage";
import BlogPage from "./components/BlogPage";
import LevelFinderPage from "./components/LevelFinderPage";
import LibraryPage from "./components/LibraryPage";
import WoodyStorePage from "./components/WoodyStorePage";
import WoodyAcademyPage from "./components/WoodyAcademyPage";
import DigitalContentPage from "./components/DigitalContentPage";
import DigitalContentDetailPage from "./components/DigitalContentDetailPage";
import FloatingContact from "./components/FloatingContact";
import StickyStoreButton from "./components/StickyStoreButton";
import { siteData } from "./data/mock";

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Anaokulu İngilizce Eğitim seti | Oyun Temelli Okul Öncesi İngilizce seti"
        description="Woody ve Arkadaşları, anaokulu ve okul öncesi dönem için oyun temelli İngilizce eğitim sistemi, öğretmen setleri, öğrenci setleri, şarkılar ve aktiviteler sunar."
        canonical="/"
        keywords="okul öncesi ingilizce, anaokulu ingilizce, çocuklar için ingilizce, woody preschool, oyun temelli eğitim"
      />
      <Header data={siteData.header} />
      <HeroSection data={siteData.hero} />
      <CertificationSection />
      <WhyWoodyImageSection />
      {siteData.sections.map((section, index) => (
        <ContentSection key={section.id} section={section} isFirst={index === 0} />
      ))}
      <WoodyUpdates />
      <Footer data={siteData.footer} />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <LanguageProvider>
          <BrowserRouter>
            <FloatingContact />
            <StickyStoreButton />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/preschool" element={<PreschoolPage />} />
              <Route path="/workshop" element={<WorkshopPage />} />
              <Route path="/home-tutor" element={<HomeTutorPage />} />
              <Route path="/woody-academy" element={<WoodyAcademyPage />} />
              <Route path="/level-finder" element={<LevelFinderPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/store" element={<WoodyStorePage />} />
              <Route path="/digital-content" element={<DigitalContentPage />} />
              <Route path="/digital-content/:levelId/:sectionId" element={<DigitalContentDetailPage />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
