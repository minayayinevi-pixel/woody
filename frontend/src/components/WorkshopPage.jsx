import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, X, ChevronLeft } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const WorkshopPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const heroVideoRef = React.useRef(null);
  const p = t.preschoolPage;

  // Hero video hemen başlat
  React.useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err);
      });
    }
  }, []);

  const handlePlayVideo = (type) => {
    setActiveVideo(type);
    setShowVideo(true);
  };

  const levels = [
    { name: "Basic Level", subtitle: "Başlangıç", color: "#2196F3", image: "https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png", description: "Temel kelimeler ve basit cümlelerle İngilizceye güçlü bir başlangıç sağlar.", tag: "BASIC" },
    { name: "Junior Level", subtitle: "Gelişim", color: "#F5C518", image: "https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png", description: "Çocukların cümle kurma ve kendini ifade etme becerilerini geliştirir.", tag: "JUNIOR" },
    { name: "Senior Level", subtitle: "İleri Seviye", color: "#E91E90", image: "https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png", description: "İngilizceyi daha akıcı kullanma ve anlama becerisi kazandırır.", tag: "SENIOR" },
    { name: "PRO Level", subtitle: "Uzmanlık", color: "#D32F2F", image: "https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/6qg348xf_Preschool%20Basic%20%28297%20x%20210%20mm%29%20%28Instagram%20Go%CC%88nderisi%20%2845%29%29.png", description: "Okuma, yazma ve akademik İngilizce altyapısı oluşturur.", tag: "PRO" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header data={siteData.header} />

      {/* Hero Video Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden mt-[72px]">
        <div className="absolute inset-0">
          {/* Hero Background Video */}
          <video
            ref={heroVideoRef}
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
          >
            <source src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/dit1nm17_Molly%20sabah%20go%CC%88zlerini%20ac%CC%A7t%C4%B1g%CC%86%C4%B1nda%2C%20yuvarlak%20go%CC%88vdesi%20gu%CC%88nes%CC%A7%20%C4%B1s%CC%A7%C4%B1g%CC%86%C4%B1n%C4%B1%20ku%CC%88c%CC%A7u%CC%88k%20bir%20lamba%20gibi%20yayd%C4%B1.%20Bir%20an%20durdu%E2%80%A6%20sonra%20kendi%20kendine%20hafiften%20say%C4%B1%20sayd%C4%B1%20%E2%80%9COne%E2%80%A6%20two%E2%80%A6%20three%E2%80%A6%20kalk%C4%B1yorum%21%E2%80%9D%20Yatakta%20minik%20bir%20s%20%282%29.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-[60px] md:text-[90px] lg:text-[120px] font-black tracking-[0.05em] text-center mb-6 leading-none" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 4px 30px rgba(0,0,0,0.5)', letterSpacing: '0.1em' }}>
            WORKSHOP
          </h1>
          <button onClick={() => { setActiveVideo('hero'); setShowVideo(true); }} className="group w-[70px] h-[70px] rounded-full border-2 border-white/70 flex items-center justify-center transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer">
            <Play size={26} className="text-white/80 group-hover:text-white ml-1" fill="white" fillOpacity={0.8} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            {/* Metallic glass stroke with gradient and glow */}
            <defs>
              <linearGradient id="metalGradientWorkshop" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#a8b3c1', stopOpacity: 0.9 }} />
                <stop offset="25%" style={{ stopColor: '#e8eaed', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: '#c5cdd6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#9ba5b0', stopOpacity: 0.9 }} />
              </linearGradient>
              <filter id="glowWorkshop">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Thicker metallic stroke */}
            <path 
              d="M0 60L0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60" 
              stroke="url(#metalGradientWorkshop)" 
              strokeWidth="12" 
              fill="none" 
              filter="url(#glowWorkshop)"
              style={{ opacity: 0.95 }}
            />
            {/* White fill */}
            <path d="M0 60L0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60L1440 60L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Banner Strip */}
      <section className="w-full bg-gradient-to-r from-green-400 via-green-500 to-teal-400 py-4 shadow-md">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-center text-white text-[24px] md:text-[32px] tracking-[0.15em] font-bold" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            WOODY WORKSHOP SERIES
          </h2>
        </div>
      </section>

      {/* New Text Section - Between Video and Banner */}
      <section className="w-full bg-white py-6">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <p className="text-[16px] md:text-[18px] text-gray-700 font-medium">
            Atölye Serisi iki ayrı setten oluşur. İçerikleri video anlatımlarıyla keşfedin.
          </p>
        </div>
      </section>

      {/* Arrows removed */}

      {/* Two Video Boxes Section */}
      <section className="w-full py-10 md:py-14 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Left Video - Öğretmen Seti with COMING SOON */}
            <div className="flex-1 w-full">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group aspect-video">
                <img src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/b5pl9rqg_Paragraf%20metniniz%20%284%29.png" alt="Coming Soon" className="w-full h-full object-cover" />
              </div>
              <p className="text-center mt-4 text-[18px] md:text-[22px] font-bold text-gray-800 tracking-wide">{p.teacherSet}</p>
            </div>
            {/* Right Video - Öğrenci Seti with COMING SOON */}
            <div className="flex-1 w-full">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group aspect-video">
                <img src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/b5pl9rqg_Paragraf%20metniniz%20%284%29.png" alt="Coming Soon" className="w-full h-full object-cover" />
              </div>
              <p className="text-center mt-4 text-[18px] md:text-[22px] font-bold text-gray-800 tracking-wide">{p.studentSet}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Level Cards Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="text-center text-[28px] md:text-[36px] font-light text-gray-900 mb-12 tracking-wide">Serilerin İçeriklerini Video Anlatımlarıyla Keşfedin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {levels.map((level, idx) => (
              <div key={idx} className="group">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] bg-gray-200">
                  <img src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/b5pl9rqg_Paragraf%20metniniz%20%284%29.png" alt="Coming Soon" className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-[16px] md:text-[18px] font-semibold text-gray-800 relative inline-block">
                    {level.name}
                    {/* Hover underline with level color */}
                    <span 
                      className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ backgroundColor: level.color }}
                    />
                  </h4>
                  <p className="text-[13px] text-gray-500 mt-1">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Feature Boxes Section - Premium White Design (NO Level Finder) */}
      <section className="w-full py-20 md:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Woody Digital Library */}
            <div 
              className="group cursor-pointer text-center"
              onClick={() => navigate('/library')}
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-5 overflow-hidden rounded-2xl">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/5dxwajw5_Ads%C4%B1z%20tasar%C4%B1m%20%2844%29.png" 
                    alt="Woody Digital Library" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[19px] font-semibold text-gray-900 mb-3 tracking-tight">Woody Digital Library</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed px-3">{p.library.desc}</p>
              </div>
            </div>

            {/* Woody Store */}
            <div 
              className="group cursor-pointer text-center"
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-5 overflow-hidden rounded-2xl">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/myf0t3nv_Gemini_Generated_Image_ip9cg9ip9cg9ip9c.png" 
                    alt="Woody Store" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[19px] font-semibold text-gray-900 mb-3 tracking-tight">Woody Store</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed px-3">{p.store.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer data={siteData.footer} />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button onClick={() => { setShowVideo(false); setActiveVideo(null); }} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[110] bg-transparent border-none cursor-pointer"><X size={36} /></button>
          <div className="w-full max-w-[1000px] aspect-video">
            <video 
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/k458a8f5_1%20kopyas%C4%B1%20kopyas%C4%B1%20%28Video%29.mp4" 
              controls 
              autoPlay 
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopPage;
