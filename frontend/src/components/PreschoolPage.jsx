import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, X, ChevronLeft } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const PreschoolPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const p = t.preschoolPage;

  const handlePlayVideo = (type) => {
    setActiveVideo(type);
    setShowVideo(true);
  };

  const levels = [
    { name: p.levelNames.basic, color: "#2196F3", image: "https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png", description: p.levelDescs.basic, tag: p.levelTags.basic },
    { name: p.levelNames.junior, color: "#F5C518", image: "https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png", description: p.levelDescs.junior, tag: p.levelTags.junior },
    { name: p.levelNames.senior, color: "#E91E90", image: "https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png", description: p.levelDescs.senior, tag: p.levelTags.senior },
    { name: "PRO - Level 4", color: "#D32F2F", image: "https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/6qg348xf_Preschool%20Basic%20%28297%20x%20210%20mm%29%20%28Instagram%20Go%CC%88nderisi%20%2845%29%29.png", description: "Sadece Woody Academy içinde eğitim içindir. Okuma yazma bilgisi gerektirir. 1. sınıftan sonra.", tag: "NEW" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header data={siteData.header} />

      {/* Hero Video Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] overflow-hidden mt-[72px]">
        <div className="absolute inset-0">
          <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/22305642-e101-4a60-a871-45a6a6d12d44/ember_stills_sdr_0154933.tiff-0.jpg" alt="Woody Preschool" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-[36px] md:text-[56px] lg:text-[72px] font-bold tracking-[0.3em] text-center mb-6" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 3px 20px rgba(0,0,0,0.4)' }}>
            {p.heroTitle}
          </h1>
          <button onClick={() => { setActiveVideo('hero'); setShowVideo(true); }} className="group w-[70px] h-[70px] rounded-full border-2 border-white/70 flex items-center justify-center transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer">
            <Play size={26} className="text-white/80 group-hover:text-white ml-1" fill="white" fillOpacity={0.8} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60L0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60L1440 60L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Banner Strip */}
      <section className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 py-4 shadow-md">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-center text-white text-[24px] md:text-[32px] tracking-[0.15em] font-bold" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            {p.banner}
          </h2>
        </div>
      </section>

      {/* Curved Arrow SVGs - pointing to videos */}
      <div className="flex w-full justify-center items-center gap-[200px] lg:gap-[300px] bg-white py-2">
        {/* Left arrow - curved down to left video */}
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="w-[100px] h-[80px] md:w-[120px] md:h-[100px]">
          <path 
            d="M60 10 Q50 30, 45 50 Q42 65, 35 75" 
            stroke="#1a1a1a" 
            strokeWidth="3.5" 
            fill="none" 
            strokeLinecap="round"
          />
          {/* Arrow head */}
          <path d="M35 75 L28 68 M35 75 L42 69" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Decorative dots */}
          <circle cx="58" cy="15" r="3" fill="#F5C518" />
          <circle cx="48" cy="35" r="2.5" fill="#F5C518" />
          <circle cx="40" cy="60" r="3" fill="#F5C518" />
        </svg>

        {/* Right arrow - curved down to right video */}
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="w-[100px] h-[80px] md:w-[120px] md:h-[100px]">
          <path 
            d="M60 10 Q70 30, 75 50 Q78 65, 85 75" 
            stroke="#1a1a1a" 
            strokeWidth="3.5" 
            fill="none" 
            strokeLinecap="round"
          />
          {/* Arrow head */}
          <path d="M85 75 L92 68 M85 75 L78 69" stroke="#1a1a1a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Decorative dots */}
          <circle cx="62" cy="15" r="3" fill="#F5C518" />
          <circle cx="72" cy="35" r="2.5" fill="#F5C518" />
          <circle cx="80" cy="60" r="3" fill="#F5C518" />
        </svg>
      </div>

      {/* Two Video Boxes Section */}
      <section className="w-full py-10 md:py-14 bg-gray-50">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Left Video - Öğretmen Seti */}
            <div className="flex-1 w-full">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer group aspect-video" onClick={() => handlePlayVideo('teacher')}>
                <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/42a4f404-b669-4acc-93c8-1d42e679e27f/brochure_foldout.jpg" alt={p.teacherSet} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 text-[18px] md:text-[22px] font-bold text-gray-800 tracking-wide">{p.teacherSet}</p>
            </div>
            {/* Right Video - Öğrenci Seti */}
            <div className="flex-1 w-full">
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer group aspect-video" onClick={() => handlePlayVideo('student')}>
                <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/485b26c1-eb3a-48a7-bab6-437b3938f44c/RenderMan_OCIO_Aces_Header2.jpg" alt={p.studentSet} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 text-[18px] md:text-[22px] font-bold text-gray-800 tracking-wide">{p.studentSet}</p>
            </div>
          </div>

          {/* Warning Notice */}
          <div className="mt-8 bg-white border border-gray-200 rounded-xl px-5 py-4">
            <p className="text-[13px] md:text-[14px] text-gray-700 leading-[1.7]" dangerouslySetInnerHTML={{ __html: `<span class="text-red-500 font-bold text-[18px] mr-1.5">!</span> ${p.warning}` }} />
          </div>
        </div>
      </section>

      {/* Level Cards Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="text-center text-[28px] md:text-[36px] font-light text-gray-900 mb-12 tracking-wide">{p.levels}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {levels.map((level, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.03]" style={{ background: level.image ? '#f5f5f5' : level.bgGradient }}>
                  {level.image ? (
                    <img src={level.image} alt={level.name} className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="absolute top-4 left-4 z-10"><span className="bg-white/20 backdrop-blur-sm text-white text-[12px] font-semibold px-3 py-1 rounded-full tracking-wider">{level.tag}</span></div>
                      <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full opacity-10 bg-white" />
                      <div className="absolute bottom-[-20px] left-[-20px] w-[80px] h-[80px] rounded-full opacity-10 bg-white" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                        <div className="text-white/30 text-[80px] md:text-[100px] font-black leading-none mb-2" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>{idx + 1}</div>
                        <h3 className="text-white text-[22px] md:text-[26px] font-bold tracking-wide" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>{level.name}</h3>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-black/20 to-transparent" />
                    </>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-[16px] md:text-[18px] font-semibold text-gray-800">{level.name}</h4>
                  <p className="text-[13px] text-gray-500 mt-1">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Feature Boxes Section */}
      <section className="w-full py-16 md:py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="group cursor-pointer text-center" onClick={() => navigate('/level-finder')}>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/onplu2u5_Seviye%20Bulucu%20sembolu%CC%88.png" alt={p.finder.title} className="w-full aspect-square object-cover" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mt-5 mb-3" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>{p.finder.title}</h3>
              <p className="text-[14px] text-gray-600 leading-[1.7] px-2">{p.finder.desc}</p>
            </div>
            <div className="group cursor-pointer text-center" onClick={() => navigate('/library')}>
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/5dxwajw5_Ads%C4%B1z%20tasar%C4%B1m%20%2844%29.png" alt={p.library.title} className="w-full aspect-square object-cover" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mt-5 mb-3" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>{p.library.title}</h3>
              <p className="text-[14px] text-gray-600 leading-[1.7] px-2">{p.library.desc}</p>
            </div>
            <div className="group cursor-pointer text-center">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/myf0t3nv_Gemini_Generated_Image_ip9cg9ip9cg9ip9c.png" alt={p.store.title} className="w-full aspect-square object-cover" />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mt-5 mb-3" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>{p.store.title}</h3>
              <p className="text-[14px] text-gray-600 leading-[1.7] px-2">{p.store.desc}</p>
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
            <iframe src="https://player.vimeo.com/video/911713522?autoplay=1" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title={activeVideo === 'student' ? p.studentSet : activeVideo === 'teacher' ? p.teacherSet : 'Preschool Series'} className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PreschoolPage;
