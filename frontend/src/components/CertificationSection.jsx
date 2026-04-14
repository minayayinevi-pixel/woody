import React from 'react';

const CertificationSection = () => {
  return (
    <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Title */}
          <h2 
            className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] leading-tight mb-5 max-w-[900px]"
          >
            Dünya genelinde geçerliliğe sahip Cambridge English sertifika programı
          </h2>

          {/* Description */}
          <p 
            className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed mb-3 max-w-[700px]"
          >
            Öğrenciler, uluslararası standartlara uygun bir sistemle İngilizce öğrenir.
          </p>
          <p 
            className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed mb-12 max-w-[700px]"
          >
            Süreç; öğretmen, okul ve öğrenci için baştan sona planlanmış ve yapılandırılmıştır.
          </p>

          {/* Small Text Above Logos */}
          <p className="text-[12px] md:text-[13px] text-gray-500 mb-8 uppercase" style={{ letterSpacing: '0.15em' }}>
            Akademik İş Birliklerimiz
          </p>

          {/* Logos - Premium Size, Better Alignment */}
          <div className="flex items-center justify-center gap-12 md:gap-14 lg:gap-16 flex-wrap">
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/0ljulhkj_8.png"
              alt="Cambridge English"
              className="h-[48px] md:h-[52px] lg:h-[56px] w-auto opacity-85 hover:opacity-100 transition-opacity duration-300"
              style={{ objectFit: 'contain' }}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/1lah28n2_7.png"
              alt="British Side"
              className="h-[48px] md:h-[52px] lg:h-[56px] w-auto opacity-85 hover:opacity-100 transition-opacity duration-300"
              style={{ objectFit: 'contain' }}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/22mg24ku_9.png"
              alt="Woody Academy"
              className="h-[48px] md:h-[52px] lg:h-[56px] w-auto opacity-85 hover:opacity-100 transition-opacity duration-300"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
