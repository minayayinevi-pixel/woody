import React from 'react';

const CertificationSection = () => {
  return (
    <section className="w-full py-[80px]" style={{ backgroundColor: '#0B1B2B' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        {/* Headline */}
        <h2 
          className="text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-5"
          style={{ color: '#FFFFFF', lineHeight: '1.2' }}
        >
          Cambridge English Preparation System
        </h2>

        {/* Divider - Very Thin */}
        <div 
          className="w-[50px] h-[0.5px] mx-auto mb-6"
          style={{ backgroundColor: '#FFFFFF', opacity: 0.5 }}
        />

        {/* Paragraph */}
        <p 
          className="text-[14px] md:text-[15px] leading-[1.7] mb-12 max-w-[800px] mx-auto"
          style={{ color: '#D1D5DB' }}
        >
          In partnership with British Side, providing internationally recognized certification.
        </p>

        {/* Logos - Transparent PNG, No Background */}
        <div className="flex items-center justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/uiwcwk8t_U%CC%88c%CC%A7%20eg%CC%86itim%20kurumu%20logosu.png"
            alt="Education Partners"
            className="max-w-full h-auto"
            style={{ 
              backgroundColor: 'transparent',
              maxHeight: '70px',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
