import React from 'react';

const CertificationSection = () => {
  return (
    <section className="w-full py-[80px]" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        {/* Headline - Centered */}
        <h2 
          className="text-[28px] md:text-[36px] lg:text-[40px] font-normal mb-5 text-center"
          style={{ color: '#0B1B2B', lineHeight: '1.3', fontWeight: 400 }}
        >
          Cambridge English Preparation System
        </h2>

        {/* Paragraph - Centered */}
        <p 
          className="text-[14px] md:text-[15px] leading-[1.7] mb-10 max-w-[750px] mx-auto text-center"
          style={{ color: '#0B1B2B', fontWeight: 300 }}
        >
          In partnership with British Side, providing internationally recognized certification.
        </p>

        {/* Logos - Bigger, Same Height, Horizontal Row */}
        <div className="flex items-center justify-center gap-10 md:gap-16">
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/0ljulhkj_8.png"
            alt="Cambridge English"
            className="h-[60px] md:h-[70px] w-auto"
            style={{ objectFit: 'contain' }}
          />
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/1lah28n2_7.png"
            alt="British Side"
            className="h-[60px] md:h-[70px] w-auto"
            style={{ objectFit: 'contain' }}
          />
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/22mg24ku_9.png"
            alt="Woody Academy"
            className="h-[60px] md:h-[70px] w-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
