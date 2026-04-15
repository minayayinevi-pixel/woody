import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const PreschoolPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [showLevelVideoModal, setShowLevelVideoModal] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [showLevelVideo, setShowLevelVideo] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);
  const [currentVideoType, setCurrentVideoType] = useState(null); // 'teacher' veya 'student'
  const p = t.preschoolPage;

  // Video URL'leri
  const levelVideos = {
    'Basic Level': {
      student: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3lhuchbm_Basic%20o%CC%88g%CC%86renci.mp4',
      teacher: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/a8v04k8o_Basic%20teachet.mp4'
    },
    'Junior Level': {
      student: null,
      teacher: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/icoq32rz_jun%C4%B1or%20ogretmen.mp4'
    },
    'Senior Level': {
      student: null,
      teacher: null
    }
  };

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
          <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/22305642-e101-4a60-a871-45a6a6d12d44/ember_stills_sdr_0154933.tiff-0.jpg" alt="Woody Preschool" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-[60px] md:text-[90px] lg:text-[120px] font-black tracking-[0.05em] text-center mb-6 leading-none" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 4px 30px rgba(0,0,0,0.5)', letterSpacing: '0.1em' }}>
            PRESCHOOL
          </h1>
          <button onClick={() => { setActiveVideo('hero'); setShowVideo(true); }} className="group w-[70px] h-[70px] rounded-full border-2 border-white/70 flex items-center justify-center transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer">
            <Play size={26} className="text-white/80 group-hover:text-white ml-1" fill="white" fillOpacity={0.8} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            {/* Metallic glass stroke with gradient and glow */}
            <defs>
              <linearGradient id="metalGradientPreschool" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#a8b3c1', stopOpacity: 0.9 }} />
                <stop offset="25%" style={{ stopColor: '#e8eaed', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: '#c5cdd6', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#9ba5b0', stopOpacity: 0.9 }} />
              </linearGradient>
              <filter id="glowPreschool">
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
              stroke="url(#metalGradientPreschool)" 
              strokeWidth="12" 
              fill="none" 
              filter="url(#glowPreschool)"
              style={{ opacity: 0.95 }}
            />
            {/* White fill */}
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

      {/* New Text Section - Between Video and Banner */}
      <section className="w-full bg-white py-6">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <p className="text-[16px] md:text-[18px] text-gray-700 font-medium">
            Okul Serisi iki ayrı setten oluşur. İçerikleri video anlatımlarıyla keşfedin.
          </p>
        </div>
      </section>

      {/* Arrows removed */}

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
            <p className="text-[13px] md:text-[14px] text-gray-700 leading-[1.7]">
              <span className="text-red-500 font-bold text-[18px] mr-1.5">!</span>
              Woody Preschool sisteminin uygulanabilmesi için kurum mevcudunun en az 30 öğrenci olması gerekmektedir. Öğretmen seti ayrıca ücretli olarak satılmaz. Anlaşma sağlanan kurumlara, öğrenci setleri ile birlikte ücretsiz olarak sunulur ve her sene yenilenir.
            </p>
          </div>
        </div>
      </section>

      {/* Pixar-style Digital Content Banner */}
      <section className="w-full py-16 md:py-20 bg-white">
        <a 
          href="/digital-content"
          onClick={(e) => {
            e.preventDefault();
            navigate('/digital-content');
          }}
          className="block w-full cursor-pointer no-underline group"
          style={{ textDecoration: 'none' }}
        >
          <div 
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
            style={{
              backgroundImage: 'url(https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/y0tliapf_freepik_ultra-high-detail-cinemat_2769441228.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Left-top aligned translucent white box - SMALL and positioned at TOP to avoid covering characters */}
            <div className="absolute left-8 md:left-12 lg:left-16 top-8 md:top-12 lg:top-16 max-w-[380px] md:max-w-[420px]">
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-xl px-6 md:px-7 py-5 md:py-6"
                style={{ boxShadow: 'none', border: 'none' }}
              >
                <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-3 leading-tight">
                  Woody Dijital İçerikler
                </h2>
                <p className="text-[13px] md:text-[14px] text-gray-700 leading-relaxed mb-4">
                  Movieland, Storyland ve Musicland ile öğrenme süreci video, hikâye ve müzikle zenginleşir.
                </p>
                {/* CTA Button */}
                <div className="inline-block bg-gray-900 text-white px-5 py-2.5 rounded-lg text-[13px] md:text-[14px] font-medium">
                  Dijital dünyaya gitmek için tıklayın
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Level Cards Section */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <h2 className="text-center text-[28px] md:text-[36px] font-light text-gray-900 mb-12 tracking-wide">Serilerin İçeriklerini Video Anlatımlarıyla Keşfedin</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {levels.map((level, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.03]" style={{ background: level.image ? '#f5f5f5' : level.bgGradient }}>
                  {level.image ? (
                    <>
                      <img src={level.image} alt={level.name} className="w-full h-full object-cover" />
                      
                      {/* Video İzle Butonu - Hover'da görünür */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLevel(level);
                            setShowLevelVideoModal(true);
                          }}
                          className="flex items-center gap-2 px-4 py-2.5 bg-white text-gray-900 rounded-lg font-medium text-[13px] md:text-[14px] hover:bg-gray-100 transition-colors shadow-lg"
                        >
                          <Play size={18} fill="currentColor" />
                          Video İzle
                        </button>
                      </div>
                    </>
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
                  <h4 className="text-[16px] md:text-[18px] font-semibold text-gray-800 relative inline-block">
                    {level.name}
                    {/* Hover underline with level color */}
                    <span 
                      className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ backgroundColor: level.color }}
                    />
                  </h4>
                  <p className="text-[13px] text-gray-500 mt-1 mb-3">{level.description}</p>
                  
                  {/* Fiyat Teklifi Al Butonu */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const message = `Merhaba, ${level.name} hakkında fiyat teklifi almak istiyorum.`;
                      const whatsappUrl = `https://wa.me/905335157303?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-[13px] md:text-[14px] font-medium rounded-lg transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Fiyat Teklifi Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Feature Boxes Section - Premium White Design */}
      <section className="w-full py-20 md:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Level Assessment System */}
            <div 
              className="group cursor-pointer text-center"
              onClick={() => navigate('/level-finder')}
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-5 overflow-hidden rounded-2xl">
                  <img 
                    src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/onplu2u5_Seviye%20Bulucu%20sembolu%CC%88.png" 
                    alt="Level Assessment System" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[19px] font-semibold text-gray-900 mb-3 tracking-tight">Level Assessment System</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed px-3">{p.finder.desc}</p>
              </div>
            </div>

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
              onClick={() => navigate('/store')}
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

      {/* Level Video Modal */}
      {showLevelVideoModal && selectedLevel && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-[500px] w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowLevelVideoModal(false);
                setSelectedLevel(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal İçeriği */}
            {selectedLevel.name === 'PRO Level' ? (
              // PRO için özel mesaj
              <div className="text-center py-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <Play size={32} className="text-red-600" />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-3">
                  PRO Level
                </h3>
                <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
                  PRO seviyesi için Woody Academy'de eğitim verilir.
                </p>
              </div>
            ) : (
              // Basic, Junior, Senior için seçim ekranı
              <>
                <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 mb-2 text-center">
                  {selectedLevel.name}
                </h3>
                <p className="text-[14px] text-gray-500 text-center mb-6">
                  Hangi seti izlemek istersiniz?
                </p>

                <div className="space-y-3">
                  {/* Öğretmen Kitabı */}
                  <button
                    onClick={() => {
                      const videoUrl = levelVideos[selectedLevel.name]?.teacher;
                      if (videoUrl) {
                        setCurrentVideoUrl(videoUrl);
                        setCurrentVideoType('teacher');
                        setShowLevelVideoModal(false);
                        setShowLevelVideo(true);
                      } else {
                        alert('Öğretmen Kitabı videosu yakında eklenecek');
                      }
                    }}
                    className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-300 group border-2 border-blue-200 hover:border-blue-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Play size={20} fill="white" color="white" />
                      </div>
                      <div className="text-left">
                        <p className="text-[15px] font-semibold text-gray-900">Öğretmen Kitabı</p>
                        <p className="text-[12px] text-gray-600">Öğretmen kitabı içeriğini izle</p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Öğrenci Kitabı */}
                  <button
                    onClick={() => {
                      const videoUrl = levelVideos[selectedLevel.name]?.student;
                      if (videoUrl) {
                        setCurrentVideoUrl(videoUrl);
                        setCurrentVideoType('student');
                        setShowLevelVideoModal(false);
                        setShowLevelVideo(true);
                      } else {
                        alert('Öğrenci Kitabı videosu yakında eklenecek');
                      }
                    }}
                    className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 rounded-xl transition-all duration-300 group border-2 border-green-200 hover:border-green-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Play size={20} fill="white" color="white" />
                      </div>
                      <div className="text-left">
                        <p className="text-[15px] font-semibold text-gray-900">Öğrenci Kitabı</p>
                        <p className="text-[12px] text-gray-600">Öğrenci kitabı içeriğini izle</p>
                      </div>
                    </div>
                    <ChevronRight size={20} className="text-green-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Dikey Video Player Modal */}
      {showLevelVideo && currentVideoUrl && (
        <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center p-0">
          {/* Close Button */}
          <button
            onClick={() => {
              setShowLevelVideo(false);
              setCurrentVideoUrl(null);
              setCurrentVideoType(null);
            }}
            className="absolute top-4 right-4 z-[10001] text-white/80 hover:text-white transition-colors bg-black/50 rounded-full p-2"
          >
            <X size={32} />
          </button>

          {/* Dikey Video - Mobil ve Desktop için optimize */}
          <div className="w-full h-full flex items-center justify-center">
            <video
              src={currentVideoUrl}
              controls
              autoPlay
              className="max-h-full max-w-full"
              style={{
                aspectRatio: '9/16', // Dikey video aspect ratio
                width: 'auto',
                height: '100%'
              }}
            >
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          </div>
        </div>
      )}

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
