import React, { useState, useRef, useEffect } from 'react';
import { Play, X } from 'lucide-react';

const HeroSection = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const bgVideoRef = useRef(null);
  const modalVideoRef = useRef(null);

  // Set video start time BEFORE playing
  useEffect(() => {
    if (bgVideoRef.current) {
      const video = bgVideoRef.current;
      
      const handleLoadedMetadata = () => {
        video.currentTime = 16;
        setVideoReady(true);
      };

      const handleLoadedData = () => {
        if (video.currentTime < 16) {
          video.currentTime = 16;
        }
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('loadeddata', handleLoadedData);
      
      // Preload and set time immediately
      video.load();

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  useEffect(() => {
    if (modalVideoRef.current && showVideo) {
      modalVideoRef.current.currentTime = 16;
    }
  }, [showVideo]);

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{ opacity: videoReady ? 1 : 0, transition: 'opacity 0.3s ease-in' }}
          poster={data.backgroundImage}
        >
          <source src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ct6m2ted_woody%20and%20robo%20%283%29.mp4#t=16" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        {/* Title */}
        <h1 className="text-[48px] md:text-[64px] lg:text-[80px] text-white leading-[1.1] tracking-wide mb-6" style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.4)', fontFamily: "'Fredoka', 'Inter', sans-serif", fontWeight: '700', animation: 'fadeInUp 1s ease-out' }}>
          Welcome to Woody & Friends Preschool English System
        </h1>

        {/* Play Button */}
        <button
          onClick={() => setShowVideo(true)}
          className="group relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full border-2 border-white/70 flex items-center justify-center mb-4 transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer"
          style={{ animation: 'fadeInUp 1.2s ease-out', margin: '0 auto' }}
        >
          <Play size={28} className="text-white/80 group-hover:text-white ml-1 transition-colors duration-300" fill="white" fillOpacity={0.8} />
        </button>

        {/* Subtitle */}
        <p className="text-[14px] md:text-[16px] text-white/90 tracking-wide max-w-[700px] mx-auto" style={{ animation: 'fadeInUp 1.4s ease-out' }}>
          The Woody Preschool system builds language skills through structured play, engaging activities, and rich digital content.
        </p>
      </div>

      {/* Parlak Cam Gibi Düz Çizgi - Video Altında */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[6px]" style={{
        background: 'linear-gradient(90deg, rgba(168,179,193,0.7) 0%, rgba(232,234,237,0.9) 25%, rgba(255,255,255,1) 50%, rgba(197,205,214,0.9) 75%, rgba(155,165,176,0.7) 100%)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.5)',
        backdropFilter: 'blur(4px)'
      }} />

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