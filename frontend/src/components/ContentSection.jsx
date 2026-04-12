import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
  };

  return (
    <section
      id={section.id}
      className="w-full py-14 md:py-16 lg:py-20"
      style={{ backgroundColor: section.bgColor || '#ffffff' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {isFirst && (
          <div className="mb-14 text-center">
            <h2 className="text-[28px] md:text-[36px] lg:text-[42px] text-black leading-snug font-semibold" style={{ fontFamily: "'Fredoka', 'Inter', sans-serif" }}>
              {t.sections.heading}
            </h2>
            <div className="w-24 h-[3px] mx-auto mt-5" style={{ backgroundColor: '#F5C518' }} />
          </div>
        )}

        <div
          className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
        >
          {/* Empty white space (no image, no frame) */}
          <div className="w-full lg:w-1/2 bg-white" style={{ height: '450px' }}>
            {/* Beyaz boş alan */}
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold text-white mb-5" style={{ backgroundColor: section.accentColor }}>
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
        </div>
      </div>
    </section>
  );
};

export default ContentSection;