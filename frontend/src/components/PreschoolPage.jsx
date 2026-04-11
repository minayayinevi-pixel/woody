import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, X, ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';

const PreschoolPage = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const handlePlayVideo = (type) => {
    setActiveVideo(type);
    setShowVideo(true);
  };

  const levels = [
    {
      name: "Basic Level",
      color: "#2196F3",
      bgGradient: "linear-gradient(135deg, #2196F3 0%, #1976D2 100%)",
      description: "Temel seviye İngilizce öğrenme seti",
      tag: "Başlangıç",
    },
    {
      name: "Junior Level",
      color: "#F5C518",
      bgGradient: "linear-gradient(135deg, #F5C518 0%, #E6B000 100%)",
      description: "Orta-alt seviye İngilizce öğrenme seti",
      tag: "Gelişim",
    },
    {
      name: "Senior Level",
      color: "#E91E90",
      bgGradient: "linear-gradient(135deg, #E91E90 0%, #C2185B 100%)",
      description: "Orta-üst seviye İngilizce öğrenme seti",
      tag: "İleri",
    },
    {
      name: "Pro Level",
      color: "#D32F2F",
      bgGradient: "linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)",
      description: "En ileri seviye İngilizce öğrenme seti",
      tag: "Uzman",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[72px]">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors bg-transparent border-none cursor-pointer"
          >
            <ChevronLeft size={20} />
            <span className="text-[13px] tracking-[0.1em] font-medium">GERİ</span>
          </button>
          <span className="logo-text text-[22px] tracking-[0.15em] text-black">PIXAR</span>
          <div className="w-[80px]" />
        </div>
      </header>

      {/* Hero Video Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden mt-[72px]">
        <div className="absolute inset-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/22305642-e101-4a60-a871-45a6a6d12d44/ember_stills_sdr_0154933.tiff-0.jpg"
            alt="Woody Preschool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1
            className="text-[36px] md:text-[56px] lg:text-[72px] font-bold tracking-[0.3em] text-center mb-6"
            style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 3px 20px rgba(0,0,0,0.4)' }}
          >
            PRESCHOOL SERIES
          </h1>
          <button
            onClick={() => { setActiveVideo('hero'); setShowVideo(true); }}
            className="group w-[70px] h-[70px] rounded-full border-2 border-white/70 flex items-center justify-center transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer"
          >
            <Play size={26} className="text-white/80 group-hover:text-white ml-1" fill="white" fillOpacity={0.8} />
          </button>
        </div>
        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60L0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60L1440 60L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Banner Strip */}
      <section className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 py-4 shadow-md">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2
            className="text-center text-white text-[24px] md:text-[32px] tracking-[0.15em] font-bold"
            style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
          >
            WOODY PRESCHOOL SERIES
          </h2>
        </div>
      </section>

      {/* Two Video Boxes Section */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-4 relative">

            {/* Left Video - Öğrenci Seti */}
            <div className="flex-1 w-full">
              <div
                className="relative bg-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer group aspect-video"
                onClick={() => handlePlayVideo('student')}
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/485b26c1-eb3a-48a7-bab6-437b3938f44c/RenderMan_OCIO_Aces_Header2.jpg"
                  alt="Öğrenci Seti"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 text-[18px] md:text-[22px] font-bold text-gray-800 tracking-wide">
                Öğrenci Seti
              </p>
            </div>

            {/* Arrows in the middle */}
            <div className="hidden md:flex flex-col items-center gap-3 px-4 min-w-[80px]">
              <div className="flex items-center gap-1">
                <ArrowLeft size={28} className="text-yellow-500" strokeWidth={2.5} />
              </div>
              <div className="w-[3px] h-8 bg-yellow-400 rounded-full" />
              <div className="flex items-center gap-1">
                <ArrowRight size={28} className="text-yellow-500" strokeWidth={2.5} />
              </div>
            </div>

            {/* Mobile arrows */}
            <div className="flex md:hidden items-center justify-center gap-4">
              <div className="rotate-90">
                <ArrowLeft size={24} className="text-yellow-500" strokeWidth={2.5} />
              </div>
              <div className="w-8 h-[3px] bg-yellow-400 rounded-full" />
              <div className="rotate-90">
                <ArrowRight size={24} className="text-yellow-500" strokeWidth={2.5} />
              </div>
            </div>

            {/* Right Video - Öğretmen Seti */}
            <div className="flex-1 w-full">
              <div
                className="relative bg-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer group aspect-video"
                onClick={() => handlePlayVideo('teacher')}
              >
                <img
                  src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/42a4f404-b669-4acc-93c8-1d42e679e27f/brochure_foldout.jpg"
                  alt="Öğretmen Seti"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 text-[18px] md:text-[22px] font-bold text-gray-800 tracking-wide">
                Öğretmen Seti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Level Cards Section - Pixar Feature Films Style */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="text-center text-[28px] md:text-[36px] font-light text-gray-900 mb-12 tracking-wide">
            Seviyeler
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {levels.map((level, idx) => (
              <div
                key={idx}
                className="group cursor-pointer"
              >
                {/* Card Image Area */}
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] flex flex-col items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.03]"
                  style={{ background: level.bgGradient }}
                >
                  {/* Level Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-[12px] font-semibold px-3 py-1 rounded-full tracking-wider">
                      {level.tag}
                    </span>
                  </div>

                  {/* Decorative circles */}
                  <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full opacity-10 bg-white" />
                  <div className="absolute bottom-[-20px] left-[-20px] w-[80px] h-[80px] rounded-full opacity-10 bg-white" />

                  {/* Woody silhouette / icon area */}
                  <div className="relative z-10 text-center px-6">
                    <div className="text-white/30 text-[80px] md:text-[100px] font-black leading-none mb-2" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>
                      {idx + 1}
                    </div>
                    <h3 className="text-white text-[22px] md:text-[26px] font-bold tracking-wide" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                      {level.name}
                    </h3>
                  </div>

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Card Label */}
                <div className="mt-4 text-center">
                  <h4 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
                    {level.name}
                  </h4>
                  <p className="text-[13px] text-gray-500 mt-1">
                    {level.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-8 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <p className="text-[11px] text-gray-500">© 1986-2026 Disney-Pixar</p>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => { setShowVideo(false); setActiveVideo(null); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[110] bg-transparent border-none cursor-pointer"
          >
            <X size={36} />
          </button>
          <div className="w-full max-w-[1000px] aspect-video">
            <iframe
              src="https://player.vimeo.com/video/911713522?autoplay=1"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={activeVideo === 'student' ? 'Öğrenci Seti' : activeVideo === 'teacher' ? 'Öğretmen Seti' : 'Preschool Series'}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PreschoolPage;
