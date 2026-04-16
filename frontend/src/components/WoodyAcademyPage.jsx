import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const WoodyAcademyPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />

      {/* Hero Section - Full Width Image */}
      <section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden mt-[72px]">
        <div className="absolute inset-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/qyl8gvvu_Little%20girl%20at%20home%20holding%20a%20certificate%20mock-up.png" 
            alt="Woody Academy Graduate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6">
          <h1 
            className="text-[50px] md:text-[70px] lg:text-[90px] font-black tracking-[0.1em] text-center leading-none mb-4"
            style={{ 
              fontFamily: "'Magic English', 'Fredoka', cursive", 
              textShadow: '0 4px 30px rgba(0,0,0,0.6)' 
            }}
          >
            WOODY ACADEMY
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/95 tracking-wide max-w-[700px] text-center leading-relaxed">
            Mezuniyet Sonrası Devam Programı
          </p>
        </div>

        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60L0 40C360 10 720 10 1080 40C1260 52 1350 57 1440 60L1440 60L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 text-[13px] tracking-wide font-medium"
        >
          <ChevronLeft size={18} />
          <span>{t.preschoolPage?.back || 'GERİ'}</span>
        </button>
      </div>

      {/* Section 1: Image Left (Student) | Text Right (Desktop) */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-16 lg:gap-20">
            
            {/* Image Block - 50% */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-[400px] md:h-[500px] lg:h-[650px]">
                <img 
                  src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/dbzvnesg_Little%20girl%20at%20home%20holding%20a%20certificate%20mock-up.png"
                  alt="Woody Academy Öğrenci"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block - 50% */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] mb-6 leading-tight">
                WOODY ACADEMY – MEZUNİYET SONRASI DEVAM PROGRAMI
              </h2>
              <div className="space-y-5">
                <p className="text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-relaxed">
                  Woody Preschool İngilizce sisteminde öğrenciler, Basic, Junior ve Senior serilerini tamamladıktan sonra mezun olur.
                </p>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-relaxed">
                  Ancak dil gelişimi burada bitmez. <strong>En kritik aşama tam bu noktada başlar.</strong>
                </p>

                {/* 1. Sınıfa Geçişte */}
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#0B1F3A] mt-8 mb-4">
                  1. Sınıfa Geçişte En Doğru Hamle
                </h3>
                <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
                  Öğrenciler için mezuniyet sonrası yaz dönemi, İngilizceyi ileri seviyeye taşımak için en uygun zamandır.
                </p>
                <p className="text-[15px] md:text-[16px] text-gray-700 mb-3 font-medium">Bu süreçte öğrenciler:</p>
                <ul className="space-y-2 mb-5">
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#FFB800] mr-3 mt-1 flex-shrink-0">•</span>
                    <span>Okula başlamadan önce</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#FFB800] mr-3 mt-1 flex-shrink-0">•</span>
                    <span>Temel altyapılarını kaybetmeden</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#FFB800] mr-3 mt-1 flex-shrink-0">•</span>
                    <span>İngilizceyi aktif şekilde kullanmaya devam eder</span>
                  </li>
                </ul>
                <div className="bg-[#FFF9E6] border-l-4 border-[#FFB800] p-4 my-4">
                  <p className="text-[15px] md:text-[16px] text-gray-800 italic">
                    Bu dönem doğru değerlendirilmezse, öğrenilen bilgiler hızla unutulur.
                  </p>
                </div>

                {/* Woody Academy ile Uzaktan Eğitim */}
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#0B1F3A] mt-8 mb-4">
                  Woody Academy ile Uzaktan Eğitim
                </h3>
                <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
                  Woody Academy, mezun öğrenciler için tasarlanmış uzaktan eğitim ve gelişim sistemidir.
                </p>
                <p className="text-[15px] md:text-[16px] text-gray-700 mb-3 font-medium">Öğrenciler:</p>
                <ul className="space-y-2 mb-5">
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#3498DB] mr-3 mt-1 flex-shrink-0">→</span>
                    <span>Dijital içerikler ile öğrenmeye devam eder</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#3498DB] mr-3 mt-1 flex-shrink-0">→</span>
                    <span>Düzenli tekrar ile bilgilerini pekiştirir</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#3498DB] mr-3 mt-1 flex-shrink-0">→</span>
                    <span>İngilizceyi aktif kullanmaya başlar</span>
                  </li>
                </ul>

                {/* Okur-Yazarlık */}
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#0B1F3A] mt-8 mb-4">
                  Okur-Yazarlık Geçiş Süreci
                </h3>
                <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed mb-4">
                  Bu aşamada hedef, çocuğu konuşma seviyesinden okuma ve yazma seviyesine taşımaktır.
                </p>
                <p className="text-[15px] md:text-[16px] text-gray-700 mb-3 font-medium">Öğrenciler:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#9B59B6] mr-3 mt-1 flex-shrink-0">✦</span>
                    <span>Kelime tanır</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#9B59B6] mr-3 mt-1 flex-shrink-0">✦</span>
                    <span>Basit okuma yapar</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#9B59B6] mr-3 mt-1 flex-shrink-0">✦</span>
                    <span>Yazmaya başlar</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#9B59B6] mr-3 mt-1 flex-shrink-0">✦</span>
                    <span>Cümle kurar</span>
                  </li>
                </ul>

                {/* Neden Kritik */}
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#0B1F3A] mt-8 mb-4">
                  Neden Bu Süreç Kritik?
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#E74C3C] mr-3 mt-1 flex-shrink-0 font-bold">★</span>
                    <span className="font-medium">İngilizce unutulmaz, gelişir</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#E74C3C] mr-3 mt-1 flex-shrink-0 font-bold">★</span>
                    <span className="font-medium">1. sınıfa hazır başlanır</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#E74C3C] mr-3 mt-1 flex-shrink-0 font-bold">★</span>
                    <span className="font-medium">Dil bilgisi yerine kullanım becerisi gelişir</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#E74C3C] mr-3 mt-1 flex-shrink-0 font-bold">★</span>
                    <span className="font-medium">Öğrenci özgüveni artar</span>
                  </li>
                </ul>

                {/* Sonuç */}
                <div className="bg-[#F0F9FF] border-l-4 border-[#3498DB] p-5 mt-6">
                  <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
                    <strong>Sonuç:</strong> Woody Academy, mezuniyet sonrası süreci yapılandırır, yaz dönemini avantaja çevirir ve öğrenciyi 1. sınıfa güçlü şekilde hazırlar. Bu sadece bir kurs değil, çocuğun İngilizce yolculuğunda kritik bir geçiş programıdır.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Text Left | Image Right (Teacher Program - Desktop) */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-12 md:gap-16 lg:gap-20">
            
            {/* Image Block - 50% */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-[400px] md:h-[500px] lg:h-[650px]">
                <img 
                  src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/voarnm0e_freepik_ultra-hyperrealistic-scene-of-a-25yearold-european-female-teacher-standing-in-front-of-a-historic-cambridgestyle-university-building-elegant-stone-architecture-clearly-visible.-camera-per_0001%20%281%29.png"
                  alt="Woody Academy Öğretmen Programı"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block - 50% */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-[#0B1F3A] mb-6 leading-tight">
                Öğretmen Gelişim Programı
              </h2>
              
              <div className="space-y-5">
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#0B1F3A] mb-4">
                  Sertifika Süreci
                </h3>
                <p className="text-[15px] md:text-[16px] lg:text-[17px] text-gray-700 leading-relaxed">
                  Eğitim programını tamamlayan öğretmenler:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#2ECC71] mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Cambridge TKT sınavına katılabilir</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#2ECC71] mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>Başarılı olduklarında uluslararası geçerliliğe sahip sertifikalarını alabilir</span>
                  </li>
                </ul>
                <div className="bg-[#F0FFF4] border-l-4 border-[#2ECC71] p-5 my-5">
                  <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
                    Bu sertifika, öğretmenin mesleki yeterliliğini uluslararası düzeyde belgeleyen önemli bir kazanımdır.
                  </p>
                </div>

                <h3 className="text-[20px] md:text-[24px] font-bold text-[#0B1F3A] mt-8 mb-4">
                  Sistemin Sağladığı Avantaj
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#3498DB] mr-3 mt-1 flex-shrink-0">→</span>
                    <span>Tüm öğretmenler otomatik olarak sisteme dahil edilir</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#3498DB] mr-3 mt-1 flex-shrink-0">→</span>
                    <span>Ek maliyet olmadan profesyonel gelişim sağlanır</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#3498DB] mr-3 mt-1 flex-shrink-0">→</span>
                    <span>Eğitim kalitesi kurum genelinde standart hale gelir</span>
                  </li>
                  <li className="text-[15px] md:text-[16px] text-gray-700 flex items-start">
                    <span className="text-[#3498DB] mr-3 mt-1 flex-shrink-0">→</span>
                    <span>Uluslararası geçerliliğe sahip bir gelişim süreci sunulur</span>
                  </li>
                </ul>

                {/* Sonuç */}
                <div className="bg-[#FFF9E6] border-l-4 border-[#FFB800] p-5 mt-6">
                  <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
                    <strong>Sonuç:</strong> Woody Academy öğretmen programı, kurum içindeki tüm öğretmenleri sistemli bir gelişim sürecine dahil eder ve bu süreci uluslararası geçerliliğe sahip Cambridge TKT sertifikası ile destekler.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default WoodyAcademyPage;
