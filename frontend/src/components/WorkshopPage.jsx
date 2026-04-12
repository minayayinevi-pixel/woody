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
          <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/22305642-e101-4a60-a871-45a6a6d12d44/ember_stills_sdr_0154933.tiff-0.jpg" alt="Woody Workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-[36px] md:text-[56px] lg:text-[72px] font-bold tracking-[0.3em] text-center mb-6" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 3px 20px rgba(0,0,0,0.4)' }}>
            WORKSHOP
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
      <section className="w-full bg-gradient-to-r from-green-400 via-green-500 to-teal-400 py-4 shadow-md">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-center text-white text-[24px] md:text-[32px] tracking-[0.15em] font-bold" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
            WORKSHOP SERIES
          </h2>
        </div>
      </section>

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

      {/* Levels Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] text-black leading-snug font-semibold text-center mb-4" style={{ fontFamily: "'Fredoka', 'Inter', sans-serif" }}>
            {p.levelsHeading}
          </h2>
          <div className="w-24 h-[3px] mx-auto mb-12" style={{ backgroundColor: '#2ECC71' }} />

          <div className="space-y-12 md:space-y-16">
            {levels.map((level, idx) => (
              <div key={idx} className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-10 lg:gap-16`}>
                <div className="w-full lg:w-1/2">
                  <img
                    src={level.image}
                    alt={level.name}
                    className="w-full h-auto"
                    style={{
                      display: 'block',
                      maxWidth: '100%',
                      height: 'auto',
                      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
                    }}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <div
                    className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold text-white mb-5"
                    style={{ backgroundColor: level.color }}
                  >
                    {level.tag}
                  </div>
                  <h3 className="text-[30px] md:text-[36px] lg:text-[40px] font-light text-black leading-tight mb-5">
                    {level.name}
                  </h3>
                  <div className="w-16 h-[3px] mb-6" style={{ backgroundColor: level.color }} />
                  <p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.8]">
                    {level.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.9)' }}>
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 z-[10001] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 transition-all cursor-pointer"
          >
            <X size={24} className="text-white" />
          </button>
          <div className="relative w-full max-w-5xl aspect-video mx-4">
            <VideoPlayer videoType={activeVideo} />
          </div>
        </div>
      )}

      <Footer data={siteData.footer} />
    </div>
  );
};

const VideoPlayer = ({ videoType }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 16;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full h-full"
      controls
      autoPlay
      src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ct6m2ted_woody%20and%20robo%20%283%29.mp4#t=16"
    />
  );
};

export default WorkshopPage;
