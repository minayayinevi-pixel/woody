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
    a: "Evet. Okul öncesi dönemde verilen İngilizce eğitimi, çocuğun dili doğal şekilde edinmesini sağlar ve ilerleyen yıllarda büyük avantaj oluşturur."
  },
  {
    q: "3–6 yaş İngilizce öğrenmek için uygun mu?",
    a: "Evet. 3–6 yaş arası dönem, dil öğrenimi için en kritik ve en hızlı gelişim dönemidir."
  },
  {
    q: "Çocuklar İngilizceyi en hızlı nasıl öğrenir?",
    a: "Çocuklar İngilizceyi oyun, tekrar ve sürekli maruziyet ile en hızlı şekilde öğrenir. Ezber değil, deneyim önemlidir."
  },
  {
    q: "Oyunla İngilizce öğrenme gerçekten etkili mi?",
    a: "Evet. Oyun temelli İngilizce eğitimi, çocukların dili kalıcı ve doğal şekilde öğrenmesini sağlar."
  },
  {
    q: "Okul öncesi İngilizce eğitim seti seçerken nelere dikkat edilmeli?",
    a: "Sistemli ilerleyen içerik, tekrar eden yapı, oyun ve etkinlik desteği, görsel ve işitsel materyaller, öğretmen kullanımına uygunluk."
  },
  {
    q: "En iyi okul öncesi İngilizce eğitim yöntemi nedir?",
    a: "En etkili yöntem, oyun temelli, çoklu materyalli ve sistemli öğrenme modelidir."
  },
  {
    q: "İngilizce eğitim setleri gerçekten işe yarar mı?",
    a: "Evet, ancak sadece kitap yeterli değildir. Oyun, etkinlik ve sistem içeren setler gerçek sonuç verir."
  },
  {
    q: "Anaokulu İngilizce programı nasıl olmalı?",
    a: "Haftalık planlı, oyun tabanlı, tekrar odaklı, konuşma ve dinleme ağırlıklı olmalıdır."
  },
  {
    q: "Evde İngilizce öğrenme mümkün mü?",
    a: "Evet. Doğru eğitim seti ve düzenli tekrar ile çocuklar evde de İngilizce öğrenebilir."
  },
  {
    q: "Çocuklar İngilizceyi neden unutur?",
    a: "Ezber odaklı sistemlerde öğrenilen bilgiler kalıcı olmaz. Oyun ve tekrar yoksa unutma kaçınılmazdır."
  }
];

const BlogPage = () => {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />

      {/* Woody Blog Logo Section */}
      <section className="relative w-full bg-white mt-[72px] py-12 md:py-16">
        <div className="max-w-[600px] mx-auto px-6 flex items-center justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/tj4edcjq_ChatGPT%20Image%2016%20Nis%202026%2013_38_05.png" 
            alt="Woody Blog" 
            className="w-full max-w-[450px] object-contain"
          />
        </div>
      </section>

      {/* Hero Content Section - Grid Based */}
      <section className="w-full bg-white" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
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
            Sık Sorulan Sorular (Okul Öncesi İngilizce Eğitimi)
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

          {/* Woody and Friends Sonuç Bölümü */}
          <div className="max-w-[900px] mx-auto mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-[22px] md:text-[26px] font-bold text-[#0B1F3A] mb-4 text-center">
              Woody and Friends
            </h3>
            <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-4 text-center">
              Woody and Friends, okul öncesi İngilizce eğitiminde oyun temelli, sistemli ve sürdürülebilir öğrenme modeli sunar.
            </p>
            <ul className="space-y-2 max-w-[600px] mx-auto">
              <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                <span className="text-[#FFB800] mr-2 mt-1 flex-shrink-0">•</span>
                <span>Oyun + kitap + etkinlik + tekrar sistemi</span>
              </li>
              <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                <span className="text-[#FFB800] mr-2 mt-1 flex-shrink-0">•</span>
                <span>Çocukların aktif katılımıyla öğrenme</span>
              </li>
              <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                <span className="text-[#FFB800] mr-2 mt-1 flex-shrink-0">•</span>
                <span>Kalıcı dil gelişimi</span>
              </li>
            </ul>
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
