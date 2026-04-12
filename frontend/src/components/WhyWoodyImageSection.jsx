import React from 'react';

const WhyWoodyImageSection = () => {
  const features = [
    "Cambridge Tabanlı Sistem",
    "Oyun Temelli Eğitim",
    "İngilizce Konuşan Karakterler",
    "Hikâye, Film ve Müzik",
    "Yıl Boyu Hazır Ders Planı",
    "Tek Platform, Tüm İçerik"
  ];

  return (
    <section className="w-full bg-white py-8 md:py-16">
      {/* DESKTOP: 2-column side-by-side layout */}
      {/* MOBILE: Image with overlay text in upper area only */}
      
      <div className="max-w-[1400px] mx-auto px-0 md:px-6">
        <div className="flex flex-col md:flex-row md:gap-0">
          
          {/* LEFT COLUMN: Image (Desktop) / Image with overlay (Mobile) */}
          <div className="relative w-full md:w-1/2">
            <img 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/qor2i6j7_freepik_do-t-same.-never-change_2769765773.png"
              alt="Woody Characters"
              className="w-full h-auto md:h-full object-cover"
              style={{ minHeight: '500px' }}
            />
            
            {/* MOBILE ONLY: Overlay text box - VERY SMALL, premium, at the TOP (ceiling/flags area) */}
            <div className="absolute top-4 left-4 right-4 md:hidden">
              <div 
                className="bg-white/75 backdrop-blur-md rounded-xl px-4 py-3"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: 'none' }}
              >
                <h2 className="text-[16px] font-bold text-gray-900 mb-2 leading-tight">
                  Neden Woody?
                </h2>
                <ul className="space-y-1">
                  {features.map((feature, index) => (
                    <li 
                      key={index}
                      className="text-[10px] font-medium text-gray-900 leading-tight flex items-start"
                    >
                      <span className="mr-1.5 text-yellow-600 text-[10px] font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Text area (Desktop ONLY) */}
          <div className="hidden md:flex md:w-1/2 bg-white items-center justify-center px-12 lg:px-16 py-16">
            <div className="max-w-[480px]">
              <h2 className="text-[36px] lg:text-[44px] font-bold text-gray-900 mb-8 leading-tight">
                Neden Woody?
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className="text-[16px] lg:text-[18px] text-gray-800 leading-relaxed flex items-start"
                  >
                    <span className="mr-3 text-yellow-500 text-[20px]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWoodyImageSection;
