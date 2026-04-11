import React from 'react';

const ContentSection = ({ section, isFirst }) => {
  const isImageLeft = section.imagePosition === 'left';

  return (
    <section
      id={section.id}
      className="w-full py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: section.bgColor || '#ffffff' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section Heading - only on first section */}
        {section.sectionHeading && (
          <div className="mb-14 text-center">
            <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-gray-900 leading-snug">
              {section.sectionHeading}
            </h2>
            <div className="w-24 h-[3px] mx-auto mt-4" style={{ backgroundColor: '#F5C518' }} />
          </div>
        )}

        <div
          className={`flex flex-col ${
            isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center gap-10 lg:gap-16`}
        >
          {/* Image with colored accent border */}
          <div className="w-full lg:w-1/2">
            <div
              className="overflow-hidden rounded-[20px] shadow-xl relative"
              style={{
                borderLeft: isImageLeft ? `6px solid ${section.accentColor}` : 'none',
                borderRight: !isImageLeft ? `6px solid ${section.accentColor}` : 'none',
              }}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
                style={{
                  maxHeight: '500px',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            {/* Accent colored tag */}
            <div
              className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold text-white mb-5"
              style={{ backgroundColor: section.accentColor }}
            >
              {section.id === 'preschool-series' && 'Sınıflar İçin'}
              {section.id === 'workshop' && 'Küçük Gruplar İçin'}
              {section.id === 'home-tutor' && 'Bireysel Kullanım'}
            </div>

            {/* Title */}
            <h3 className="text-[30px] md:text-[36px] lg:text-[40px] font-light text-black leading-tight mb-5">
              {section.title}
            </h3>

            {/* Colored underline */}
            <div
              className="w-16 h-[3px] mb-6"
              style={{ backgroundColor: section.accentColor }}
            />

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.8] mb-6">
              {section.description}
            </p>

            {/* Button */}
            {section.buttonText && (
              <a
                href={section.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 text-[12px] tracking-[0.15em] font-medium text-black bg-gray-100 hover:bg-gray-200 transition-all duration-300 no-underline group"
              >
                {section.buttonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
