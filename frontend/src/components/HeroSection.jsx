import React, { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';

const HeroSection = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  const bgVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Set video start time when loaded
  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.addEventListener('loadedmetadata', () => {
        bgVideoRef.current.currentTime = 16;
      });
    }
  }, []);

  useEffect(() => {
    if (modalVideoRef.current && showVideo) {
      modalVideoRef.current.currentTime = 16;
    }
  }, [showVideo]);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={data.backgroundImage}
        >
          <source src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ct6m2ted_woody%20and%20robo%20%283%29.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1
          className="text-[36px] md:text-[56px] lg:text-[72px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-center mb-8"
          style={{
            fontFamily: "'Magic English', 'Fredoka', cursive",
            animation: 'fadeInUp 1s ease-out',
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          WOODY DIGITAL WORLD
        </h1>

        {/* Play Button */}
        <button
          onClick={() => setShowVideo(true)}
          className="group relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full border-2 border-white/70 flex items-center justify-center mb-4 transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer"
          style={{ animation: 'fadeInUp 1.2s ease-out' }}
        >
          <Play size={28} className="text-white/80 group-hover:text-white ml-1 transition-colors duration-300" fill="white" fillOpacity={0.8} />
        </button>

        {/* Subtitle */}
        <p className="text-[14px] md:text-[16px] text-white/90 tracking-wide" style={{ animation: 'fadeInUp 1.4s ease-out' }}>
          Storyland videosunu izleyerek sistemi yakından keşfedin.
        </p>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
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
              src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ct6m2ted_woody%20and%20robo%20%283%29.mp4"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
on;
