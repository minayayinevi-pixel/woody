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
    <section className="w-full py-16 md:py-20 bg-white">
      <div 
        className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
        style={{
          backgroundImage: 'url(https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/x4uz9f3o_freepik_prompt-reference-lock-ver_2769629842.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Right-aligned translucent white box */}
        <div className="absolute right-8 md:right-16 lg:right-20 top-1/2 transform -translate-y-1/2 max-w-[420px] md:max-w-[480px]">
          <div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl px-8 md:px-10 py-8 md:py-10"
            style={{ boxShadow: 'none', border: 'none' }}
          >
            {/* Title */}
            <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-8 leading-tight">
              Neden Woody?
            </h2>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-gray-900 mb-1.5 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWoodySection;
