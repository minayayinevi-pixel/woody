import React from 'react';
import { Play, X, ImageIcon } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const blogBlocks = [
  {
    id: 1,
    iconLeft: true,
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
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
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
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
    icon: (
      <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
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
        <div className="absolute inset-0">
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

      {/* Main Blog Title - Centered */}
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 leading-tight text-center">
            Okul Öncesi İngilizce Eğitimi Nasıl Olmalı? (Etkili Bir Sistem Nasıl Kurulur?)
          </h2>
        </div>
      </section>

      {/* Top Section - Image Left, Text Right */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left: Image Placeholder */}
            <div className="w-full md:w-1/2">
              <div className="w-full aspect-[4/3] rounded-2xl bg-[#F0EDE6] flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <ImageIcon size={48} strokeWidth={1} className="mx-auto mb-3 text-gray-300" />
                  <p className="text-[13px]">Görsel eklenecek</p>
                </div>
              </div>
            </div>

            {/* Right: Title & Description */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[28px] md:text-[36px] font-bold text-[#0B1F3A] leading-tight mb-6">
                Okul Öncesi İngilizce Eğitimi Nasıl Olmalı?
              </h2>
              <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
                Okul öncesi İngilizce eğitimi, oyun, hikâye ve şarkı temelli bir sistemle daha etkili hale gelir. Plansız ilerleyen dersler kısa sürede etkisini kaybeder; bu nedenle süreç baştan sona yapılandırılmış olmalıdır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zig-zag Layout Section - Alternating Icon/Text Blocks */}
      <section className="w-full bg-white py-8 md:py-0">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {blogBlocks.map((block, index) => (
            <div 
              key={block.id}
              className="py-12 md:py-20"
              style={{ 
                borderBottom: index < blogBlocks.length - 1 ? '1px solid #f0f0f0' : 'none' 
              }}
            >
              <div className={`flex flex-col ${block.iconLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12`}>
                
                {/* Icon Circle */}
                <div className="flex-shrink-0 order-1 md:order-none">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#0B1F3A] flex items-center justify-center">
                    <div className="text-white scale-110">
                      {block.icon}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left order-2 md:order-none">
                  <h3 className="text-[20px] md:text-[24px] font-bold text-[#0B1F3A] mb-3 leading-tight">
                    {block.title}
                  </h3>
                  
                  {block.desc && (
                    <p className="text-[15px] text-gray-600 mb-3 leading-relaxed">
                      {block.desc}
                    </p>
                  )}

                  <ul className="space-y-2">
                    {block.list.map((item, idx) => (
                      <li key={idx} className="text-[15px] text-gray-700 flex items-start justify-center md:justify-start">
                        <span className="text-[#FFB800] mr-2 mt-1">•</span>
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

      {/* FAQ Section - Full Width */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="bg-[#F7F7F7] rounded-xl p-8 shadow-sm">
            <h3 className="text-[24px] md:text-[28px] font-bold text-[#0B1F3A] mb-8 text-center">
              Sık Sorulan Sorular
            </h3>

            <div className="space-y-6">
              {faqItems.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-300 last:border-0 pb-4 last:pb-0">
                  <h4 className="text-[16px] md:text-[18px] font-semibold text-[#0B1F3A] mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
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
