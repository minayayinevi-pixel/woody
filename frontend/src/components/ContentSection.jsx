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

        {/* Entire section wrapped in anchor tag - fully clickable */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleSectionClick();
          }}
          className={`flex flex-col ${
            isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center gap-10 lg:gap-16 cursor-pointer no-underline`}
          style={{ textDecoration: 'none' }}
        >
          {/* Image - no border, no shadow, no frame */}
          <div className="w-full lg:w-1/2">
            <img
              src={section.image}
              alt={sectionT?.title || section.title}
              className="w-full h-auto"
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
              className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold text-white mb-5"
              style={{ backgroundColor: section.accentColor }}
            >
              {sectionT?.tag}
            </div>
            <h3 className="text-[30px] md:text-[36px] lg:text-[40px] font-light text-black leading-tight mb-5">
              {sectionT?.title || section.title}
            </h3>
            <div className="w-16 h-[3px] mb-6" style={{ backgroundColor: section.accentColor }} />
            <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.8] mb-6">
              {sectionT?.desc || section.description}
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContentSection;
