import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const WoodyAcademyPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />

      {/* Hero Section - Full Width Image */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden mt-[72px]">
        <div className="absolute inset-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/qyl8gvvu_Little%20girl%20at%20home%20holding%20a%20certificate%20mock-up.png" 
            alt="Woody Academy Graduate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
          <h1 
            className="text-[50px] md:text-[70px] lg:text-[90px] font-black tracking-[0.1em] text-center leading-none mb-4"
            style={{ 
              fontFamily: "'Magic English', 'Fredoka', cursive", 
              textShadow: '0 4px 30px rgba(0,0,0,0.6)' 
            }}
          >
            WOODY ACADEMY
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/95 tracking-wide max-w-[700px] text-center leading-relaxed">
            Mezuniyet Sonrası Devam Programı
          </p>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60L0 40C360 10 720 10 1080 40C1260 52 1350 57 1440 60L1440 60L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 text-[13px] tracking-wide font-medium"
        >
          <ChevronLeft size={18} />
          <span>{t.preschoolPage?.back || 'GERİ'}</span>
        </button>
      </div>

      {/* Section 1: Image Left | Text Right (Desktop) */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-16 lg:gap-20">
            
            {/* Image Block - 50% */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm tracking-wide">IMAGE PLACEHOLDER 1</span>
              </div>
            </div>

            {/* Text Block - 50% */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] mb-6 leading-tight">
                Section Title Here
              </h2>
              <div className="space-y-5">
                <p className="text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-relaxed">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#FFB800] mr-3 mt-1 flex-shrink-0">•</span>
                    <span>First key point placeholder</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#FFB800] mr-3 mt-1 flex-shrink-0">•</span>
                    <span>Second key point placeholder</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#FFB800] mr-3 mt-1 flex-shrink-0">•</span>
                    <span>Third key point placeholder</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Text Left | Image Right (Desktop) */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-12 md:gap-16 lg:gap-20">
            
            {/* Image Block - 50% */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm tracking-wide">IMAGE PLACEHOLDER 2</span>
              </div>
            </div>

            {/* Text Block - 50% */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] mb-6 leading-tight">
                Another Section Title
              </h2>
              <div className="space-y-5">
                <p className="text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-relaxed">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#2ECC71] mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Benefit one placeholder</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#2ECC71] mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Benefit two placeholder</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#2ECC71] mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Benefit three placeholder</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default WoodyAcademyPage;
