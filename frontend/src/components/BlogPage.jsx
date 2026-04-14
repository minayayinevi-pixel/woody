import React from 'react';
import { Play, X, ImageIcon } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const blogCards = [
  {
    id: 1,
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

      {/* Grid Cards Section - 2 Columns */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {blogCards.map((card) => (
              <div 
                key={card.id}
                className="bg-[#F7F7F7] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Card Title */}
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0B1F3A] mb-4 leading-tight">
                  {card.title}
                </h3>

                {/* Card Description (if exists) */}
                {card.desc && (
                  <p className="text-[14px] text-gray-600 mb-4 leading-relaxed">
                    {card.desc}
                  </p>
                )}

                {/* Bullet List */}
                <ul className="space-y-2">
                  {card.list.map((item, idx) => (
                    <li key={idx} className="text-[14px] text-gray-700 flex items-start">
                      <span className="text-yellow-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
