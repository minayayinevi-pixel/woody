import React from 'react';
import { Play, X, BarChart3, Calendar, Blocks, PlayCircle, Hand, Zap, Monitor, CheckCircle } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const blogBlocks = [
  {
    id: 1,
    iconLeft: true,
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    title: "Okul Öncesi İngilizce Eğitiminde Sistem Neden Önemlidir?",
    desc: "Erken yaşta dil öğrenimi tekrar ve maruziyet üzerine kuruludur.",
    list: [
      "Öğrenilenler unutulur",
      "Dersler kopuk ilerler",
      "Çocuk dili kullanamaz"
    ]
  },
  {
    id: 2,
    iconLeft: false,
    icon: <Calendar size={28} strokeWidth={1.5} />,
    title: "Anaokulu İngilizce Programı Nasıl Yapılandırılmalı?",
    desc: null,
    list: [
      "Günlük ders akışı",
      "Haftalık kazanım planı",
      "Aylık ilerleme sistemi"
    ]
  },
  {
    id: 3,
    iconLeft: true,
    icon: <Blocks size={28} strokeWidth={1.5} />,
    title: "Oyun Temelli İngilizce Eğitimi Neden Etkilidir?",
    desc: null,
    list: [
      "Aktif katılım oluşur",
      "Dikkat süresi artar",
      "Öğrenme doğal hale gelir"
    ]
  },
  {
    id: 4,
    iconLeft: false,
    icon: <PlayCircle size={28} strokeWidth={1.5} />,
    title: "Hikâye, Şarkı ve Video ile İngilizce Öğrenme",
    desc: null,
    list: [
      "İngilizce hikâyeler",
      "İngilizce şarkılar",
      "İngilizce videolar"
    ]
  },
  {
    id: 5,
    iconLeft: true,
    icon: <Hand size={28} strokeWidth={1.5} />,
    title: "Fiziksel Materyallerin Öğrenmeye Etkisi",
    desc: null,
    list: [
      "Oyun materyalleri",
      "Etkinlik sayfaları",
      "El becerisi çalışmaları"
    ]
  },
  {
    id: 6,
    iconLeft: false,
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: "Ders Akışı Nasıl Olmalı?",
    desc: null,
    list: [
      "Isınma",
      "Konu sunumu",
      "Oyun",
      "Etkinlik",
      "Pekiştirme"
    ]
  },
  {
    id: 7,
    iconLeft: true,
    icon: <Monitor size={28} strokeWidth={1.5} />,
    title: "Dijital İçeriklerle İngilizce Öğrenme",
    desc: null,
    list: [
      "Hikâyeler",
      "Şarkılar",
      "Videolar"
    ]
  },
  {
    id: 8,
    iconLeft: false,
    icon: <CheckCircle size={28} strokeWidth={1.5} />,
    title: "Sonuç: Etkili Bir İngilizce Eğitim Sistemi",
    desc: null,
    list: [
      "Süreci netleştirir",
      "Öğretmeni yönlendirir",
      "Öğrenmeyi kalıcı hale getirir"
    ]
  }
];

const faqItems = [
  {
    q: "Okul öncesi İngilizce eğitimi gerekli mi?",
    a: "Evet. Erken yaşta başlayan eğitim büyük avantaj sağlar."
  },
  {
    q: "4 yaş çocuk İngilizce öğrenebilir mi?",
    a: "Evet. Bu dönem dil öğrenimi için en uygun dönemdir."
  },
  {
    q: "Çocuklar İngilizceyi nasıl daha kolay öğrenir?",
    a: "Oyun, tekrar ve çoklu maruziyet ile."
  },
  {
    q: "Oyunla İngilizce öğrenme işe yarar mı?",
    a: "Evet. En etkili yöntemlerden biridir."
  },
  {
    q: "İngilizce eğitim seti seçerken nelere dikkat edilmeli?",
    a: "Sistemli yapı, tekrar ve çoklu içerik bulunmalıdır."
  }
];

