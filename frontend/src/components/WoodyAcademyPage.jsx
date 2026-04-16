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

      {/* Hero Section - Woody Academy Logo */}
      <section className="relative w-full h-[70vh] min-h-[550px] overflow-hidden mt-[72px] bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/uqaprkim_6.png" 
            alt="Woody Academy" 
            className="w-[500px] md:w-[600px] lg:w-[700px] object-contain"
          />
        </div>
        
        {/* Curved Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 60L0 40C360 10 720 10 1080 40C1260 52 1350 57 1440 60L1440 60L0 60Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20 pt-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300 text-[13px] tracking-wide font-medium"
        >
          <ChevronLeft size={18} />
          <span>{t.preschoolPage?.back || 'GERİ'}</span>
        </button>
      </div>

      {/* Section 1: Student - Cambridge Certificate Program */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] mb-4 leading-tight">
              Öğrenci – Cambridge Sertifika Süreci
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3498DB] to-[#2ECC71] mx-auto"></div>
          </div>

          {/* 50/50 Layout */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Image Block */}
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/dbzvnesg_Little%20girl%20at%20home%20holding%20a%20certificate%20mock-up.png"
                  alt="Cambridge Sertifika"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block */}
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed">
                Woody Preschool sisteminde öğrenciler, Basic, Junior ve Senior serilerini tamamladıktan sonra <strong>Woody Academy programına dahil edilir.</strong>
              </p>
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed">
                Bu aşama, öğrencinin İngilizceyi ileri seviyeye taşıdığı ve <strong>uluslararası sertifika sürecine hazırlandığı kritik dönemdir.</strong>
              </p>

              <div className="pt-4">
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#0B1F3A] mb-4">
                  Cambridge Sertifika Yolculuğu
                </h3>
                <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed mb-4">
                  Woody Academy sürecini tamamlayan öğrenciler, Cambridge English sınavlarına girme hakkı elde eder.
                </p>
                <p className="text-[15px] md:text-[16px] text-gray-600 mb-3">Bu sınavlar:</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-[#F0F9FF] px-4 py-3 rounded-lg">
                    <span className="text-[#3498DB] text-lg">📻</span>
                    <span className="text-[15px] font-medium text-gray-700">Dinleme</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFF9E6] px-4 py-3 rounded-lg">
                    <span className="text-[#FFB800] text-lg">💬</span>
                    <span className="text-[15px] font-medium text-gray-700">Konuşma</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F0FFF4] px-4 py-3 rounded-lg">
                    <span className="text-[#2ECC71] text-lg">📖</span>
                    <span className="text-[15px] font-medium text-gray-700">Okuma</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#FFF5F5] px-4 py-3 rounded-lg">
                    <span className="text-[#E74C3C] text-lg">✍️</span>
                    <span className="text-[15px] font-medium text-gray-700">Yazma</span>
                  </div>
                </div>
                <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
                  becerilerini ölçer ve öğrencinin dil seviyesini uluslararası standartlara göre değerlendirir.
                </p>
              </div>
            </div>
          </div>

          {/* Content Continuation Below Image (if needed) */}
          <div className="mt-12 lg:mt-16 space-y-12">
            
            {/* Eğitim Modeli */}
            <div className="max-w-[1100px] mx-auto">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#0B1F3A] mb-5 text-center">
                Eğitim Modeli
              </h3>
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed mb-4 text-center">
                Woody Academy sürecinde eğitimler, Woody Academy İngilizce öğretmenleri tarafından online platform üzerinden yürütülür.
              </p>
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed mb-6 text-center">
                Öğrenciler, <strong>Pro Serisi fiziksel materyaller</strong> ile desteklenen birebir özel ders modeli ile eğitim alır.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                <div className="bg-gradient-to-br from-[#F0F9FF] to-white p-6 rounded-xl border border-[#3498DB]/20">
                  <span className="text-[#3498DB] text-2xl mb-3 block">✓</span>
                  <p className="text-[15px] text-gray-700 font-medium">Öğrenciye özel ilerleme sağlanır</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF9E6] to-white p-6 rounded-xl border border-[#FFB800]/20">
                  <span className="text-[#FFB800] text-2xl mb-3 block">✓</span>
                  <p className="text-[15px] text-gray-700 font-medium">Eksik alanlar hızlı şekilde tamamlanır</p>
                </div>
                <div className="bg-gradient-to-br from-[#F0FFF4] to-white p-6 rounded-xl border border-[#2ECC71]/20">
                  <span className="text-[#2ECC71] text-2xl mb-3 block">✓</span>
                  <p className="text-[15px] text-gray-700 font-medium">Aktif katılım ve konuşma pratiği artar</p>
                </div>
                <div className="bg-gradient-to-br from-[#FFF5F5] to-white p-6 rounded-xl border border-[#E74C3C]/20">
                  <span className="text-[#E74C3C] text-2xl mb-3 block">✓</span>
                  <p className="text-[15px] text-gray-700 font-medium">Öğrenme süreci bireyselleştirilir</p>
                </div>
              </div>
            </div>

            {/* Süreç Nasıl İlerler */}
            <div className="max-w-[1000px] mx-auto">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#0B1F3A] mb-8 text-center">
                Süreç Nasıl İlerler?
              </h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3498DB] to-[#2ECC71] hidden md:block"></div>
                
                <div className="space-y-8">
                  {[
                    "İlk üç seri tamamlanır ve temel dil altyapısı oluşturulur",
                    "Woody Academy ile uzaktan eğitim süreci başlar",
                    "Öğrenci okuma ve yazma becerilerini geliştirir",
                    "Sistemli tekrar ile dil kalıcı hale gelir",
                    "Öğrenci Cambridge sınavına hazır hale getirilir"
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-6 md:gap-8">
                      <div className="hidden md:flex w-1/2 justify-end pr-8">
                        {index % 2 === 0 && (
                          <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 max-w-[400px]">
                            <p className="text-[15px] text-gray-700 leading-relaxed">{step}</p>
                          </div>
                        )}
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-[#3498DB] to-[#2ECC71] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 md:w-1/2 pl-0 md:pl-8">
                        {(index % 2 === 1 || window.innerWidth < 768) && (
                          <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100 md:max-w-[400px]">
                            <p className="text-[15px] text-gray-700 leading-relaxed">{step}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sertifika Süreci & Sonuç */}
            <div className="max-w-[1000px] mx-auto bg-gradient-to-br from-[#F8F9FA] to-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#0B1F3A] mb-5 text-center">
                Sertifika Süreci
              </h3>
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed mb-4 text-center">
                Programı tamamlayan öğrenciler:
              </p>
              <ul className="space-y-3 mb-8 max-w-[600px] mx-auto">
                <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                  <span className="text-[#2ECC71] mt-1">✓</span>
                  <span>Cambridge sınavına katılır</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                  <span className="text-[#2ECC71] mt-1">✓</span>
                  <span>Başarılı olduklarında sertifikalarını alır</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                  <span className="text-[#2ECC71] mt-1">✓</span>
                  <span>Uluslararası geçerliliğe sahip bir belgeye sahip olur</span>
                </li>
              </ul>
              
              <div className="border-t border-gray-200 pt-8 mt-8">
                <p className="text-[16px] md:text-[17px] text-gray-800 leading-relaxed text-center">
                  <strong className="text-[#0B1F3A]">Sonuç:</strong> Woody Academy, mezuniyet sonrası süreci yapılandırır, öğrenciyi akademik olarak geliştirir ve bu gelişimi Cambridge sertifikası ile somut hale getirir. Aynı zamanda birebir online özel ders modeli sayesinde, her öğrenci kendi hızında ve ihtiyaçlarına göre ilerleyerek sınav sürecine güçlü bir şekilde hazırlanır.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Teacher Development Program */}
      <section className="w-full bg-gradient-to-br from-[#F8F9FA] to-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          
          {/* Section Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] mb-4 leading-tight">
              Öğretmen – Gelişim Programı
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFB800] to-[#E74C3C] mx-auto"></div>
          </div>

          {/* 50/50 Reverse Layout */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-start mb-12">
            
            {/* Image Block */}
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/voarnm0e_freepik_ultra-hyperrealistic-scene-of-a-25yearold-european-female-teacher-standing-in-front-of-a-historic-cambridgestyle-university-building-elegant-stone-architecture-clearly-visible.-camera-per_0001%20%281%29.png"
                  alt="Cambridge TKT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Block */}
            <div className="w-full lg:w-1/2 space-y-6">
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed">
                Woody Academy kapsamında, <strong>Woody sistemini kullanan tüm okul öğretmenleri otomatik olarak öğretmen gelişim programına dahil edilir.</strong>
              </p>
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed">
                Bu program için ayrıca bir başvuruya gerek yoktur. Sistemi kullanan her öğretmen, <strong>sürece doğrudan ve ücretsiz şekilde katılım sağlar.</strong>
              </p>

              <div className="pt-4">
                <h3 className="text-[22px] md:text-[26px] font-bold text-[#0B1F3A] mb-4">
                  Cambridge TKT Temelli Eğitim Süreci
                </h3>
                <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed mb-5">
                  Program, uluslararası geçerliliğe sahip <strong>Cambridge English TKT (Teaching Knowledge Test)</strong> modeli temel alınarak yapılandırılmıştır.
                </p>
                <p className="text-[15px] md:text-[16px] text-gray-600 mb-4">Bu süreçte öğretmenler:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                    <span className="text-[#3498DB] mt-1">→</span>
                    <span>Dil öğretim metodolojilerini öğrenir</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                    <span className="text-[#3498DB] mt-1">→</span>
                    <span>Oyun temelli eğitim tekniklerini uygular</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                    <span className="text-[#3498DB] mt-1">→</span>
                    <span>Sınıf yönetimi becerilerini geliştirir</span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                    <span className="text-[#3498DB] mt-1">→</span>
                    <span>Sistemli ders planlama yaklaşımını benimser</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="max-w-[1100px] mx-auto space-y-10">
            
            {/* Sertifika Süreci */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#0B1F3A] mb-5">
                Sertifika Süreci
              </h3>
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed mb-4">
                Eğitim programını tamamlayan öğretmenler:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                  <span className="text-[#2ECC71] mt-1 text-lg">✓</span>
                  <span>Cambridge TKT sınavına katılabilir</span>
                </li>
                <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-700">
                  <span className="text-[#2ECC71] mt-1 text-lg">✓</span>
                  <span>Başarılı olduklarında uluslararası geçerliliğe sahip sertifikalarını alabilir</span>
                </li>
              </ul>
              <div className="bg-[#F0FFF4] border-l-4 border-[#2ECC71] p-5 rounded-r-lg">
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-relaxed">
                  Bu sertifika, öğretmenin mesleki yeterliliğini uluslararası düzeyde belgeleyen önemli bir kazanımdır.
                </p>
              </div>
            </div>

            {/* Sistemin Avantajları */}
            <div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#0B1F3A] mb-6 text-center">
                Sistemin Sağladığı Avantaj
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-[#FFB800] text-2xl mb-3 block">★</span>
                  <p className="text-[15px] text-gray-700 leading-relaxed">Tüm öğretmenler otomatik olarak sisteme dahil edilir</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-[#3498DB] text-2xl mb-3 block">★</span>
                  <p className="text-[15px] text-gray-700 leading-relaxed">Ek maliyet olmadan profesyonel gelişim sağlanır</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-[#2ECC71] text-2xl mb-3 block">★</span>
                  <p className="text-[15px] text-gray-700 leading-relaxed">Eğitim kalitesi kurum genelinde standart hale gelir</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-[#E74C3C] text-2xl mb-3 block">★</span>
                  <p className="text-[15px] text-gray-700 leading-relaxed">Uluslararası geçerliliğe sahip bir gelişim süreci sunulur</p>
                </div>
              </div>
            </div>

            {/* Sonuç */}
            <div className="bg-gradient-to-br from-[#FFF9E6] to-white p-8 md:p-10 rounded-2xl border border-[#FFB800]/30 shadow-sm">
              <p className="text-[16px] md:text-[17px] text-gray-800 leading-relaxed text-center">
                <strong className="text-[#0B1F3A]">Sonuç:</strong> Woody Academy öğretmen programı, kurum içindeki tüm öğretmenleri sistemli bir gelişim sürecine dahil eder ve bu süreci uluslararası geçerliliğe sahip Cambridge TKT sertifikası ile destekler.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default WoodyAcademyPage;
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
