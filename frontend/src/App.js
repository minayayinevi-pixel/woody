import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from "./context/LanguageContext";
import SEO from "./components/SEO";
import { generateOrganizationSchema, generateWebSiteSchema, generateBreadcrumbSchema } from "./utils/schemaGenerator";
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
import BlogDetailPage from "./components/BlogDetailPage";
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
  // Homepage schemas: Organization + WebSite
  const schemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateBreadcrumbSchema([
      { name: 'Ana Sayfa', url: '/' }
    ])
  ];

  return (
    <>
      <SEO 
        title="Anaokulu İngilizce Eğitim Seti | Oyun Temelli Okul Öncesi İngilizce"
        description="Woody ve Arkadaşları anaokulu İngilizce eğitim sistemi. 3-6 yaş İngilizce programı, preschool English program Turkey, Cambridge hazırlık sistemi ile okul öncesi İngilizce eğitimi. İngilizce eğitim serisi anaokulu için etkili eğitim modeli."
        canonical="/"
        keywords="anaokulu İngilizce eğitim sistemi, oyun temelli okul öncesi İngilizce, anaokulu İngilizce eğitim seti, preschool English program Turkey, okul öncesi İngilizce eğitimi, Cambridge hazırlık sistemi, çocuklar için İngilizce eğitimi, 3-6 yaş İngilizce programı"
        schema={schemas}
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
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
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