const BlogPage = () => {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />

      {/* Hero Video Section */}
      <section className="relative w-full h-[45vh] min-h-[350px] overflow-hidden mt-[72px]">
        <div className="absolute inset-0 hero-video">
          <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/22305642-e101-4a60-a871-45a6a6d12d44/ember_stills_sdr_0154933.tiff-0.jpg" alt="Blog" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-[40px] md:text-[60px] lg:text-[76px] font-bold tracking-[0.35em] text-center mb-6" style={{ fontFamily: "'Magic English', 'Fredoka', cursive", textShadow: '0 3px 20px rgba(0,0,0,0.4)' }}>
            BLOG
          </h1>
          <button onClick={() => setShowVideo(true)} className="group w-[65px] h-[65px] rounded-full border-2 border-white/70 flex items-center justify-center transition-all duration-300 hover:border-white hover:scale-110 bg-transparent cursor-pointer">
            <Play size={24} className="text-white/80 group-hover:text-white ml-1" fill="white" fillOpacity={0.8} />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60L0 30C360 0 720 0 1080 30C1260 45 1350 52.5 1440 60L1440 60L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Hero Content Section - Grid Based */}
      <section className="w-full bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="mx-auto px-6 md:px-20 lg:px-20" style={{ maxWidth: '1280px' }}>
          <div className="text-center">
            <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] leading-tight mb-5">
              Okul Öncesi İngilizce Eğitimi Nasıl Olmalı?
            </h1>
            <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-[800px] mx-auto">
              Okul öncesi İngilizce eğitimi, oyun, hikâye ve şarkı temelli bir sistemle daha etkili hale gelir. Plansız ilerleyen dersler kısa sürede etkisini kaybeder; bu nedenle süreç baştan sona yapılandırılmış olmalıdır.
            </p>
          </div>
        </div>
      </section>

      {/* Zig-zag Content Blocks - 12 Column Grid */}
      <section className="w-full bg-white">
        <div className="mx-auto px-6 md:px-20 lg:px-20" style={{ maxWidth: '1280px' }}>
          {blogBlocks.map((block, index) => (
            <div 
              key={block.id}
              className="py-10 md:py-16"
              style={{ 
                marginBottom: index < blogBlocks.length - 1 ? '40px' : '0'
              }}
            >
              {/* DESKTOP: 12 Column Grid Zig-zag | MOBILE: Centered Single Column */}
              <div className={`
                flex flex-col items-center text-center
                md:grid md:grid-cols-12 md:gap-6 md:items-start md:text-left
                ${!block.iconLeft && 'md:flex-row-reverse'}
              `}>
                
                {/* Icon Column - Mobile: Always top center, Desktop: 2 cols left/right */}
                <div className={`
                  mb-5 md:mb-0
                  md:col-span-2 
                  flex 
                  ${block.iconLeft ? 'md:justify-start' : 'md:justify-end'} 
                  ${!block.iconLeft && 'md:order-2'}
                `}>
                  <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full bg-[#0B1F3A] flex items-center justify-center flex-shrink-0">
                    <div className="text-white scale-90 md:scale-100">
                      {block.icon}
                    </div>
                  </div>
                </div>

                {/* Spacer - 1 col (hidden on mobile) */}
                <div className={`hidden md:block md:col-span-1 ${!block.iconLeft && 'md:order-1'}`}></div>

                {/* Text Content - Mobile: centered, Desktop: 6 cols */}
                <div className={`w-full md:col-span-6 ${!block.iconLeft && 'md:order-0'}`}>
                  <h2 className="text-[20px] md:text-[26px] font-bold text-[#0B1F3A] leading-tight mb-3 md:mb-4">
                    {block.title}
                  </h2>
                  
                  {block.desc && (
                    <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-4 md:mb-5">
                      {block.desc}
                    </p>
                  )}

                  <ul className="space-y-2 md:space-y-3 inline-block text-left">
                    {block.list.map((item, idx) => (
                      <li key={idx} className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                        <span className="text-[#FFB800] mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section - Grid Based, No Cards */}
      <section className="w-full bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="mx-auto px-6 md:px-20 lg:px-20" style={{ maxWidth: '1280px' }}>
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#0B1F3A] mb-12 text-center">
            Sık Sorulan Sorular
          </h2>

          <div className="max-w-[900px] mx-auto space-y-8">
            {faqItems.map((faq, idx) => (
              <div key={idx} style={{ paddingBottom: '24px', borderBottom: idx < faqItems.length - 1 ? '1px solid #e5e5e5' : 'none' }}>
                <h3 className="text-[17px] md:text-[19px] font-semibold text-[#0B1F3A] mb-3">
                  {faq.q}
                </h3>
                <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowVideo(false)}>
          <div className="relative w-[90%] max-w-[1000px] bg-black rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-all duration-300">
              <X size={20} className="text-white" />
            </button>
            <div className="relative pt-[56.25%]">
              <video className="absolute top-0 left-0 w-full h-full" controls autoPlay>
                <source src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/ct6m2ted_woody%20and%20robo%20%283%29.mp4#t=16" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}

      <Footer data={siteData.footer} />
    </div>
  );
};

export default BlogPage;
