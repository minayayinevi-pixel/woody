import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const HeroSection = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={data.backgroundImage}
          alt="RenderMan Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1
          className="hero-title text-[42px] md:text-[64px] lg:text-[80px] font-bold tracking-[0.3em] md:tracking-[0.4em] text-center mb-8"
          style={{
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          {data.title}
        </h1>

        {/* Play Button */}
        <button
          onClick={() => setShowVideo(true)}
          className="group relative w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full border-2 border-white/70 flex items-center justify-center mb-4 transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer"
          style={{
            animation: 'fadeInUp 1.2s ease-out',
          }}
        >
          <Play
            size={28}
            className="text-white/80 group-hover:text-white ml-1 transition-colors duration-300"
            fill="white"
            fillOpacity={0.8}
          />
        </button>

        {/* Subtitle */}
        <p
          className="text-[14px] md:text-[16px] text-white/90 tracking-wide"
          style={{
            animation: 'fadeInUp 1.4s ease-out',
          }}
        >
          Watch &ldquo;<strong>{data.subtitleBold}</strong>&rdquo;
        </p>
      </div>

      {/* Curved Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60L1440 60L0 60Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors duration-300 z-[110] bg-transparent border-none cursor-pointer"
          >
            <X size={36} />
          </button>
          <div className="w-full max-w-[1100px] aspect-video">
            <iframe
              src={data.videoUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="RenderMan Show Reel"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
