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

  // Duplicate cards for seamless infinite loop
  const duplicatedUpdates = [...updates, ...updates];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] text-center">
          Woody Yenilikler
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#FFB800] to-[#FF6A00] mx-auto mt-4"></div>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Auto-scrolling wrapper */}
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedUpdates.map((update, index) => (
            <div
              key={`${update.id}-${index}`}
              className="flex-shrink-0 w-[280px] md:w-[320px] mx-3 md:mx-4"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image - 4:3 ratio */}
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <img
                    src={update.image}
                    alt={update.title}
                    className="absolute inset-0 w-full h-full object-cover"
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
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        /* Mobile: show 3 cards, slower speed */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default WoodyUpdates;
