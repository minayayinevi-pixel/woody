import React from 'react';

const WhyWoodySection = () => {
  const features = [
    {
      title: "Cambridge Tabanlı Sertifikalı Sistem",
      description: "Öğrenciler uluslararası geçerliliğe sahip sertifikalara ulaşır."
    },
    {
      title: "Oyun Temelli Eğitim",
      description: "Çocuklar dili ezberlemez; oyun, hareket ve etkileşimle doğal şekilde öğrenir."
    },
    {
      title: "İngilizce Konuşan Karakterler",
      description: "Her ünitede çocuklar karakterlerle etkileşime girer, dili gerçek bağlam içinde edinir."
    },
    {
      title: "Hikâye, Film ve Müzik",
      description: "Her ünite kendi senaryosu, filmi ve müziğiyle ilerler."
    },
    {
      title: "Yıl Boyu Hazır Ders Planı",
      description: "Tüm ders saatleri planlı ve hazırdır. Öğretmen ekstra hazırlık yapmaz."
    },
    {
      title: "Tek Platform, Tüm İçerik",
      description: "Tüm materyaller ve dijital içerikler tek sistemde sunulur."
    },
    {
      title: "30+ Eğitim Oyuncağı",
      description: "Yaşa ve beceriye uygun materyallerle öğrenme desteklenir."
    }
  ];

  return (
    <section className="w-full py-4 md:py-12 lg:py-16 bg-white">
      <div 
        className="relative w-full h-[950px] md:h-[750px] lg:h-[850px] overflow-hidden"
        style={{
          backgroundImage: 'url(https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/x4uz9f3o_freepik_prompt-reference-lock-ver_2769629842.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* White box ALWAYS at bottom - same on mobile and desktop - VERY SMALL */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
            <div 
              className="bg-white/95 backdrop-blur-sm rounded-t-3xl px-4 py-3 md:px-8 md:py-4"
              style={{ boxShadow: 'none', border: 'none' }}
            >
              {/* Title */}
              <h2 className="text-[16px] md:text-[24px] font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
                Neden Woody?
              </h2>

              {/* Feature List - Very compact, can be in columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                {features.map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-[10px] md:text-[12px] font-semibold text-gray-900 mb-0 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-[8px] md:text-[10px] text-gray-600 leading-snug">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWoodySection;
