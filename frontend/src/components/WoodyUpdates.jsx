import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const WoodyUpdates = () => {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const updates = [
    {
      id: 1,
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/q3w780z7_1.png',
      title: "Almanya Genelinde Anlaşma İmzalandı",
      description: "Don Bosco Medien, kitap dağıtım ve pazarlama ağı ile Almanya genelinde Woody ve Arkadaşları'na ait tüm içeriklerin kullanım ve satış haklarını kapsayan anlaşma imzalandı."
    },
    {
      id: 2,
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/796xqghe_2.png',
      title: "Rusya Genelinde Anlaşma İmzalandı",
      description: "Prosveshcheniye Publishers ile Rusya genelinde Woody ve Arkadaşları'na ait tüm içeriklerin kullanım ve satış haklarını kapsayan anlaşma imzalandı."
    },
    {
      id: 3,
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/xmex01in_Woody%20%287%29.png',
      title: 'Cambridge Sertifikasyon Süreci Başlatıldı',
      description: "British Side iş ortaklığıyla Cambridge sertifikasyon süreci resmi olarak başlatılmıştır."
    },
    {
      id: 4,
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/881wsvif_rekant.png',
      title: 'Okullar Mini Cambridge Kampüslerine Dönüşüyor',
      description: "British Side iş ortaklığı ile okulları mini Cambridge kampüslerine dönüştürüyoruz."
    },
    {
      id: 5,
      video: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/543xrrqf_cambr%C4%B1dgr%20tan%C4%B1%C4%B1m.mp4',
      title: 'Cambridge Eğitim Sistemini Keşfedin',
      description: 'Okul öncesi İngilizce eğitimde uluslararası yaklaşımı tanıyın.'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=800&fit=crop',
      title: 'Woody Academy Açıldı',
      description: 'Mezuniyet sonrası devam programı başladı'
    }
  ];

  // Scroll to specific card
  const scrollToCard = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 280; // card width + gap
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  // Next/Prev handlers
  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % updates.length;
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + updates.length) % updates.length;
    scrollToCard(prevIndex);
  };

  // Track scroll position (for mobile)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 280;
      const centerIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(centerIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] text-center">
          Woody Yenilikler
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#FFB800] to-[#FF6A00] mx-auto mt-4"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Desktop Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          style={{ marginLeft: '-24px' }}
        >
          <ChevronLeft size={24} className="text-gray-700" />
        </button>

        <button
          onClick={handleNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          style={{ marginRight: '-24px' }}
        >
          <ChevronRight size={24} className="text-gray-700" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {updates.map((update, index) => {
            const isActive = index === activeIndex;
            
            return (
              <div
                key={update.id}
                className="flex-shrink-0 w-[240px] md:w-[260px] snap-center transition-all duration-400 ease-out cursor-pointer"
                onClick={() => {
                  if (update.video) {
                    setShowVideoModal(true);
                  } else {
                    scrollToCard(index);
                  }
                }}
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(0.88)',
                  opacity: isActive ? 1 : 0.65,
                  zIndex: isActive ? 10 : 1
                }}
              >
                {/* Card - Vertical Portrait Format (NOT SQUARE) */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                  {/* Image/Video - Portrait ratio */}
                  <div className="relative w-full" style={{ paddingBottom: '133%' }}>
                    {update.video ? (
                      // Video thumbnail with play button
                      <>
                        <video
                          src={update.video}
                          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                          muted
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                            <Play size={28} className="text-gray-900 ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </>
                    ) : (
                      // Regular image
                      <img
                        src={update.image}
                        alt={update.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  
                  {/* Content - Below image */}
                  <div className="p-4 flex-1 flex flex-col justify-start">
                    <h3 className="text-[13px] md:text-[14px] font-bold text-[#0B1F3A] mb-1.5 leading-tight line-clamp-2">
                      {update.title}
                    </h3>
                    <p className="text-[11px] md:text-[12px] text-gray-600 leading-relaxed line-clamp-3">
                      {update.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator - Mobile Only */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {updates.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#FFB800] w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setShowVideoModal(false)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Video Player */}
            <video
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/543xrrqf_cambr%C4%B1dgr%20tan%C4%B1%C4%B1m.mp4"
              controls
              autoPlay
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Line clamp */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default WoodyUpdates;
