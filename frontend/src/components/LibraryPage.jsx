import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const LibraryPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const levels = [
    {
      id: 'basic',
      name: 'Woody Digital Library – Basic Level',
      description: 'Basic Level Digital Library, başlangıç seviyesindeki öğretmen ve öğrenci kitaplarının incelenebileceği dijital kütüphane alanıdır. Kurumlar, içerik yapısını ve kazanımları önceden görerek sistemi net şekilde değerlendirebilir.',
      color: '#2196F3',
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/x7apff07_kling_20260412_%E4%BD%9C%E5%93%81_Ultra_deta_5707_2.png',
      imagePosition: 'left',
      teacherLink: '#',
      studentLink: '#'
    },
    {
      id: 'junior',
      name: 'Woody Digital Library – Junior Level',
      description: 'Junior Level Digital Library, öğrencilerin cümle kurma ve temel iletişim becerilerini geliştirdiği içeriklerin incelenebileceği dijital kütüphane alanıdır. Kurumlar, bu seviyede yer alan öğretmen ve öğrenci kitaplarını inceleyerek sistemin ilerleyen yapısını net şekilde görebilir.',
      color: '#F5C518',
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/x7apff07_kling_20260412_%E4%BD%9C%E5%93%81_Ultra_deta_5707_2.png',
      imagePosition: 'right',
      teacherLink: '#',
      studentLink: '#'
    },
    {
      id: 'senior',
      name: 'Woody Digital Library – Senior Level',
      description: 'Senior Level Digital Library, öğrencilerin akıcı iletişim kurduğu ve yapıları birleştirerek kullandığı ileri seviye içeriklerin incelenebileceği dijital kütüphane alanıdır. Kurumlar, öğretmen ve öğrenci kitaplarını inceleyerek programın üst düzey kazanımlarını ve iletişim odaklı yapısını değerlendirebilir.',
      color: '#E91E90',
      image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/x7apff07_kling_20260412_%E4%BD%9C%E5%93%81_Ultra_deta_5707_2.png',
      imagePosition: 'left',
      teacherLink: '#',
      studentLink: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />
      <div className="pt-[72px]" />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-light text-gray-900 mb-6 leading-tight">
            Woody Digital Library Nedir?
          </h1>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8] max-w-[800px] mx-auto mb-4">
            Woody Digital Library, kurumların eğitim seti içeriklerini önceden inceleyebileceği dijital bir kütüphane alanıdır.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8] max-w-[800px] mx-auto mb-4">
            Bu platform üzerinden hem öğretmen hem de öğrenci kitapları detaylı şekilde görüntülenebilir. Üniteler, içerik yapısı ve kazanımlar incelenerek sistemin nasıl ilerlediği net şekilde görülür.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8] max-w-[800px] mx-auto">
            Woody Digital Library, kurumlara satın alma öncesi şeffaf bir inceleme imkânı sunar ve eğitim modelinin tamamını net bir şekilde değerlendirme fırsatı sağlar.
          </p>
        </div>
      </section>

      {/* Magazine Spread Layout - Responsive */}
      <section className="w-full">
        {levels.map((level) => {
          const isLeft = level.imagePosition === 'left';
          
          return (
            <div 
              key={level.id}
              className={`w-full flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-screen`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-[50vh] md:h-screen">
                <img 
                  src={level.image}
                  alt={level.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-20 bg-white">
                <div className="max-w-xl">
                  <div className="inline-block px-5 py-2 rounded-full text-sm font-bold text-white mb-6"
                    style={{ backgroundColor: level.color }}
                  >
                    {level.id.charAt(0).toUpperCase() + level.id.slice(1)} Level
                  </div>
                  
                  <h4 className="text-3xl md:text-4xl font-light text-gray-900 mb-5 leading-tight">
                    {level.name}
                  </h4>
                  
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                    {level.description}
                  </p>
                  
                  {/* Links */}
                  <div className="flex flex-col gap-4">
                    <a 
                      href={level.teacherLink}
                      className="text-base text-gray-700 font-medium underline hover:text-gray-900 transition-colors"
                      style={{ 
                        textDecorationColor: level.color,
                        textDecorationThickness: '2px',
                        textUnderlineOffset: '4px'
                      }}
                    >
                      {level.id.charAt(0).toUpperCase() + level.id.slice(1)} öğretmen kitaplarını görmek için tıklayın
                    </a>
                    <a 
                      href={level.studentLink}
                      className="text-base text-gray-700 font-medium underline hover:text-gray-900 transition-colors"
                      style={{
                        textDecorationColor: level.color,
                        textDecorationThickness: '2px',
                        textUnderlineOffset: '4px'
                      }}
                    >
                      {level.id.charAt(0).toUpperCase() + level.id.slice(1)} öğrenci kitaplarını görmek için tıklayın
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default LibraryPage;
