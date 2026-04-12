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
      className="w-full py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: section.bgColor || '#ffffff' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {isFirst && (
          <div className="mb-14 text-center">
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] text-black leading-snug font-bold" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>
              {t.sections.heading}
            </h2>
            <div className="w-24 h-[3px] mx-auto mt-5" style={{ backgroundColor: '#F5C518' }} />
          </div>
        )}

        <div
          className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16 ${section.id === 'preschool-series' ? 'cursor-pointer group/section' : ''}`}
          onClick={section.id === 'preschool-series' ? handleSectionClick : undefined}
        >
          <div className="w-full lg:w-1/2">
            <div
              className={`overflow-hidden rounded-[20px] shadow-xl relative transition-all duration-500 ${section.id === 'preschool-series' ? 'group-hover/section:shadow-2xl group-hover/section:scale-[1.02]' : ''}`}
              style={{
                borderLeft: isImageLeft ? `6px solid ${section.accentColor}` : 'none',
                borderRight: !isImageLeft ? `6px solid ${section.accentColor}` : 'none',
              }}
            >
              <img src={section.image} alt={sectionT?.title || section.title} className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]" style={{ maxHeight: '500px', objectFit: 'cover' }} loading="lazy" />
            </div>
          </div>

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
            {section.id === 'preschool-series' && (
              <button onClick={handleSectionClick} className="inline-flex items-center gap-2 px-6 py-3 text-[13px] tracking-[0.1em] font-semibold text-white rounded-lg transition-all duration-300 hover:gap-3 border-none cursor-pointer" style={{ backgroundColor: section.accentColor }}>
                {sectionT?.btn || 'İncele'}
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
