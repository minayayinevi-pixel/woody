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
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = React.useRef(null);

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

  // İçerik sayıları ve gerçek müzik dosyaları
  const contentCounts = {
    storyland: 16, // 16 video
    movieland: 8,  // 8 video
    musicland: 8,  // 8 müzik
    library: 0     // Link eklenecek
  };

  // BASIC Musicland için gerçek müzikler
  const basicMusiclandTracks = [
    {
      id: 1,
      title: 'Theme 1',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/iccoy0mm_theme%201%20.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/pxj6okjj_1.png'
    },
    {
      id: 2,
      title: 'Theme 2',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/y3dz0w3v_theme%202.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3r3f6uwx_2.png'
    },
    {
      id: 3,
      title: 'Theme 3',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/lfgctcef_theme%203%20.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/fvlxvwww_3.png'
    },
    {
      id: 4,
      title: 'Theme 4',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/6pfdm5c0_theme%204%20.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/5ukkudwy_4.png'
    },
    {
      id: 5,
      title: 'Theme 5',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/w4djc170_Theme%205.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/9bh5jjnf_5.png'
    },
    {
      id: 6,
      title: 'Theme 6',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/g2sj2m65_theme%206.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/9vonr43z_6.png'
    },
    {
      id: 7,
      title: 'Theme 7',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/2sncgdds_theme%207.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/73lilv7l_7.png'
    },
    {
      id: 8,
      title: 'Theme 8',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/726lj4d9_theme%208.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/8ontm0a3_8.png'
    }
  ];

  // JUNIOR Musicland için gerçek müzikler
  const juniorMusiclandTracks = [
    {
      id: 1,
      title: 'Theme 1',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/r6xwf4fx_Theme%201.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/rn4hl66d_1.png'
    },
    {
      id: 2,
      title: 'Theme 2',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ypzzvi5i_theme%202.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/68recr7x_2.png'
    },
    {
      id: 3,
      title: 'Theme 3',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/07v23187_theme%203%20.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ex1xgfa1_3.png'
    },
    {
      id: 4,
      title: 'Theme 4',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/kbi01h0d_theme%204%20.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/0skbimng_4.png'
    },
    {
      id: 5,
      title: 'Theme 5',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/fqeyspb4_theme%205.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/uj8it9vz_5.png'
    },
    {
      id: 6,
      title: 'Theme 6',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/c2eihyip_theme%206.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/22qudlvp_11.png'
    },
    {
      id: 7,
      title: 'Theme 7',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ttak76ty_theme%207.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/xvg3m6sd_13.png'
    },
    {
      id: 8,
      title: 'Theme 8',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/hj56hh9t_theme%208%20.mp3',
      thumbnail: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/cnuuucdz_15.png'
    }
  ];

  // SENIOR Musicland için gerçek müzikler
  const seniorMusiclandTracks = [
    {
      id: 1,
      title: 'Theme 1',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/9uqnvd3a_theme%201.mp3',
      thumbnail: 'https://via.placeholder.com/300x200/6B21A8/FFFFFF?text=SENIOR+Theme+1'
    },
    {
      id: 2,
      title: 'Theme 2',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ymbcni8l_theme%202%20.mp3',
      thumbnail: 'https://via.placeholder.com/300x200/6B21A8/FFFFFF?text=SENIOR+Theme+2'
    },
    {
      id: 3,
      title: 'Theme 3',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/k7dc3mmg_theme%203.mp3',
      thumbnail: 'https://via.placeholder.com/300x200/6B21A8/FFFFFF?text=SENIOR+Theme+3'
    },
    {
      id: 4,
      title: 'Theme 4',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/87azrhhk_theme%204.mp3',
      thumbnail: 'https://via.placeholder.com/300x200/6B21A8/FFFFFF?text=SENIOR+Theme+4'
    },
    {
      id: 5,
      title: 'Theme 5',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/tuf69tq4_theme%205%20.mp3',
      thumbnail: 'https://via.placeholder.com/300x200/6B21A8/FFFFFF?text=SENIOR+Theme+5'
    },
    {
      id: 6,
      title: 'Theme 6',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/u633wm8u_THEME%206.mp3',
      thumbnail: 'https://via.placeholder.com/300x200/6B21A8/FFFFFF?text=SENIOR+Theme+6'
    },
    {
      id: 7,
      title: 'Theme 7',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/8620pn8i_THEME%207.mp3',
      thumbnail: 'https://via.placeholder.com/300x200/6B21A8/FFFFFF?text=SENIOR+Theme+7'
    },
    {
      id: 8,
      title: 'Theme 8',
      audioUrl: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/y64ptt3d_theme%208%20.mp3',
      thumbnail: 'https://via.placeholder.com/300x200/6B21A8/FFFFFF?text=SENIOR+Theme+8'
    }
  ];

  const currentColor = sectionColors[sectionId] || '#000';
  const itemCount = contentCounts[sectionId] || 0;

  // Placeholder içerikler oluştur
  const generateItems = () => {
    // BASIC Musicland için gerçek müzikler kullan
    if (levelId === 'basic' && sectionId === 'musicland') {
      return basicMusiclandTracks;
    }
    
    // JUNIOR Musicland için gerçek müzikler kullan
    if (levelId === 'junior' && sectionId === 'musicland') {
      return juniorMusiclandTracks;
    }
    
    // SENIOR Musicland için gerçek müzikler kullan
    if (levelId === 'senior' && sectionId === 'musicland') {
      return seniorMusiclandTracks;
    }
    
    // Diğer seviye ve bölümler için placeholder
    const items = [];
    for (let i = 1; i <= itemCount; i++) {
      items.push({
        id: i,
        title: `${sectionTitles[sectionId]} ${i}`,
        thumbnail: `https://via.placeholder.com/300x200/${currentColor.replace('#', '')}/FFFFFF?text=${sectionTitles[sectionId]}+${i}`,
        videoUrl: '', // Video URL'leri sonra eklenecek
        audioUrl: ''  // Müzik URL'leri sonra eklenecek
      });
    }
    return items;
  };

  const items = sectionId === 'library' ? [] : generateItems();

  const handleItemClick = (item) => {
    if (sectionId === 'musicland') {
      // Eğer aynı müzik çalıyorsa, durdur
      if (currentTrack && currentTrack.id === item.id && isPlaying) {
        stopMusic();
        return;
      }
      
      // Müzik çal
      if (item.audioUrl) {
        // Önceki müziği durdur
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }

        // Yeni müzik oluştur ve çal
        const audio = new Audio(item.audioUrl);
        audioRef.current = audio;
        setCurrentTrack(item);
        setIsPlaying(true);

        audio.play();

        // Müzik bittiğinde
        audio.onended = () => {
          setIsPlaying(false);
          setCurrentTrack(null);
        };
      }
    } else {
      // Video aç
      setSelectedVideo(item);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTrack(null);
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
                  className="group relative aspect-[3/2] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer bg-cover bg-center"
                  style={{
                    background: `linear-gradient(135deg, ${currentColor}20 0%, ${currentColor}10 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${currentColor}60`,
                    boxShadow: `0 4px 16px 0 ${currentColor}20`,
                    backgroundImage: sectionId === 'musicland' ? `url(${item.thumbnail})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Thumbnail - sadece Musicland dışında göster */}
                  {sectionId !== 'musicland' && (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="267"
                      className="w-full h-full object-cover opacity-60"
                      style={{ 
                        imageRendering: 'auto',
                        willChange: 'transform'
                      }}
                    />
                  )}
                  
                  {/* Musicland için overlay */}
                  {sectionId === 'musicland' && (
                    <div className="absolute inset-0 bg-black/10" />
                  )}
                  
                  {/* Play/Stop Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${currentColor}90` }}
                    >
                      {/* Eğer bu müzik çalıyorsa STOP göster, değilse PLAY */}
                      {currentTrack && currentTrack.id === item.id && isPlaying ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <rect x="6" y="6" width="12" height="12" />
                        </svg>
                      ) : (
                        <Play size={28} fill="white" color="white" />
                      )}
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

      {/* Music Player Bar - Fixed Bottom */}
      {currentTrack && sectionId === 'musicland' && (
        <div 
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-900 to-purple-700 text-white shadow-2xl z-[9998]"
          style={{
            backdropFilter: 'blur(10px)',
            borderTop: '2px solid rgba(255,255,255,0.1)'
          }}
        >
          <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center gap-4">
            {/* Now Playing Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-purple-200 mb-1">Şu an çalıyor</p>
              <p className="text-[15px] font-semibold truncate">{currentTrack.title}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {/* Stop Button - Sadece çalarken göster */}
              <button
                onClick={stopMusic}
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                title="Durdur"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <rect x="6" y="6" width="12" height="12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer data={siteData.footer} />
    </div>
  );
};

export default DigitalContentDetailPage;
