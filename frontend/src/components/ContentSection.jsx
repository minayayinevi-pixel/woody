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
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {isFirst && (
          <div className="mb-6 text-center">
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] text-black leading-snug font-semibold" style={{ fontFamily: "'Fredoka', 'Inter', sans-serif" }}>
              {t.sections.heading}
            </h2>
            <div className="w-20 h-[3px] mx-auto mt-4" style={{ backgroundColor: '#F5C518' }} />
          </div>
        )}

        {/* Entire section with side tab/ribbon - fully clickable with hover effect */}
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
          {/* Side Ribbon/Tab with "TIKLAYΙN" text - like in the image */}
          <div 
            className={`absolute ${isImageLeft ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 hidden lg:block z-10`}
            style={{ 
              writingMode: 'vertical-rl',
              transform: isImageLeft ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)',
              transformOrigin: 'center'
            }}
          >
            <div 
              className="px-4 py-8 font-bold text-white text-[20px] tracking-[0.2em] rounded-t-lg flex flex-col items-center gap-3"
              style={{ 
                backgroundColor: section.accentColor,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            >
              <span className="text-[14px] tracking-widest">TIKLAYΙN</span>
              <div className="w-8 h-[2px] bg-white/50"></div>
              <span className="text-[16px]">
                {section.id === 'preschool-series' && 'OKUL SERİSİ'}
                {section.id === 'workshop' && 'ATÖLYE SERİSİ'}
                {section.id === 'home-tutor' && 'EV & ÖZEL DERS'}
              </span>
            </div>
          </div>

          {/* Image - much smaller, with hover effect */}
          <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl">
            <img
              src={section.image}
              alt={sectionT?.title || section.title}
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
              style={{
                display: 'block',
                maxWidth: '100%',
                height: 'auto',
                margin: '0 auto'
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
            {/* Click CTA */}
            <div className="inline-flex items-center gap-2 text-[14px] font-semibold transition-transform duration-300 group-hover:translate-x-2" style={{ color: section.accentColor }}>
              <span>Detaylar için tıklayın</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContentSection;
