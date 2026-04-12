import React from 'react';
import { Play, X, ImageIcon } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const blogEntries = [
  {
    id: 1,
    title: "Cambridge Okul Öncesi İngilizce Sistemi ile Başlayın",
    text: "Woody Preschool sistemi, çocukları 4 seviyeden oluşan yapısıyla Cambridge sınavlarına hazırlayan bütüncül bir İngilizce eğitim modelidir. Bu yapı; okul, öğretmen ve öğrenci için birlikte kurgulanmış bir sertifika sistemi sunar. Kurumlar uluslararası standartta eğitim verirken, öğrenciler süreç sonunda Cambridge okul öncesi İngilizce değerlendirme sürecine dahil olur. Tüm süreç, akademik altyapı ve öğretmen desteğiyle birlikte British Side iş birliğiyle yürütülür.",
    image: null
  },
  {
    id: 2,
    title: "Okul Öncesi İngilizce Eğitiminde Öğretmen Süreci Nasıl Yönetir?",
    text: "Okul öncesi İngilizce eğitiminde en büyük problem şudur: Öğretmen neyi, nasıl ve hangi sırayla öğreteceğini net göremez.\n\nPlansız ilerleyen bir sistemde:\n• Dersler kopuk olur\n• Tekrar yapılamaz\n• Öğrenme kalıcı olmaz\n\nBu nedenle güçlü bir okul öncesi İngilizce eğitim seti, aynı zamanda Cambridge okul öncesi İngilizce seti mantığında yapılandırılmalıdır. Öğretmeni yönlendirir.",
    image: null
  },
  {
    id: 3,
    title: "Tüm Süreç Önceden Planlanmıştır",
    text: "Profesyonel bir kreş İngilizce programı, öğretmenin tüm süreci net şekilde görmesini sağlar.\n\n• Günlük ders akışı hazırdır\n• Haftalık plan net şekilde belirlenmiştir\n• Aylık süreç bütüncül olarak sunulur\n\nÖğretmen ne öğreteceğini, nasıl öğreteceğini, hangi materyali kullanacağını düşünmez. Doğrudan uygular.",
    image: null
  },
  {
    id: 4,
    title: "Ders Akışı Sistemlidir",
    text: "Etkili bir anaokulu İngilizce programı, her dersi aynı sistemle ilerletir:\n\n• Isınma (warm up)\n• Oyun temelli öğretim\n• Etkinlik ve tekrar\n• Pekiştirme\n\nBu yapı, Cambridge okul öncesi İngilizce yaklaşımı ile uyumlu şekilde ilerler ve öğrenme rastgele değil, kontrollü olur.",
    image: null
  },
  {
    id: 5,
    title: "Fiziksel Materyaller ile Öğrenme Somutlaşır",
    text: "Güçlü bir anaokulu İngilizce materyalleri altyapısı, öğrenmeyi somutlaştırır.\n\n• 30 farklı fiziksel oyuncak\n• Worksheet çalışmaları\n• Stickerlar\n• Craft materyalleri\n\nÇocuk sadece dinlemez. Dokunur, hareket eder ve öğrenir. Bu yapı, Cambridge okul öncesi İngilizce seti yaklaşımına uygun olarak deneyim temelli öğrenmeyi destekler.",
    image: null
  },
  {
    id: 6,
    title: "Dijital İçerikler ile Süreç Güçlenir",
    text: "Modern bir preschool English program, öğrenmeyi dijital içeriklerle destekler:\n\n• Okul öncesi İngilizce videolar\n• Okul öncesi İngilizce şarkılar\n• Okul öncesi İngilizce hikâyeler\n\nBu içerikler sayesinde çocuklar İngilizceyi doğal süreçte duyar, tekrar eder ve kalıcı şekilde öğrenir.",
    image: null
  },
  {
    id: 7,
    title: "Karakterler ve İnteraktif Oyunlar",
    text: "Etkili bir okul öncesi İngilizce programı, karakter temelli ilerler.\n\n• 8 İngilizce konuşan karakter\n• İnteraktif oyunlar\n• İngilizce yönlendirmeler\n\nBu sayede çocuk, dili doğal süreçte edinir ve Cambridge okul öncesi İngilizce kazanımlarına uygun gelişim gösterir.",
    image: null
  },
  {
    id: 8,
    title: "Sonuç",
    text: "Doğru yapılandırılmış bir okul öncesi İngilizce eğitim seti, aynı zamanda Cambridge okul öncesi İngilizce seti standartlarına uygun olduğunda:\n\n• Öğretmeni yormaz\n• Süreci netleştirir\n• Öğrenmeyi standartlaştırır\n\nVe en önemlisi: Çocukları Cambridge sınavlarına hazırlayan sürdürülebilir ve uluslararası bir eğitim sistemi sunar.",
    image: null
  },
  {
    id: 9,
    title: "Yakında...",
    text: "Bu bölümün içeriği yakında eklenecektir.",
    image: null,
    empty: true
  },
  {
    id: 10,
    title: "Yakında...",
    text: "Bu bölümün içeriği yakında eklenecektir.",
    image: null,
    empty: true
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

      {/* Blog Entries */}
      <section className="w-full py-12 md:py-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12">
          {blogEntries.map((entry, idx) => {
            const isImageLeft = idx % 2 === 0;
            const textLines = entry.text.split('\n').filter(l => l.trim());

            return (
              <div
                key={entry.id}
                className={`mb-20 md:mb-28 ${entry.empty ? 'opacity-40' : ''}`}
              >
                {/* Thin separator */}
                {idx > 0 && (
                  <div className="w-full h-[1px] bg-gray-200 mb-16 md:mb-20" />
                )}

                <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-start`}>
                  {/* Image Side */}
                  <div className="w-full md:w-[45%] flex-shrink-0">
                    {entry.image ? (
                      <img
                        src={entry.image}
                        alt={entry.title}
                        className="w-full rounded-2xl object-cover"
                        style={{ maxHeight: '380px' }}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-[4/3] rounded-2xl bg-[#F0EDE6] flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <ImageIcon size={48} strokeWidth={1} className="mx-auto mb-3 text-gray-300" />
                          <p className="text-[13px]">Görsel eklenecek</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text Side */}
                  <div className="w-full md:w-[55%]">
                    {/* Entry number */}
                    <span className="text-[13px] font-semibold tracking-[0.2em] text-yellow-500 uppercase mb-3 block">
                      {entry.empty ? '—' : `0${entry.id}`}
                    </span>

                    {/* Title */}
                    <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-bold text-gray-900 leading-tight mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {entry.title}
                    </h2>

                    {/* Text content */}
                    <div className="space-y-4">
                      {textLines.map((line, i) => {
                        if (line.startsWith('•')) {
                          return (
                            <div key={i} className="flex items-start gap-3 ml-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2.5 flex-shrink-0" />
                              <span className="text-[15px] md:text-[16px] text-gray-600 leading-[1.7]">{line.replace('• ', '')}</span>
                            </div>
                          );
                        }
                        return (
                          <p key={i} className="text-[15px] md:text-[16px] text-gray-600 leading-[1.8]">
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer data={siteData.footer} />

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button onClick={() => setShowVideo(false)} className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-[110] bg-transparent border-none cursor-pointer"><X size={36} /></button>
          <div className="w-full max-w-[1000px] aspect-video">
            <iframe src="https://player.vimeo.com/video/911713522?autoplay=1" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Blog Video" className="rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
