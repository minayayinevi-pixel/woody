import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContentSection = ({ section }) => {
  const isImageLeft = section.imagePosition === 'left';

  return (
    <section
      id={section.id}
      className="w-full py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: section.bgColor || '#ffffff' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div
          className={`flex flex-col ${
            isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } ${section.features ? 'items-start' : 'items-center'} gap-10 lg:gap-16`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-[25px] shadow-lg">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                style={{
                  maxHeight: section.id === 'cutting-edge' ? '700px' : '450px',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            {/* Logo (optional - only for first section) */}
            {section.logo && (
              <>
                <h2 className="renderman-logo-text text-[28px] md:text-[32px] font-black tracking-[0.02em] text-black mb-4">
                  {section.logo}
                </h2>
                <div className="w-full h-[1px] bg-gray-300 mb-8" />
              </>
            )}

            {/* Title */}
            <h3 className="section-title text-[32px] md:text-[40px] lg:text-[44px] font-light text-black leading-tight mb-6">
              {section.title}
            </h3>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-6">
              {section.description}
            </p>

            {/* Features (for Cutting Edge section) */}
            {section.features && (
              <div className="space-y-5 mb-8">
                {section.features.map((feature, idx) => (
                  <div key={idx}>
                    <h4 className="text-[15px] font-bold text-black mb-1.5">
                      {feature.title}
                    </h4>
                    <p className="text-[14px] text-gray-600 leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

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
