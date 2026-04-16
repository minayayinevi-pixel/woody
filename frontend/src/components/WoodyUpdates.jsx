import React from 'react';

const WoodyUpdates = () => {
  const updates = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      title: 'Yeni Ürün Lansmanı',
      description: 'Woody Preschool yeni serileri ile tanışın'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop',
      title: 'Cambridge Sertifika Programı',
      description: 'Uluslararası geçerliliğe sahip sertifika'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      title: 'Dijital İçerikler Güncellendi',
      description: 'Yeni hikayeler ve aktiviteler eklendi'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop',
      title: 'Woody Academy Açıldı',
      description: 'Mezuniyet sonrası devam programı başladı'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      title: 'Öğretmen Eğitim Programı',
      description: 'TKT sertifikası ile desteklenen eğitim'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] text-center">
          Woody Yenilikler
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#FFB800] to-[#FF6A00] mx-auto mt-4"></div>
      </div>

      {/* Scroll Snap Carousel Container */}
      <div className="relative px-6 md:px-12">
        {/* Scrollable wrapper with snap */}
        <div 
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {updates.map((update) => (
            <div
              key={update.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image - 4:3 ratio */}
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <img
                    src={update.image}
                    alt={update.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[16px] md:text-[18px] font-bold text-[#0B1F3A] mb-2 leading-tight">
                    {update.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hide scrollbar but keep functionality */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default WoodyUpdates;
