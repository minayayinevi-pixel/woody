import React from 'react';

const CertificationSection = () => {
  return (
    <section className="w-full" style={{ paddingTop: '40px', paddingBottom: '40px', backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Title - NO LINE ABOVE */}
          <h2 
            className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] leading-tight max-w-[900px]"
            style={{ marginBottom: '20px' }}
          >
            Dünya genelinde geçerliliğe sahip Cambridge English sertifika programı
          </h2>

          {/* Description */}
          <p 
            className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed max-w-[700px]"
            style={{ marginBottom: '10px' }}
          >
            Öğrenciler, uluslararası standartlara uygun bir sistemle İngilizce öğrenir.
          </p>
          <p 
            className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed max-w-[700px]"
            style={{ marginBottom: '40px' }}
          >
            Süreç; öğretmen, okul ve öğrenci için baştan sona planlanmış ve yapılandırılmıştır.
          </p>

          {/* Small Text Above Logos */}
          <p 
            className="text-[12px] md:text-[13px] text-gray-500 uppercase" 
            style={{ letterSpacing: '0.2em', marginBottom: '30px' }}
          >
            Akademik İş Birliklerimiz
          </p>

          {/* LOGOS - BÜYÜK (60px) - ZORUNLU */}
          <div className="flex items-center justify-center flex-wrap" style={{ gap: '40px' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/0ljulhkj_8.png"
              alt="Cambridge English"
              className="w-auto transition-opacity duration-300"
              style={{ height: '60px', opacity: 0.9 }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/1lah28n2_7.png"
              alt="British Side"
              className="w-auto transition-opacity duration-300"
              style={{ height: '60px', opacity: 0.9 }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/22mg24ku_9.png"
              alt="Woody Academy"
              className="w-auto transition-opacity duration-300"
              style={{ height: '60px', opacity: 0.9 }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
