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
      <section className="relative w-full bg-white mt-[72px] py-12 md:py-16">
        <div className="max-w-[600px] mx-auto px-6 flex items-center justify-center">
          <img 
            src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/uqaprkim_6.png" 
            alt="Woody Academy" 
            className="w-full max-w-[450px] object-contain"
          />
        </div>
        
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

      {/* Section 1: Student Cambridge Program */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] mb-2 leading-tight">
              Öğrenci
            </h2>
            <h3 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] mb-4 leading-tight">
              Cambridge Sertifika Süreci
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3498DB] to-[#2ECC71] mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/dbzvnesg_Little%20girl%20at%20home%20holding%20a%20certificate%20mock-up.png"
                  alt="Cambridge Sertifika"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

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

          <div className="mt-12 lg:mt-16 space-y-12">
            
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
                <div className="bg-white p-6 rounded-xl border border-[#3498DB]/20">
                  <span className="text-[#3498DB] text-2xl mb-3 block">✓</span>
                  <p className="text-[15px] text-gray-700 font-medium">Öğrenciye özel ilerleme sağlanır</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#FFB800]/20">
                  <span className="text-[#FFB800] text-2xl mb-3 block">✓</span>
                  <p className="text-[15px] text-gray-700 font-medium">Eksik alanlar hızlı şekilde tamamlanır</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#2ECC71]/20">
                  <span className="text-[#2ECC71] text-2xl mb-3 block">✓</span>
                  <p className="text-[15px] text-gray-700 font-medium">Aktif katılım ve konuşma pratiği artar</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#E74C3C]/20">
                  <span className="text-[#E74C3C] text-2xl mb-3 block">✓</span>
                  <p className="text-[15px] text-gray-700 font-medium">Öğrenme süreci bireyselleştirilir</p>
                </div>
              </div>
            </div>

            <div className="max-w-[1000px] mx-auto bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
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
                  <strong className="text-[#0B1F3A]">Sonuç:</strong> Woody Academy, mezuniyet sonrası süreci yapılandırır, öğrenciyi akademik olarak geliştirir ve bu gelişimi Cambridge sertifikası ile somut hale getirir.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Teacher Program */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-20">
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] mb-2 leading-tight">
              Öğretmen
            </h2>
            <h3 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] mb-4 leading-tight">
              Gelişim Programı (TKT)
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFB800] to-[#E74C3C] mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-start mb-12">
            
            <div className="w-full lg:w-1/2">
              <div className="w-full h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/7wnfbfu1_ChatGPT%20Image%2016%20Nis%202026%2013_04_02.png"
                  alt="Cambridge TKT"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

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

          <div className="max-w-[1100px] mx-auto space-y-10">
            
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

            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#FFB800]/30 shadow-sm">
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
