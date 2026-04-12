import React from 'react';

const CertificationSection = () => {
  return (
    <section className="w-full py-[100px]" style={{ backgroundColor: '#0B1B2B' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        {/* Headline */}
        <h2 
          className="text-[32px] md:text-[40px] lg:text-[48px] font-bold mb-6"
          style={{ color: '#FFFFFF', lineHeight: '1.2' }}
        >
          Uluslararası Standartlarda İngilizce Eğitimi
        </h2>

        {/* Divider */}
        <div 
          className="w-[60px] h-[2px] mx-auto mb-8"
          style={{ backgroundColor: '#FFFFFF', opacity: 0.6 }}
        />

        {/* Paragraph */}
        <p 
          className="text-[15px] md:text-[16px] leading-[1.8] mb-16 max-w-[900px] mx-auto"
          style={{ color: '#D1D5DB' }}
        >
          Woody eğitim sistemi, çocukları erken yaşta Cambridge sınavlarına hazırlayan yapılandırılmış bir öğrenme süreci sunar.
          <br /><br />
          Sertifikalandırma süreci British Side iş ortaklığı ile yürütülür ve öğrenciler dünya genelinde geçerliliğe sahip belgelere sahip olur.
        </p>

        {/* Logos */}
        <div className="flex items-center justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h8j33pe4_U%CC%88c%CC%A7%20eg%CC%86itim%20kurumu%20logosu.png"
            alt="Education Institutions Logos"
            className="max-h-[60px] w-auto"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.95 }}
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
