import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ContentSection = ({ section, isFirst }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const isImageLeft = section.imagePosition === 'left';

  const sectionMap = {
    'preschool-series': 'preschool',
    'workshop': 'workshop',
    'home-tutor': 'homeTutor'
  };
  const key = sectionMap[section.id];
  const sectionT = key ? t.sections[key] : null;

  const handleSectionClick = () => {
    if (section.id === 'preschool-series') navigate('/preschool');
    if (section.id === 'workshop') navigate('/workshop');
    if (section.id === 'home-tutor') navigate('/home-tutor');
  };

  return (
    <section
      id={section.id}
      className="w-full py-4 md:py-6 lg:py-8"
      style={{ backgroundColor: section.bgColor || '#ffffff' }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
        {isFirst && (
          <>
            {/* Intro Section - Title + Description */}
            <div className="text-center mb-12" style={{ paddingTop: '80px' }}>
              {/* Main Title */}
              <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] leading-tight mb-5">
                Hangi Woody Set Sizin İçin Uygun?
              </h1>
              
              {/* Optional Yellow Underline */}
              <div className="w-[80px] h-[3px] bg-[#FFB800] mx-auto mb-5"></div>
              
              {/* Description */}
              <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed max-w-[700px] mx-auto" style={{ marginBottom: '60px' }}>
                Kurumunuza veya kullanım alanınıza en uygun Woody setini seçin. Her set, farklı ihtiyaçlara göre özel olarak yapılandırılmıştır.
              </p>
            </div>
          </>
        )}

        {/* Entire section with side ribbon behind/beside image - fully clickable with hover effect */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleSectionClick();
          }}
          className={`relative flex flex-col ${
            isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center gap-10 lg:gap-16 cursor-pointer no-underline group`}
          style={{ textDecoration: 'none' }}
        >
          {/* Image with ribbon BEHIND it (in background, not in front) */}
          <div className={`w-full lg:w-1/2 relative ${isImageLeft ? 'pl-8 lg:pl-0' : 'pr-8 lg:pr-0'}`}>
            {/* Side Ribbon - MOBİLDE DE GÖRÜNÜR */}
            <div 
              className={`absolute ${isImageLeft ? 'left-0 lg:-left-8' : 'right-0 lg:-right-8'} top-1/2 -translate-y-1/2 flex z-0`}
            >
              <div 
                className="flex flex-col items-center justify-center px-3 md:px-4 py-10 md:py-12 font-bold text-white rounded-lg shadow-2xl"
                style={{ 
                  backgroundColor: section.accentColor,
                  writingMode: 'vertical-rl',
                  transform: isImageLeft ? 'rotate(180deg)' : 'none',
                  minHeight: '280px',
                  minWidth: '45px'
                }}
              >
                <span className="text-[10px] md:text-[12px] tracking-[0.3em] mb-2 md:mb-3">TIKLAYΙN</span>
                <div className="w-6 md:w-8 h-[2px] bg-white/60 my-2"></div>
                <span className="text-[12px] md:text-[15px] tracking-[0.2em] font-black mt-2 md:mt-3 whitespace-nowrap">
                  {section.id === 'preschool-series' && 'OKUL SERİSİ'}
                  {section.id === 'workshop' && 'ATÖLYE SERİSİ'}
                  {section.id === 'home-tutor' && 'EV ÖZEL DERS SERİSİ'}
                </span>
              </div>
            </div>

            {/* Image - positioned in FRONT of ribbon */}
            <img
              src={section.image}
              alt={sectionT?.title || section.title}
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105 relative z-10 rounded-xl shadow-lg"
              style={{
                display: 'block',
                maxWidth: '100%',
                height: 'auto'
              }}
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold text-white mb-5 transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: section.accentColor }}
            >
              {sectionT?.tag}
            </div>
            <h3 className="text-[30px] md:text-[36px] lg:text-[40px] font-light text-black leading-tight mb-5 transition-colors duration-300 group-hover:text-gray-700">
              {sectionT?.title || section.title}
            </h3>
            <div 
              className="w-16 h-[3px] mb-6 transition-all duration-300 group-hover:w-24" 
              style={{ backgroundColor: section.accentColor }} 
            />
            <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.8] mb-6 transition-colors duration-300 group-hover:text-gray-800">
              {sectionT?.desc || section.description}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContentSection;
