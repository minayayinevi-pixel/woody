import React from 'react';

const WhyWoodyImageSection = () => {
  const features = [
    {
      title: "Cambridge Sertifika Programı",
      desc: "Öğrenciler, 160'tan fazla ülkede geçerli Cambridge English sertifikası alır"
    },
    {
      title: "%100 Oyun Temelli Öğrenme",
      desc: "Her hafta 8 aktif oyun"
    },
    {
      title: "40+ Oyuncakla Aktif Öğrenme Deneyimi",
      desc: "Çocuk izleyen değil, oynayan ve öğrenen olur"
    },
    {
      title: "İngilizce Konuşan Karakterler",
      desc: "Gerçek bağlamda dil maruziyeti"
    },
    {
      title: "Hikâye + Film + Müzik Entegrasyonu",
      desc: "Storyland + Movieland + Musicland"
    },
    {
      title: "Aylık ve Haftalık Detaylı Ders Planı",
      desc: "Saat saat, adım adım öğretmen yönlendirmesi"
    },
    {
      title: "%0 Hazırlık Gereksinimi",
      desc: "Öğretmen açar ve direkt uygular"
    },
    {
      title: "Her Hafta: 8 Oyun + Worksheet + Craft + Sticker",
      desc: "Tam yapılandırılmış öğrenme akışı"
    },
    {
      title: "Checkpoint Değerlendirme Sistemi",
      desc: "Ünite sonu ölçme ve takip"
    },
    {
      title: "Hikâye Anlama & Kavrama Kitabı",
      desc: "Dil + bilişsel gelişim birlikte"
    },
    {
      title: "Dönem Sonu Portfolyo Sistemi",
      desc: "Velilere somut çıktı"
    },
    {
      title: "Tek Platform – Tüm İçerik",
      desc: "Fiziksel + dijital entegre sistem"
    }
  ];

  return (
    <section className="w-full bg-white py-8 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Desktop: 2-column (image left, text right) */}
        {/* Mobile: stacked (image top, text bottom) */}
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          {/* LEFT: Image */}
          <div className="w-full md:w-1/2">
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/qor2i6j7_freepik_do-t-same.-never-change_2769765773.png"
              alt="Woody Characters"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* RIGHT: Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 mb-8 leading-tight">
              Neden Woody?
            </h2>
            
            {/* Features List */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-[15px] md:text-[16px] font-bold text-gray-900 mb-1 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                    {feature.desc}
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

export default WhyWoodyImageSection;
