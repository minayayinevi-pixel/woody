import React from 'react';

const CertificationSection = () => {
  return (
    <section className="w-full" style={{ paddingTop: '24px', paddingBottom: '0px', backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* BAŞLIK */}
          <h2 
            className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-[#0B1F3A] max-w-[800px]"
            style={{ marginBottom: '8px', lineHeight: '1.2', letterSpacing: '-0.01em', fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
          >
            Woody ile Cambridge English Sertifika Sistemine Geçiş
          </h2>

          {/* AÇIKLAMA */}
          <p 
            className="text-[12px] md:text-[13px] text-gray-600 max-w-[650px]"
            style={{ marginBottom: '24px', lineHeight: '1.4', fontFamily: "'Inter', sans-serif" }}
          >
            Çocukları erken yaşta uluslararası standartta İngilizce eğitimle buluşturan, yapılandırılmış ve oyun temelli öğrenme modeli.
          </p>

          {/* ŞİMDİKİNİN 3 KATI DAHA AŞAĞI - LOGOLAR */}
          <div className="flex items-center justify-center flex-nowrap" style={{ gap: '20px', marginTop: '60px' }}>
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/0ljulhkj_8.png"
              alt="Cambridge English"
              className="w-auto h-[120px] md:h-[180px] lg:h-[240px] transition-opacity duration-300"
              style={{ opacity: 0.9, backgroundColor: 'transparent', background: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/1lah28n2_7.png"
              alt="British Side"
              className="w-auto h-[120px] md:h-[180px] lg:h-[240px] transition-opacity duration-300"
              style={{ opacity: 0.9, backgroundColor: 'transparent', background: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            />
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/22mg24ku_9.png"
              alt="Woody Academy"
              className="w-auto h-[120px] md:h-[180px] lg:h-[240px] transition-opacity duration-300"
              style={{ opacity: 0.9, backgroundColor: 'transparent', background: 'none' }}
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
