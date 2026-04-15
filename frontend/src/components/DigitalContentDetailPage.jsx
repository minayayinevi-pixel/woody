import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Play } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';

const DigitalContentDetailPage = () => {
  const { levelId, sectionId } = useParams();
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Renk tanımlamaları
  const sectionColors = {
    storyland: '#F5C518', // SARI
    movieland: '#DC2626', // KIRMIZI
    musicland: '#6B21A8', // KOYU MOR
    library: '#92400E' // KAHVERENGİ
  };

  const sectionTitles = {
    storyland: 'Storyland',
    movieland: 'Movieland',
    musicland: 'Musicland',
    library: 'Library'
  };

  const levelTitles = {
    basic: 'BASIC Level',
    junior: 'JUNIOR Level',
    senior: 'SENIOR Level'
  };

  // İçerik sayıları
  const contentCounts = {
    storyland: 16, // 16 video
    movieland: 8,  // 8 video
    musicland: 8,  // 8 müzik
    library: 0     // Link eklenecek
  };

  const currentColor = sectionColors[sectionId] || '#000';
  const itemCount = contentCounts[sectionId] || 0;

  // Placeholder içerikler oluştur
  const generateItems = () => {
    const items = [];
    for (let i = 1; i <= itemCount; i++) {
      items.push({
        id: i,
        title: `${sectionTitles[sectionId]} ${i}`,
        thumbnail: `https://via.placeholder.com/300x200/${currentColor.replace('#', '')}/FFFFFF?text=${sectionTitles[sectionId]}+${i}`,
        videoUrl: '' // Video URL'leri sonra eklenecek
      });
    }
    return items;
  };

  const items = sectionId === 'library' ? [] : generateItems();

  const handleItemClick = (item) => {
    if (sectionId === 'musicland') {
      // Müzik çal
      alert(`🎵 ${item.title} çalıyor... (Müzik dosyası eklenecek)`);
    } else {
      // Video aç
      setSelectedVideo(item);
    }
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />
      <div className="pt-[72px]" />

      {/* Header with Back Button */}
      <section className="w-full py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center gap-4">
          <button
            onClick={() => navigate('/digital-content')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft size={24} />
            <span className="text-[15px] font-medium">Geri</span>
          </button>
          <div className="flex-1">
            <h1 
              className="text-[28px] md:text-[36px] font-normal"
              style={{ 
                fontFamily: "'Magic English', cursive",
                color: currentColor
              }}
            >
              {levelTitles[levelId]} - {sectionTitles[sectionId]}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      {sectionId === 'library' ? (
        // Library - Link eklenecek
        <section className="w-full py-16">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
            <p className="text-[18px] text-gray-500">
              📖 Library içeriği yakında eklenecek
            </p>
          </div>
        </section>
      ) : (
        // Storyland, Movieland, Musicland - Kartlar
        <section className="w-full py-12 md:py-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="group relative aspect-[3/2] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${currentColor}20 0%, ${currentColor}10 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${currentColor}60`,
                    boxShadow: `0 4px 16px 0 ${currentColor}20`
                  }}
                >
                  {/* Thumbnail */}
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${currentColor}90` }}
                    >
                      <Play size={28} fill="white" color="white" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                    <p 
                      className="text-[13px] md:text-[14px] font-semibold text-white text-center"
                    >
                      {item.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative w-full max-w-[900px] bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-10 transition-colors"
            >
              ✕
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <p className="text-white text-[16px]">
                🎬 {selectedVideo.title} video player (Video URL eklenecek)
              </p>
            </div>

            {/* Title */}
            <div className="p-4 bg-gray-900 text-white">
              <h3 className="text-[18px] font-semibold">{selectedVideo.title}</h3>
            </div>
          </div>
        </div>
      )}

      <Footer data={siteData.footer} />
    </div>
  );
};

export default DigitalContentDetailPage;
