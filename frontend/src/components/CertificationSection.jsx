import React from 'react';

const CertificationSection = () => {
  return (
    <section className="w-full" style={{ paddingTop: '5px', paddingBottom: '5px', backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Title - BÜYÜK VE PREMIUM */}
          <h2 
            className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-[#0B1F3A] max-w-[800px]"
            style={{ marginBottom: '6px', lineHeight: '1.2', letterSpacing: '-0.02em' }}
          >
            Dünya genelinde geçerliliğe sahip Cambridge English sertifika programı
          </h2>

          {/* Description - KÜÇÜK, SATIR ARALIĞI MİNİMUM */}
          <p 
            className="text-[12px] md:text-[13px] text-gray-600 max-w-[600px]"
            style={{ marginBottom: '3px', lineHeight: '1.3' }}
          >
            Öğrenciler, uluslararası standartlara uygun bir sistemle İngilizce öğrenir.
          </p>
          <p 
            className="text-[12px] md:text-[13px] text-gray-600 max-w-[600px]"
            style={{ marginBottom: '6px', lineHeight: '1.3' }}
          >
            Süreç; öğretmen, okul ve öğrenci için baştan sona planlanmış ve yapılandırılmıştır.
          </p>

          {/* Small Text - HEMEN LOGO ÜSTÜNDE */}
          <p 
            className="text-[10px] md:text-[11px] text-gray-500 uppercase" 
            style={{ letterSpacing: '0.15em', marginBottom: '4px', fontWeight: 500 }}
          >
            Akademik İş Birliklerimiz
          </p>

          {/* LOGOS - 240px - MOBİLDE YAN YANA (nowrap) */}
          <div className="flex items-center justify-center flex-nowrap" style={{ gap: '20px' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/0ljulhkj_8.png"
              alt="Cambridge English"
              className="w-auto h-[120px] md:h-[180px] lg:h-[240px] transition-opacity duration-300"
              style={{ opacity: 0.9 }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/1lah28n2_7.png"
              alt="British Side"
              className="w-auto h-[120px] md:h-[180px] lg:h-[240px] transition-opacity duration-300"
              style={{ opacity: 0.9 }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/22mg24ku_9.png"
              alt="Woody Academy"
              className="w-auto h-[120px] md:h-[180px] lg:h-[240px] transition-opacity duration-300"
              style={{ opacity: 0.9 }}
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
