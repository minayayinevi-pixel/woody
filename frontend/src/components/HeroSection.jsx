import React, { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';

const HeroSection = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const bgVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Hero video 2 saniye sonra başlat ve 2. saniyeden oynat
  useEffect(() => {
    const timer = setTimeout(() => {
      if (bgVideoRef.current) {
        bgVideoRef.current.currentTime = 2; // Video 2. saniyeden başlasın
        bgVideoRef.current.play().catch(err => {
          console.log('Video autoplay prevented:', err);
        });
        setVideoReady(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={bgVideoRef}
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/dit1nm17_Molly%20sabah%20go%CC%88zlerini%20ac%CC%A7t%C4%B1g%CC%86%C4%B1nda%2C%20yuvarlak%20go%CC%88vdesi%20gu%CC%88nes%CC%A7%20%C4%B1s%CC%A7%C4%B1g%CC%86%C4%B1n%C4%B1%20ku%CC%88c%CC%A7u%CC%88k%20bir%20lamba%20gibi%20yayd%C4%B1.%20Bir%20an%20durdu%E2%80%A6%20sonra%20kendi%20kendine%20hafiften%20say%C4%B1%20sayd%C4%B1%20%E2%80%9COne%E2%80%A6%20two%E2%80%A6%20three%E2%80%A6%20kalk%C4%B1yorum%21%E2%80%9D%20Yatakta%20minik%20bir%20s%20%282%29.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        {/* Title */}
        <h1 className="text-[48px] md:text-[64px] lg:text-[80px] text-white leading-[1.1] tracking-wide mb-6" style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.4)', fontFamily: "'Fredoka', 'Inter', sans-serif", fontWeight: '700', animation: 'fadeInUp 1s ease-out' }}>
          Play. Learn. Speak English.
        </h1>

        {/* Play Button */}
        <button
          onClick={() => setShowVideo(true)}
          className="group relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full border-2 border-white/70 flex items-center justify-center mb-4 transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer"
          style={{ animation: 'fadeInUp 1.2s ease-out', margin: '0 auto' }}
        >
          <Play size={28} className="text-white/80 group-hover:text-white ml-1 transition-colors duration-300" fill="white" fillOpacity={0.8} />
        </button>

        {/* Subtitle - TÜRKÇE */}
        <p className="text-[14px] md:text-[16px] text-white/90 tracking-wide max-w-[700px] mx-auto" style={{ animation: 'fadeInUp 1.4s ease-out' }}>
          Woody Okul Öncesi sistemi, yapılandırılmış oyun, ilgi çekici etkinlikler ve zengin dijital içeriklerle dil becerilerini geliştirir.
        </p>
      </div>

      {/* Curved Divider with Metallic/Glass Effect - ESKİ HAL */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <defs>
            <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#a8b3c1', stopOpacity: 0.9 }} />
              <stop offset="25%" style={{ stopColor: '#e8eaed', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="75%" style={{ stopColor: '#c5cdd6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#9ba5b0', stopOpacity: 0.9 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path 
            d="M0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60" 
            stroke="url(#metalGradient)" 
            strokeWidth="12" 
            fill="none" 
            filter="url(#glow)"
            style={{ opacity: 0.95 }}
          />
          <path d="M0 60L0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60L1440 60L0 60Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button onClick={() => setShowVideo(false)} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors duration-300 z-[110] bg-transparent border-none cursor-pointer">
            <X size={36} />
          </button>
          <div className="w-full max-w-[1100px] aspect-video">
            <video
              ref={modalVideoRef}
              autoPlay
              controls
              className="w-full h-full rounded-lg"
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/dit1nm17_Molly%20sabah%20go%CC%88zlerini%20ac%CC%A7t%C4%B1g%CC%86%C4%B1nda%2C%20yuvarlak%20go%CC%88vdesi%20gu%CC%88nes%CC%A7%20%C4%B1s%CC%A7%C4%B1g%CC%86%C4%B1n%C4%B1%20ku%CC%88c%CC%A7u%CC%88k%20bir%20lamba%20gibi%20yayd%C4%B1.%20Bir%20an%20durdu%E2%80%A6%20sonra%20kendi%20kendine%20hafiften%20say%C4%B1%20sayd%C4%B1%20%E2%80%9COne%E2%80%A6%20two%E2%80%A6%20three%E2%80%A6%20kalk%C4%B1yorum%21%E2%80%9D%20Yatakta%20minik%20bir%20s%20%282%29.mp4"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;