import React from 'react';

const CertificationSection = () => {
  return (
    <section className="w-full py-[80px]" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
        {/* Headline - Thinner Font */}
        <h2 
          className="text-[28px] md:text-[34px] lg:text-[38px] font-normal mb-4"
          style={{ color: '#0B1B2B', lineHeight: '1.3', fontWeight: 400 }}
        >
          Cambridge English Preparation System
        </h2>

        {/* Paragraph - Light Font */}
        <p 
          className="text-[14px] md:text-[15px] leading-[1.7] max-w-[750px] mx-auto"
          style={{ color: '#0B1B2B', fontWeight: 300 }}
        >
          In partnership with British Side, providing internationally recognized certification.
        </p>
      </div>
    </section>
  );
};

export default CertificationSection;
